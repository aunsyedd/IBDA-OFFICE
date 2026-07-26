import Link from "next/link";
import {
  ArrowRightLeft,
  Building2,
  ClipboardCheck,
  IdCard,
  Landmark,
  Leaf,
  Repeat,
  Stamp,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Dict } from "@/lib/dictionaries";
import { type Locale } from "@/lib/i18n";
import { servicePath } from "@/lib/services";

export const serviceIcons: Record<string, LucideIcon> = {
  commercial: Building2,
  "labor-tax": Landmark,
  "social-insurance": Users,
  muqeem: UserRoundCheck,
  qiwa: Leaf,
  attestation: Stamp,
  "labor-transfer": ArrowRightLeft,
  "services-transfer": Repeat,
  "work-permits": ClipboardCheck,
  residency: IdCard,
};

// Alternating accents like the reference cards (teal / gold / navy)
const accents = [
  "bg-teal-600/10 text-teal-700",
  "bg-gold-500/15 text-gold-600",
  "bg-navy-800/10 text-navy-800",
];

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
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-navy-800/70">
            {dict.services.sub}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {dict.services.items.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <li key={s.key}>
                <Link
                  href={servicePath(locale, s.key)}
                  className="focus-gold group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white px-3 py-6 text-center transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-card"
                >
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl transition group-hover:scale-105 ${accents[i % accents.length]}`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-extrabold leading-5 text-navy-900">
                    {s.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
