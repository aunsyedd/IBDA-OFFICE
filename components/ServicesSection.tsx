import Link from "next/link";
import ServiceLogo from "@/components/ServiceLogo";
import type { Dict } from "@/lib/dictionaries";
import { type Locale } from "@/lib/i18n";
import { servicePath } from "@/lib/services";

// How many sub-services to preview on each card before "+N more"
const MAX_VISIBLE_SUB_SERVICES = 5;

export default function ServicesSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dict;
}) {
  return (
    <section className="relative z-10 mx-auto -mt-6 max-w-7xl px-4 sm:px-6">
      <div className="rounded-3xl bg-white p-6 shadow-card sm:p-10">
        <div className="text-center">
          <h2 className="heading-rule text-3xl font-black text-navy-900">
            {dict.services.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-navy-800/70">
            {dict.services.sub}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dict.services.items.map((s) => {
            const hidden = s.subServices.length - MAX_VISIBLE_SUB_SERVICES;
            return (
              <li key={s.key}>
                <Link
                  href={servicePath(locale, s.key)}
                  className="focus-gold group flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-5 text-start transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-card"
                >
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <ServiceLogo
                      serviceKey={s.key}
                      title={s.title}
                      size="md"
                      className="transition group-hover:scale-105"
                    />
                    <span className="text-sm font-extrabold leading-5 text-navy-900">
                      {s.title}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {s.subServices.slice(0, MAX_VISIBLE_SUB_SERVICES).map((sub) => (
                      <li
                        key={sub}
                        className="flex items-start gap-2 text-xs leading-5 text-navy-800/70"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                          aria-hidden="true"
                        />
                        {sub}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between gap-2">
                    {hidden > 0 ? (
                      <span className="text-xs font-bold text-teal-700">
                        +{hidden} {dict.services.moreLabel}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs font-bold text-navy-900 opacity-0 transition group-hover:opacity-100">
                      {dict.services.learnMore} ←
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
