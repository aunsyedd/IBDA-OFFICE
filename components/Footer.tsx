import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Dict } from "@/lib/dictionaries";
import { site, type Locale } from "@/lib/i18n";
import { servicePath } from "@/lib/services";
import { LogoLockup } from "./Logo";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const year = new Date().getFullYear();
  const quick = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/track`, label: dict.nav.track },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/complaint`, label: dict.nav.complaint },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  return (
    <footer className="mt-20 bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <LogoLockup dict={dict} onDark />
          <p className="mt-4 max-w-xs text-sm leading-7">{dict.footer.about}</p>
        </div>

        <nav aria-label={dict.footer.quick}>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-gold-400">
            {dict.footer.quick}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-gold-400">
            {dict.footer.servicesTitle}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {dict.services.items.slice(0, 5).map((s) => (
              <li key={s.key}>
                <Link
                  href={servicePath(locale, s.key)}
                  className="transition hover:text-gold-400"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-gold-400">
            {dict.footer.contact}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
              <a href={`tel:${site.phoneIntl.replace(/\s/g, "")}`} dir="ltr" className="hover:text-gold-400">
                {site.phoneIntl}
              </a>
            </li>
<li className="flex items-center gap-2.5">
  <Mail className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
<a
    href={site.gmailLink("Website Inquiry", "Hello, I would like to know more about your services.")}
    target="_blank"
    rel="noopener noreferrer"
    dir="ltr"
    className="hover:text-gold-400"
>
  {site.email}
</a>
</li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
              <span>
                {dict.info.location.l1} – {dict.info.location.l2}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
              <span>
                {dict.info.hours.l1} · {dict.info.hours.l2}
              </span>
            </li>
          </ul>
        </div>
      </div>

<div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
  <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-0">

    <span>© {year} {dict.footer.rights}</span>
    <span className="mx-5 hidden sm:inline">|</span>
  {dict.footer.developedBy}{" "}
      <span>

  <a

      href={dict.footer.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white transition hover:text-gold-400"
  >
     {dict.footer.company} 🚀
  </a>
    </span>
</div>
</div>
    </footer>//footer
  );
}
