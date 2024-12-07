"use client";
import Navbar from "@/components/navbar";
import React from "react";
import WorkCard from "@/components/WorkCard";
import { usecases } from "../../../data";
import Footer from "@/components/footer";
import MaskCursor from "@/components/Cursor";
import Image from "next/image";
const Work = () => {
  return (
    <div>
      <MaskCursor />
      <Navbar />
      <div className="bg-work-bg w-full h-[420vh] py-4 md:py-8 mb-4 flex flex-col justify-start px-4 md:px-[7rem] relative">
        <Image
          src="/icons/line.svg"
          width={500}
          height={500}
          alt="line"
          className="w-full h-full"
        />
        <Image
          src="/icons/line.svg"
          width={500}
          height={500}
          alt="line"
          className="w-full h-full"
        />
        <div className="absolute w-[93%] h-[150vh] px-10 z-10">
          <h2 className="text-white text-start font-bold text-[2.2rem] mt-16 mb-16">
            Selected <span className="text-gray-600">Works</span>
          </h2>
          <div className="flex flex-wrap justify-between h-full">
            {usecases.map((usecase, index) => (
              <WorkCard
                key={index}
                title={usecase.title}
                tag={usecase.tag}
                image={usecase.image}
                styles={usecase.styles}
                unavailable={usecase.unavailable}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
