import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, ListChecks, Sparkles } from "lucide-react";
import { serviceIcons } from "@/components/ServicesSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Dict } from "@/lib/dictionaries";
import { getServiceDetail } from "@/lib/service-details";
import { site, type Locale } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/services";

const accents = [
  "bg-teal-600/10 text-teal-700",
  "bg-gold-500/15 text-gold-600",
  "bg-navy-800/10 text-navy-800",
];

export default function ServiceDetailView({
  locale,
  dict,
  serviceKey,
  index,
}: {
  locale: Locale;
  dict: Dict;
  serviceKey: ServiceKey;
  index: number;
}) {
  const item = dict.services.items.find((s) => s.key === serviceKey)!;
  const detail = getServiceDetail(locale, serviceKey);
  const Icon = serviceIcons[serviceKey];
  const waMessage = `${item.title} — ${dict.servicePage.waMessage}`;

  return (
    <div className="pb-16">
      {/* Hero banner */}
      <div className="bg-gradient-to-b from-navy-900 to-navy-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <Link
            href={`/${locale}/services`}
            className="focus-gold inline-flex items-center gap-2 rounded text-sm font-bold text-gold-400 transition hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            {dict.servicePage.backToServices}
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
            <span
              className={`grid h-20 w-20 shrink-0 place-items-center rounded-3xl ${accents[index % accents.length]}`}
            >
              <Icon className="h-10 w-10" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <h1 className="text-3xl font-black sm:text-4xl">{item.title}</h1>
              <p className="mt-2 text-lg font-semibold text-gold-400">{detail.tagline}</p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">{detail.overview}</p>
              <div className="mt-6">
                <WhatsAppButton
                  message={waMessage}
                  label={dict.servicePage.requestNow}
                  variant="gold"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Turnaround badge */}
        <div className="relative -mt-6 rounded-2xl border border-line bg-white p-5 shadow-card">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-6 w-6 shrink-0 text-teal-700" aria-hidden="true" />
            <div>
              <p className="text-sm font-extrabold text-navy-900">{dict.servicePage.turnaround}</p>
              <p className="mt-1 text-sm leading-7 text-navy-800/75">{detail.turnaround}</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-black text-navy-900">
            <Sparkles className="h-6 w-6 text-gold-500" aria-hidden="true" />
            {dict.servicePage.benefits}
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {detail.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-card"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <span className="text-sm font-semibold leading-6 text-navy-800/85">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What's included */}
        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-xl font-black text-navy-900">
            <ListChecks className="h-6 w-6 text-gold-500" aria-hidden="true" />
            {dict.servicePage.includes}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {detail.includes.map((inc) => (
              <li
                key={inc}
                className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-navy-800/85 shadow-card"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                {inc}
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section className="mt-12">
          <h2 className="text-center">
            <span className="heading-rule text-xl font-black text-navy-900">
              {dict.servicePage.process}
            </span>
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {detail.process.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-line bg-white p-5 shadow-card"
              >
                <span className="absolute -top-3 start-5 grid h-7 w-7 place-items-center rounded-full bg-navy-900 text-xs font-black text-gold-400">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-extrabold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-navy-800/70">{step.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Pay after completion + CTA */}
        <section className="mt-14 overflow-hidden rounded-3xl bg-navy-900 p-8 text-center text-white shadow-dock sm:p-10">
          <p className="text-sm font-extrabold uppercase tracking-wider text-gold-400">
            {dict.hero.badge}
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-white/80">
            {dict.servicePage.ctaNote}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              message={waMessage}
              label={dict.servicePage.chatWhatsApp}
              variant="gold"
              size="lg"
            />
            {/* <a
              href={`tel:${site.phoneIntl.replace(/\s/g, "")}`}
              dir="ltr"
              className="focus-gold rounded-full border border-white/25 px-6 py-3 text-sm font-bold transition hover:border-gold-400 hover:text-gold-400"
            >
              {site.phoneIntl}
            </a> */}
          </div>
        </section>
      </div>
    </div>
  );
}
