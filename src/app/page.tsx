import Image from "next/image";
import Navbar from "./sections/navbar";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero";
import WorkSection from "./sections/work";
import Prefooter from "./sections/prefooter";
import { RSC_PREFETCH_SUFFIX } from "next/dist/lib/constants";

export default function Home() {
  return (
    <main className="flex max-w-7xl mx-auto min-h-screen flex-col items-center justify-between p-4 font-sans">
      <Navbar />
        <HeroSection />
        <WorkSection />
        <Prefooter />
      <Footer />
    </main>
  );
}
