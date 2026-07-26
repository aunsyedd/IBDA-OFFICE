"use client";

import { useState } from "react";
import { MessageCircle, MessageSquareWarning } from "lucide-react";
import { getDict } from "@/lib/dictionaries";
import { site, type Locale } from "@/lib/i18n";

export default function ComplaintForm({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(dict.complaint.types[0]);
  const [details, setDetails] = useState("");

  const canSubmit = name.trim() !== "" && phone.trim() !== "" && details.trim() !== "";
  const message = [
    dict.complaint.waPrefix,
    `${dict.complaint.name}: ${name.trim()}`,
    `${dict.complaint.phone}: ${phone.trim()}`,
    `${dict.complaint.type}: ${type}`,
    `${dict.complaint.details}: ${details.trim()}`,
  ].join("\n");
  const href = site.waLink(message);

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-500/15 text-gold-600">
          <MessageSquareWarning className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-3xl font-black text-navy-900">
          {dict.complaint.heading}
        </h1>
        <p className="mt-2 text-sm leading-7 text-navy-800/70">{dict.complaint.sub}</p>

        <div className="mt-7 space-y-4">
          <div>
            <label htmlFor="c-name" className="mb-1.5 block text-sm font-bold text-navy-900">
              {dict.complaint.name}
            </label>
            <input
              id="c-name"
              className="field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={dict.complaint.namePlaceholder}
            />
          </div>
          <div>
            <label htmlFor="c-phone" className="mb-1.5 block text-sm font-bold text-navy-900">
              {dict.complaint.phone}
            </label>
            <input
              id="c-phone"
              className="field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={dict.complaint.phonePlaceholder}
              inputMode="tel"
              dir="ltr"
            />
          </div>
          <div>
            <label htmlFor="c-type" className="mb-1.5 block text-sm font-bold text-navy-900">
              {dict.complaint.type}
            </label>
            <select
              id="c-type"
              className="field"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {dict.complaint.types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="c-details" className="mb-1.5 block text-sm font-bold text-navy-900">
              {dict.complaint.details}
            </label>
            <textarea
              id="c-details"
              className="field min-h-32 resize-y"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={dict.complaint.detailsPlaceholder}
            />
          </div>

          <a
            href={canSubmit ? href : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!canSubmit}
            className={`focus-gold flex w-full items-center justify-center gap-2 rounded-full py-3 text-base font-extrabold transition ${
              canSubmit
                ? "bg-navy-900 text-white ring-2 ring-gold-500/70 ring-offset-2 hover:bg-navy-800"
                : "pointer-events-none bg-line text-navy-900/40"
            }`}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {dict.complaint.submit}
          </a>
        </div>
      </div>
    </div>
  );
}
