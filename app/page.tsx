import Script from "next/script";
import { agencyMarkup } from "./agency-markup";

export default function Home() {
  return (
    <>
      <div className="agency-site" dangerouslySetInnerHTML={{ __html: agencyMarkup }} />
      <Script src="/agency/site.js" strategy="afterInteractive" />
    </>
  );
}
