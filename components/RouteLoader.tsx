"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./PageLoader";

const FADE_MS = 350;
const SHOW_DELAY_MS = 60;
const MIN_VISIBLE_MS = 1000;

function isInternalNavigation(anchor: HTMLAnchorElement, pathname: string): boolean {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return false;
  if (/^(https?:|mailto:|tel:|javascript:)/i.test(href)) return false;
  if (anchor.target === "_blank" || anchor.hasAttribute("download")) return false;

  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return false;
    if (url.pathname === pathname && !url.search && !url.hash) return false;
    return true;
  } catch {
    return false;
  }
}

export default function RouteLoader({ label }: { label: string }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigating = useRef(false);
  const mountedRef = useRef(false);
  const visibleSince = useRef(0);

  const clearTimers = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (showTimer.current) clearTimeout(showTimer.current);
    hideTimer.current = null;
    showTimer.current = null;
  }, []);

  const fadeIn = useCallback(() => {
    mountedRef.current = true;
    visibleSince.current = Date.now();
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setActive(true));
    });
  }, []);

  const fadeOut = useCallback(() => {
    setActive(false);
    hideTimer.current = setTimeout(() => {
      mountedRef.current = false;
      setMounted(false);
    }, FADE_MS);
  }, []);

  const startLoading = useCallback(() => {
    if (navigating.current) return;
    navigating.current = true;
    clearTimers();
    showTimer.current = setTimeout(fadeIn, SHOW_DELAY_MS);
  }, [clearTimers, fadeIn]);

  const finishLoading = useCallback(() => {
    navigating.current = false;
    clearTimers();

    if (!mountedRef.current) return;

    const elapsed = Date.now() - visibleSince.current;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);

    hideTimer.current = setTimeout(fadeOut, wait);
  }, [clearTimers, fadeOut]);

  useEffect(() => {
    finishLoading();
  }, [pathname, finishLoading]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element).closest("a");
      if (!anchor || !isInternalNavigation(anchor, pathname)) return;

      startLoading();
    };

    const onPopState = () => startLoading();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      clearTimers();
    };
  }, [pathname, startLoading, clearTimers]);

  if (!mounted) return null;

  return (
    <div
      className={`route-loader-overlay ${active ? "is-active" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={label}
      aria-hidden={!active}
    >
      <div className={`route-progress-bar ${active ? "is-active" : ""}`} aria-hidden="true" />
      <div className="route-loader-content flex flex-1 items-center justify-center">
        <PageLoader label={label} compact />
      </div>
    </div>
  );
}
