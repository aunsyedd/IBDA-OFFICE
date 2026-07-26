import { notFound } from "next/navigation";
import ServiceDetailView from "@/components/ServiceDetailView";
import { getDict } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { isServiceKey, serviceKeys } from "@/lib/services";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["ar", "en"] as const) {
    for (const slug of serviceKeys) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceKey(slug)) return {};
  const dict = getDict(locale);
  const item = dict.services.items.find((s) => s.key === slug);
  return { title: item?.title, description: item?.desc };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceKey(slug)) notFound();

  const dict = getDict(locale);
  const index = dict.services.items.findIndex((s) => s.key === slug);
  if (index === -1) notFound();

  return (
    <ServiceDetailView locale={locale} dict={dict} serviceKey={slug} index={index} />
  );
}
