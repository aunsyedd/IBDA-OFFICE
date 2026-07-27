import Image from "next/image";
import { Building2 } from "lucide-react";
import {
  hasServiceLogo,
  serviceLogoSizes,
  serviceLogoSrc,
  type ServiceLogoSize,
} from "@/lib/service-logos";

export default function ServiceLogo({
  serviceKey,
  title,
  size = "md",
  className = "",
  framed = true,
}: {
  serviceKey: string;
  title: string;
  size?: ServiceLogoSize;
  className?: string;
  framed?: boolean;
}) {
  const s = serviceLogoSizes[size];

  if (!hasServiceLogo(serviceKey)) {
    return (
      <span
        className={`grid shrink-0 place-items-center rounded-xl bg-navy-800/10 text-navy-800 ${s.box} ${className}`}
        aria-hidden="true"
      >
        <Building2 className="h-6 w-6" strokeWidth={1.6} />
      </span>
    );
  }

  const frame = framed ? "rounded-xl border border-line bg-white p-1.5 shadow-sm" : "";

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden ${frame} ${s.box} ${className}`}
    >
      <Image
        src={serviceLogoSrc(serviceKey)}
        alt={title}
        width={s.width}
        height={s.height}
        className={`object-contain ${s.img}`}
        unoptimized
      />
    </span>
  );
}
