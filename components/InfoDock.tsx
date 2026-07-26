import Link from "next/link";
import {
  BadgePercent,
  Clock,
  ClipboardList,
  Gauge,
  Mail,
  MapPin,
  Medal,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { Dict } from "@/lib/dictionaries";
import { site, type Locale } from "@/lib/i18n";

function Cell({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Clock;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-5 text-center">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-extrabold text-white">{label}</h3>
        <Icon className="h-5 w-5 text-gold-500" aria-hidden="true" />
      </div>
      <div className="text-sm leading-6 text-white/80">{children}</div>
    </div>
  );
}

export function InfoDock({ dict }: { dict: Dict }) {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-3xl bg-navy-900 shadow-dock sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-white/10 rtl:lg:divide-x-reverse">
        <Cell icon={Clock} label={dict.info.hours.label}>
          <p>{dict.info.hours.l1}</p>
          <p dir="ltr">{dict.info.hours.l2}</p>
        </Cell>
        <Cell icon={Mail} label={dict.info.email.label}>
          
          <a
    href={site.gmailLink("Website Inquiry", "Hello, I would like to know more about your services.")}
    target="_blank"
    rel="noopener noreferrer"
    dir="ltr"
    className="hover:text-gold-400"
>
  {site.email}
</a>
          
        </Cell>
        <Cell icon={Phone} label={dict.info.contact.label}>
          {/* <p dir="ltr">
            <a
              href={`tel:${site.phoneIntl.replace(/\s/g, "")}`}
              className="focus-gold rounded transition hover:text-gold-400"
            >
              {site.phoneIntl}
            </a>
          </p> */}
          <p className="flex items-center justify-center gap-1.5" dir="ltr">
            <a
              href={site.waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold rounded font-bold text-white transition hover:text-gold-400"
            >
              {site.phoneLocal}
            </a>
            <MessageCircle className="h-4 w-4 text-wa" aria-hidden="true" />
          </p>
        </Cell>
        <Cell icon={MapPin} label={dict.info.location.label}>
          <p>{dict.info.location.l1}</p>
          <p>{dict.info.location.l2}</p>
        </Cell>
      </div>
    </section>
  );
}

const perkIcons = [ClipboardList, BadgePercent, Gauge, Medal];

export function Perks({ dict, locale }: { dict: Dict; locale: Locale }) {
  const perkLinks = [`/${locale}/track`, null, null, null] as const;

  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {dict.perks.map((p, i) => {
          const Icon = perkIcons[i];
          const href = perkLinks[i];
          const inner = (
            <>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-white text-teal-700 shadow-card">
                <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-extrabold text-navy-900">{p.title}</h3>
                <p className="mt-1 text-sm leading-6 text-navy-800/70">{p.desc}</p>
              </div>
            </>
          );

          return (
            <li key={p.title}>
              {href ? (
                <Link
                  href={href}
                  className="focus-gold group flex items-start gap-4 rounded-2xl transition hover:-translate-y-0.5"
                >
                  {inner}
                </Link>
              ) : (
                <div className="flex items-start gap-4">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
