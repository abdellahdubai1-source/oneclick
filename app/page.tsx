import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Growth } from "@/components/Growth";
import { SelectedWork } from "@/components/SelectedWork";
import { ProductSpotlight } from "@/components/ProductSpotlight";
import { Process } from "@/components/Process";
import { WhyOneClick } from "@/components/WhyOneClick";
import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Growth />
        <SelectedWork />
        <ProductSpotlight />
        <Process />
        <WhyOneClick />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
