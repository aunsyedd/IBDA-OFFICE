import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import ServiceLogo from "@/components/ServiceLogo";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getDict } from "@/lib/dictionaries";
import { isLocale, site } from "@/lib/i18n";
import { servicePath } from "@/lib/services";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDict(locale).services.heading };
}

const accents = [
  "bg-teal-600/5",
  "bg-gold-500/8",
  "bg-navy-800/5",
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <h1 className="heading-rule text-3xl font-black text-navy-900 sm:text-4xl">
          {dict.services.heading}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-navy-800/70">
          {dict.services.sub}
        </p>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {dict.services.items.map((s, i) => {
          return (
            <li
              key={s.key}
              id={s.key}
              className="flex scroll-mt-24 flex-col rounded-2xl border border-line bg-white p-6 shadow-card sm:flex-row sm:items-start"
            >
              <span
                className={`flex shrink-0 items-center justify-center rounded-2xl p-2 ${accents[i % accents.length]}`}
              >
                <ServiceLogo serviceKey={s.key} title={s.title} size="lg" />
              </span>
              <div className="mt-4 sm:mt-0 sm:ms-4">
                <h2 className="text-lg font-extrabold text-navy-900">{s.title}</h2>
                <p className="mt-1.5 text-sm leading-7 text-navy-800/70">{s.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={servicePath(locale, s.key)}
                    className="focus-gold inline-flex items-center gap-1.5 rounded text-sm font-bold text-navy-900 transition hover:text-teal-700"
                  >
                    {dict.services.learnMore}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                  </Link>
                  <a
                    href={site.waLink(`${s.title} — ${dict.services.cta}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-gold inline-flex items-center gap-1.5 rounded text-sm font-bold text-teal-700 transition hover:text-teal-600"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {dict.services.cta}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-14 rounded-3xl bg-navy-900 p-8 text-center text-white shadow-dock">
        <p className="text-lg font-extrabold">{dict.hero.badge}</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-white/75">
          {dict.servicePage.ctaNote}
        </p>
        <div className="mt-6">
          <WhatsAppButton
            message={dict.hero.cta}
            label={dict.servicePage.chatWhatsApp}
            variant="gold"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
