import About from "@/components/About";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <SelectedWork/>
        <Services/>
        <HowItWorks/>
        <Pricing/>
        <About/>
      </main>

    </>
  );
}