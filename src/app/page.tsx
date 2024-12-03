'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSection from "../sections/hero";
import WorkSection from "../sections/work";
import Prefooter from "../sections/prefooter";
import MaskCursor from "@/components/Cursor";
import StackSection from "@/sections/stack";
import Folks from "@/sections/folk";


export default function Home() {
  return (
    <div className="font-['Moon Walk']">
      {/* <MaskCursor /> */}
      <Navbar />
      <HeroSection />
      <WorkSection />
      {/* <Prefooter /> */}
      <StackSection />
      <Folks />
      <Footer />
    </div>
  );
}
