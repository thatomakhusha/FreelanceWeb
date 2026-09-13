import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <SelectedWork/>
      </main>

    </>
  );
}