'use client'
import MaskCursor from "@/components/Cursor";
import Navbar from "@/components/navbar";
import AboutSection from "@/sections/about";
import React from "react";

const AboutPage = () => {
 return(
    <div>
        <MaskCursor />
        <Navbar />
        <AboutSection />
    </div>
 ); 
}

export default AboutPage