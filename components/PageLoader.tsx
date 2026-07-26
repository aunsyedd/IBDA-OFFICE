import type { Dict } from "@/lib/dictionaries";
import { LogoMark } from "./Logo";

export default function PageLoader({
  dict,
  label,
  compact = false,
}: {
  dict?: Dict;
  label?: string;
  compact?: boolean;
}) {
  const text = label ?? dict?.common.loading ?? "Loading…";

  return (
    <div
      className={`flex flex-col items-center justify-center px-4 ${
        compact ? "py-8" : "min-h-[60vh] py-20"
      }`}
      role={compact ? undefined : "status"}
      aria-live={compact ? undefined : "polite"}
      aria-label={compact ? undefined : text}
    >
      <div className="relative">
        <span
          className="absolute inset-0 animate-ping rounded-full bg-gold-500/20"
          aria-hidden="true"
        />
        <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white shadow-card ring-2 ring-gold-500/30">
          <LogoMark className="h-10 w-10 text-navy-900" />
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-gold-500"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>

      <p className="mt-5 text-sm font-bold tracking-wide text-navy-800/70">{text}</p>
    </div>
  );
}
