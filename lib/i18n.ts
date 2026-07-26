export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

/** Business constants shared by both languages */
export const site = {
  phoneIntl: "+966-55-412-4666",
  phoneLocal: "055-412-4666",
  whatsapp: "966554124666",
  email: "ibda.office@gmail.com",

  waLink(message?: string) {
    const base = `https://wa.me/${this.whatsapp}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  },

  emailLink(subject?: string, body?: string) {
    // Note: use encodeURIComponent, not URLSearchParams — the latter encodes
    // spaces as "+" which many mail clients render literally in the body
    const params: string[] = [];
    if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
    if (body) params.push(`body=${encodeURIComponent(body)}`);
    return params.length ? `mailto:${this.email}?${params.join("&")}` : `mailto:${this.email}`;
  },

  gmailLink(subject?: string, body?: string) {
    // Opens Gmail web compose with the message pre-filled
    const params = new URLSearchParams({ view: "cm", fs: "1", to: this.email });
    if (subject) params.set("su", subject);
    if (body) params.set("body", body);
    return `https://mail.google.com/mail/?${params.toString()}`;
  },
};