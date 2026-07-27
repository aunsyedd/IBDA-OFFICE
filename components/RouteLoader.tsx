"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./PageLoader";

const FADE_MS = 350;
/** Loader stays visible at least this long from navigation start (click / back-forward). */
const MIN_ROUTE_MS = 1000;

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
  const navigating = useRef(false);
  const mountedRef = useRef(false);
  const navigationStartedAt = useRef(0);
  const pathnameRef = useRef(pathname);
  const isFirstPathname = useRef(true);

  const clearHideTimer = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = null;
  }, []);

  const showLoader = useCallback(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setActive(true));
    });
  }, []);

  const hideLoader = useCallback(() => {
    setActive(false);
    hideTimer.current = setTimeout(() => {
      mountedRef.current = false;
      navigating.current = false;
      setMounted(false);
    }, FADE_MS);
  }, []);

  const beginNavigation = useCallback(() => {
    clearHideTimer();
    navigating.current = true;
    navigationStartedAt.current = Date.now();
    showLoader();
  }, [clearHideTimer, showLoader]);

  const completeNavigation = useCallback(() => {
    if (!navigating.current && !mountedRef.current) return;

    clearHideTimer();

    const elapsed = Date.now() - navigationStartedAt.current;
    const wait = Math.max(0, MIN_ROUTE_MS - elapsed);

    hideTimer.current = setTimeout(hideLoader, wait);
  }, [clearHideTimer, hideLoader]);

  // Route finished — wait until full 1s has passed since navigation started
  useEffect(() => {
    if (isFirstPathname.current) {
      isFirstPathname.current = false;
      pathnameRef.current = pathname;
      return;
    }

    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname;
      completeNavigation();
    }
  }, [pathname, completeNavigation]);

  // Link clicks + browser back/forward
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element).closest("a");
      if (!anchor || !isInternalNavigation(anchor, pathnameRef.current)) return;

      beginNavigation();
    };

    const onPopState = () => beginNavigation();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      clearHideTimer();
    };
  }, [beginNavigation, clearHideTimer]);

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
