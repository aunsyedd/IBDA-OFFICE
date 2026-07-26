import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import { InfoDock, Perks } from "@/components/InfoDock";
import { getDict } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  return (
    <>
      <Hero dict={dict} />
      <ServicesSection locale={locale} dict={dict} />
      <InfoDock dict={dict} />
      <Perks dict={dict} locale={locale} />
    </>
  );
}
