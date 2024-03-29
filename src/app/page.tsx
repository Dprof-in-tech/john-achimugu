'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSection from "../sections/hero";
import WorkSection from "../sections/work";
import Prefooter from "../sections/prefooter";


export default function Home() {
  return (
    <div>
      <Navbar />
        <HeroSection />
        <WorkSection />
        <Prefooter />
      <Footer />
    </div>
  );
}
