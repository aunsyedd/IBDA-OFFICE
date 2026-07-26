import PageLoader from "@/components/PageLoader";
import { getDict } from "@/lib/dictionaries";
import { defaultLocale } from "@/lib/i18n";

export default function Loading() {
  return <PageLoader dict={getDict(defaultLocale)} />;
}
