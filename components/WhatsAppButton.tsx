import { MessageCircle } from "lucide-react";
import { site } from "@/lib/i18n";

type Variant = "primary" | "outline" | "gold";

const variants: Record<Variant, string> = {
  primary:
    "bg-wa text-white shadow-card hover:bg-wa-dark focus-gold",
  outline:
    "border-2 border-wa bg-white text-teal-700 hover:bg-wa/5 focus-gold",
  gold:
    "bg-gradient-to-b from-gold-400 to-gold-600 text-navy-950 ring-1 ring-white/30 hover:brightness-110 focus-gold",
};

export default function WhatsAppButton({
  message,
  label,
  variant = "primary",
  className = "",
  size = "md",
}: {
  message?: string;
  label: string;
  variant?: Variant;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizeClass =
    size === "lg"
      ? "gap-2.5 rounded-full px-8 py-4 text-base"
      : "gap-2 rounded-full px-6 py-3 text-sm";

  return (
    <a
      href={site.waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-extrabold transition ${sizeClass} ${variants[variant]} ${className}`}
    >
      <MessageCircle className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
      {label}
    </a>
  );
}
