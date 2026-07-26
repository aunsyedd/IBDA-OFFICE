"use client";

import { useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import { getDict } from "@/lib/dictionaries";
import { site, type Locale } from "@/lib/i18n";

export default function TrackForm({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [requestNo, setRequestNo] = useState("");
  const [phone, setPhone] = useState("");

  const canSubmit = requestNo.trim() !== "" && phone.trim() !== "";
  const message = [
    dict.track.waPrefix,
    `${dict.track.requestNo}: ${requestNo.trim()}`,
    `${dict.track.phone}: ${phone.trim()}`,
  ].join("\n");
  const href = site.waLink(message);

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-800/10 text-navy-800">
          <Search className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-3xl font-black text-navy-900">{dict.track.heading}</h1>
        <p className="mt-2 text-sm leading-7 text-navy-800/70">{dict.track.sub}</p>

        <div className="mt-7 space-y-4">
          <div>
            <label htmlFor="request-no" className="mb-1.5 block text-sm font-bold text-navy-900">
              {dict.track.requestNo}
            </label>
            <input
              id="request-no"
              className="field"
              value={requestNo}
              onChange={(e) => setRequestNo(e.target.value)}
              placeholder={dict.track.requestPlaceholder}
              inputMode="numeric"
            />
          </div>
          <div>
            <label htmlFor="track-phone" className="mb-1.5 block text-sm font-bold text-navy-900">
              {dict.track.phone}
            </label>
            <input
              id="track-phone"
              className="field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={dict.track.phonePlaceholder}
              inputMode="tel"
              dir="ltr"
            />
          </div>

          <a
            href={canSubmit ? href : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!canSubmit}
            className={`focus-gold flex w-full items-center justify-center gap-2 rounded-full py-3 text-base font-extrabold transition ${
              canSubmit
                ? "bg-wa text-white hover:bg-wa-dark"
                : "pointer-events-none bg-line text-navy-900/40"
            }`}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {dict.track.submit}
          </a>
          <p className="text-center text-xs leading-5 text-navy-800/60">{dict.track.note}</p>
        </div>
      </div>
    </div>
  );
}
