import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <WhyUs />
        <Team />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
