"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import type { Dict } from "@/lib/dictionaries";
import { site, otherLocale, type Locale } from "@/lib/i18n";
import { LogoMark } from "./Logo";

export default function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/track`, label: dict.nav.track },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/complaint`, label: dict.nav.complaint },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  const switchHref = (() => {
    const target = otherLocale(locale);
    const rest = pathname.replace(new RegExp(`^/${locale}`), "");
    return `/${target}${rest}`;
  })();

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 shadow-lg shadow-navy-950/20 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* WhatsApp pill — mirrors the reference header */}
        <a
          href={site.waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-gold hidden items-center gap-2 rounded-full bg-gradient-to-b from-gold-400 to-gold-600 px-4 py-2 text-sm font-bold text-navy-950 ring-1 ring-white/30 transition hover:brightness-110 lg:flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {dict.nav.whatsapp}
        </a>

        {/* Brand (visible on mobile where the pill is hidden) */}
        <Link
          href={`/${locale}`}
          className="focus-gold flex items-center gap-2 lg:hidden"
          aria-label={dict.hero.title}
        >
          <LogoMark className="h-8 w-8 text-white" />
          <span className="text-sm font-extrabold text-white">
            {dict.brand.word} {dict.brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-gold relative rounded-md px-3 py-2 text-sm font-bold transition ${
                isActive(link.href)
                  ? "text-gold-400"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            className="focus-gold flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-xs font-bold text-white transition hover:border-gold-400 hover:text-gold-400"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            {dict.common.langSwitch}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-gold rounded-md p-2 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-white/10 bg-navy-950 px-4 pb-4 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm font-bold ${
                isActive(link.href)
                  ? "bg-white/5 text-gold-400"
                  : "text-white/85 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold-400 to-gold-600 px-4 py-2.5 text-sm font-bold text-navy-950"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {dict.nav.whatsapp}
          </a>
        </nav>
      )}
    </header>
  );
}
