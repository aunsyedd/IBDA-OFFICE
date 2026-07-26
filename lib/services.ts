import type { Locale } from "./i18n";

export const serviceKeys = [
  "commercial",
  "labor-tax",
  "social-insurance",
  "muqeem",
  "qiwa",
  "attestation",
  "labor-transfer",
  "services-transfer",
  "work-permits",
  "residency",
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export function isServiceKey(value: string): value is ServiceKey {
  return (serviceKeys as readonly string[]).includes(value);
}

export function servicePath(locale: Locale, key: ServiceKey | string): string {
  return `/${locale}/services/${key}`;
}
