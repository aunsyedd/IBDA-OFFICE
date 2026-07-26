import Link from "next/link";
import { getDict } from "@/lib/dictionaries";
import { defaultLocale } from "@/lib/i18n";

export default function NotFound() {
  const dict = getDict(defaultLocale);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-6xl font-black text-navy-900">404</p>
      <h1 className="mt-4 text-2xl font-black text-navy-900">{dict.notFound.title}</h1>
      <p className="mt-2 text-sm leading-7 text-navy-800/70">{dict.notFound.desc}</p>
      <Link
        href={`/${defaultLocale}`}
        className="focus-gold mt-8 rounded-full bg-navy-900 px-8 py-3 text-sm font-extrabold text-white transition hover:bg-navy-800"
      >
        {dict.notFound.backHome}
      </Link>
    </div>
  );
}
