import Image from "next/image";
import { dictionaries } from "./dictionaries";

/** Grid order matches the reference logo sheet (7 columns × 3 rows). */
export const serviceLogoKeys = dictionaries.en.services.items.map((item) => item.key);

export function serviceLogoSrc(key: string): string {
  return `/services/${key}.png`;
}

export function hasServiceLogo(key: string): boolean {
  return serviceLogoKeys.includes(key);
}

export const serviceLogoSizes = {
  sm: { box: "h-14 w-20", width: 80, height: 56, img: "max-h-12 max-w-[4.5rem] w-auto h-auto" },
  md: { box: "h-16 w-24", width: 96, height: 64, img: "max-h-14 max-w-[5.5rem] w-auto h-auto" },
  lg: { box: "h-20 w-28", width: 112, height: 80, img: "max-h-[4.5rem] max-w-[6.5rem] w-auto h-auto" },
  xl: { box: "h-24 w-32", width: 128, height: 96, img: "max-h-20 max-w-[7.5rem] w-auto h-auto" },
} as const;

export type ServiceLogoSize = keyof typeof serviceLogoSizes;
