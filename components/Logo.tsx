import Image from "next/image";
import Link from "next/link";
import logo from "@/public/brand/oneclick-logo-primary-transparent.png";
import { siteConfig } from "@/lib/site-config";

/**
 * Renders the approved OneClick Digital Studio logo exactly as supplied.
 * The PNG is used as-is — original proportions preserved via next/image's
 * intrinsic width/height, no cropping, recoloring, or redrawing.
 */
export function Logo({
  className = "",
  height = 32,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.brand} — home`}
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src={logo}
        alt={`${siteConfig.brand} logo`}
        height={height}
        priority={priority}
        style={{ width: "auto", height: `${height}px` }}
      />
    </Link>
  );
}
