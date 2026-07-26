import type { Dict } from "@/lib/dictionaries";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* Gold crescent arc */}
      <path
        d="M32 6a26 26 0 1 0 26 26"
        fill="none"
        stroke="#c89a45"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Navy tail */}
      <path
        d="M58 32a26 26 0 0 1-9 19.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Check badge */}
      <circle cx="46" cy="48" r="11" fill="#c89a45" />
      <path
        d="M40.5 48.2l3.8 3.8 7-7.2"
        fill="none"
        stroke="#0c2440"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pixel accent */}
      <g fill="#177158">
        <rect x="44" y="8" width="4" height="4" rx="1" />
        <rect x="50" y="12" width="3" height="3" rx="1" />
        <rect x="46" y="15" width="3" height="3" rx="1" />
      </g>
    </svg>
  );
}

export function LogoLockup({
  dict,
  onDark = false,
}: {
  dict: Dict;
  onDark?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark
        className={`h-9 w-9 shrink-0 ${onDark ? "text-white" : "text-navy-900"}`}
      />
      <span className="leading-none">
        <span
          className={`block text-lg font-extrabold tracking-tight ${
            onDark ? "text-white" : "text-navy-900"
          }`}
        >
          {dict.brand.word} {dict.brand.name}
        </span>
        <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-widest text-gold-500">
          {dict.brand.tag}
        </span>
      </span>
    </span>
  );
}
