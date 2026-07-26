import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Clock,
  Headset,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { getDict } from "@/lib/dictionaries";
import { isLocale, site } from "@/lib/i18n";
import { LogoMark } from "@/components/Logo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDict(locale).about.heading };
}

const featureIcons = [ShieldCheck, Timer, BadgeCheck, Headset];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="flex items-center gap-4">
        <LogoMark className="h-16 w-16 shrink-0 text-navy-900" />
        <div>
          <h1 className="text-3xl font-black text-navy-900 sm:text-4xl">
            {dict.about.heading}
          </h1>
          <p className="mt-1 font-bold text-gold-600">{dict.about.sub}</p>
        </div>
      </div>

      <div className="mt-8 space-y-5 text-base leading-8 text-navy-800/85">
        <p>{dict.about.p1}</p>
        <p>{dict.about.p2}</p>
      </div>

      {/* Pay after completion — the office's core promise */}
      <div className="mt-10 flex items-start gap-4 rounded-3xl bg-navy-900 p-7 text-white shadow-dock">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold-500 text-navy-950">
          <BadgeCheck className="h-7 w-7" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold">{dict.about.payTitle}</h2>
          <p className="mt-1.5 text-sm leading-7 text-white/80">{dict.about.payDesc}</p>
        </div>
      </div>

      <h2 className="mt-14 text-center">
        <span className="heading-rule text-2xl font-black text-navy-900">
          {dict.about.whyTitle}
        </span>
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {dict.features.map((f, i) => {
          const Icon = featureIcons[i];
          return (
            <li
              key={f.title}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-card"
            >
              <Icon className="h-8 w-8 shrink-0 text-teal-700" strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3 className="font-extrabold text-navy-900">{f.title}</h3>
                <p className="mt-1 text-sm leading-6 text-navy-800/70">{f.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <h2 className="mt-14 text-center">
        <span className="heading-rule text-2xl font-black text-navy-900">
          {dict.about.visitTitle}
        </span>
      </h2>
      <ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
        <li className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
          <MapPin className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
          <span className="font-bold text-navy-900">
            {dict.info.location.l1} – {dict.info.location.l2}
          </span>
        </li>
        <li className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
          <Clock className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
          <span className="font-bold text-navy-900">
            {dict.info.hours.l1} · <span dir="ltr">{dict.info.hours.l2}</span>
          </span>
        </li>
        <li className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
          
          <Phone className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
          <a
        href={site.waLink("Hello, I would like to know more about your services.")}
    target="_blank"
    rel="noopener noreferrer"
    dir="ltr"
    className="font-bold text-navy-900 hover:text-gold-600"
          >
            {site.phoneIntl}
          </a>
        </li>
        <li className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
          <Mail className="h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
<a
    href={site.gmailLink("Website Inquiry", "Hello, I would like to know more about your services.")}
    target="_blank"
    rel="noopener noreferrer"
    dir="ltr"
    className="font-bold text-navy-900 hover:text-gold-400"
>
  {site.email}
</a>
        </li>
      </ul>
    </div>
  );
}
