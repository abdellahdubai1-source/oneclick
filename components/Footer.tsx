import { Logo } from "@/components/Logo";
import Link from "next/link";
import { copy, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-8xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 border-b border-oc-line pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <Logo height={28} />
            <p className="text-sm text-oc-muted">
              {copy.footer.lines[1]}
            </p>
            <p className="text-sm text-oc-muted">{copy.footer.lines[2]}</p>
          </div>

          <div className="flex flex-col items-center gap-5 sm:items-end">
            <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-oc-ink sm:justify-end">
              <Link href="/#services" className="transition-colors hover:text-oc-blue">Services</Link>
              <Link href="/#growth" className="transition-colors hover:text-oc-blue">Growth</Link>
              <Link href="/#work" className="transition-colors hover:text-oc-blue">Work</Link>
              <Link href="/playbook" className="transition-colors hover:text-oc-blue">Playbook</Link>
            </nav>
            <div className="flex flex-col items-center gap-2 text-center sm:items-end sm:text-right">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-oc-ink transition-colors hover:text-oc-blue"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-oc-ink transition-colors hover:text-oc-blue"
            >
              {siteConfig.whatsappDisplay}
            </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-oc-muted sm:text-left">
          &copy; {year} {siteConfig.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
