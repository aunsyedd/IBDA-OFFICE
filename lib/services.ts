import { dictionaries, type ServiceItem } from "./dictionaries";
import type { Locale } from "./i18n";

export const serviceKeys = dictionaries.en.services.items.map(
  (item) => item.key
) as readonly string[];

export type ServiceKey = (typeof serviceKeys)[number];

export function isServiceKey(value: string): value is ServiceKey {
  return (serviceKeys as readonly string[]).includes(value);
}

export function servicePath(locale: Locale, key: ServiceKey | string): string {
  return `/${locale}/services/${key}`;
}

export type { ServiceItem };
