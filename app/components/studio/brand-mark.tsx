import Image from "next/image";
import { brand, logo } from "@/lib/studio-config";

/**
 * The verified Oneclick logo files from the repository. On light surfaces the full
 * primary logo is used; on dark surfaces (loader, navigation, footer) the square icon
 * mark pairs with a text wordmark, because the primary logo's dark lettering would
 * not be legible on black.
 */
export function BrandMark({
  variant = "light",
  priority = false,
  size = "md",
}: {
  variant?: "light" | "dark";
  priority?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  if (variant === "light") {
    return (
      <span className={`st-brand st-brand-light st-brand-${size}`}>
        <Image
          src={logo.primary}
          alt={brand.name}
          width={logo.primaryWidth}
          height={logo.primaryHeight}
          sizes="(min-width: 640px) 190px, 150px"
          priority={priority}
        />
      </span>
    );
  }
  return (
    <span className={`st-brand st-brand-dark st-brand-${size}`}>
      <Image src={logo.icon} alt="" width={96} height={96} sizes="48px" priority={priority} />
      <span className="st-brand-text">
        <span className="st-brand-name">{brand.shortName}</span>
        <span className="st-brand-sub">Digital Studio</span>
      </span>
      <span className="st-sr">{brand.name}</span>
    </span>
  );
}
