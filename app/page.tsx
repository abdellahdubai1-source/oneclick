import { connection } from "next/server";
import AgencyHome from "./agency-home";

export default async function Home() {
  // Never freeze the offer state at build time.
  await connection();
  // This is an uncached request-time Server Component; the client receives the same timestamp.
  // eslint-disable-next-line react-hooks/purity
  return <AgencyHome initialNow={Date.now()} />;
}
