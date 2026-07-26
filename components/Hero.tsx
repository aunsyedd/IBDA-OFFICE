import { BadgeCheck, FileText, Headset, ShieldCheck, Timer } from "lucide-react";
import type { Dict } from "@/lib/dictionaries";
import { site } from "@/lib/i18n";
import { LogoMark } from "./Logo";

const featureIcons = [ShieldCheck, Timer, BadgeCheck, Headset];

function Skyline() {
  return (
    <svg
      viewBox="0 0 400 160"
      className="absolute inset-x-0 bottom-0 w-full text-navy-800"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="18" y="70" width="26" height="90" rx="2" />
        <rect x="52" y="95" width="20" height="65" rx="2" />
        <rect x="80" y="40" width="30" height="120" rx="2" />
        <rect x="118" y="82" width="22" height="78" rx="2" />
        <rect x="148" y="18" width="34" height="142" rx="3" />
        <rect x="190" y="66" width="24" height="94" rx="2" />
        <rect x="222" y="92" width="20" height="68" rx="2" />
        <rect x="250" y="34" width="30" height="126" rx="2" />
        <rect x="288" y="76" width="24" height="84" rx="2" />
        <rect x="320" y="52" width="28" height="108" rx="2" />
        <rect x="356" y="88" width="22" height="72" rx="2" />
      </g>
      <g fill="#c89a45" opacity="0.85">
        <rect x="156" y="30" width="18" height="3" rx="1.5" />
        <rect x="156" y="40" width="18" height="3" rx="1.5" />
        <rect x="88" y="52" width="14" height="3" rx="1.5" />
        <rect x="258" y="46" width="14" height="3" rx="1.5" />
        <rect x="328" y="64" width="12" height="3" rx="1.5" />
      </g>
    </svg>
  );
}

export default function Hero({ dict }: { dict: Dict }) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Dotted flank texture, as in the reference */}
      <div className="dot-grid absolute inset-y-0 start-0 hidden w-24 opacity-60 lg:block" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl  gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        {/* Thesis */}
        <div className="relative">
          <div className="flex items-center gap-5">
            <LogoMark className="h-20 w-20 shrink-0 text-navy-900 sm:h-24 sm:w-24" />
            <div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-navy-900 sm:text-6xl">
                {dict.hero.title}
              </h1>
              <p className="mt-1 text-xl font-extrabold uppercase tracking-[0.18em] text-gold-500 sm:text-2xl">
                {dict.hero.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-navy-800/80">
            {dict.hero.desc}
          </p>

          {/* Trust strip */}
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-line rtl:sm:divide-x-reverse">
            {dict.features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <li key={f.title} className="px-1 text-center sm:px-3">
                  <Icon className="mx-auto h-8 w-8 text-navy-900" strokeWidth={1.6} aria-hidden="true" />
                  <p className="mt-2 text-sm font-extrabold text-navy-900">{f.title}</p>
                  <p className="mt-1 text-xs leading-5 text-navy-800/70">{f.desc}</p>
                </li>
              );
            })}
          </ul>

          <div className="mt-9">
            <a
              href={site.waLink(dict.hero.cta)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold inline-flex items-center gap-3 rounded-full bg-navy-900 py-3 text-base font-extrabold text-white shadow-card ring-2 ring-gold-500/70 ring-offset-2 transition hover:bg-navy-800 ltr:pl-7 ltr:pr-3 rtl:pl-3 rtl:pr-7"
            >
              {dict.hero.cta}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500 text-navy-950">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        {/* Decorative city panel */}
        <div className="relative hidden lg:block">
  <div className="relative aspect-[6/5] overflow-hidden rounded-3xl bg-gradient-to-b from-navy-700 via-navy-900 to-navy-950 shadow-dock">            <svg viewBox="0 0 200 200" className="absolute -top-16 -end-16 h-72 w-72 opacity-25" aria-hidden="true">
              <path
                d="M100 20a80 80 0 1 0 80 80"
                fill="none"
                stroke="#c89a45"
                strokeWidth="14"
                strokeLinecap="round"
              />
            </svg>
            <div className="dot-grid absolute inset-0 opacity-[0.07] invert" aria-hidden="true" />
            <Skyline />

            {/* Pay-after-completion badge — real promise from the office */}
            <div className="absolute inset-x-6 top-8 rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-600">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-navy-900">{dict.hero.badge}</p>
                  <p className="text-xs text-navy-800/70">{dict.hero.badgeNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
