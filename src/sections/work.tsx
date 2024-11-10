"use client";
import React, { useEffect, useState } from "react";
import WorkCard from "../components/WorkCard";
import Link from "next/link";
import { works } from "../../data";
import { motion } from "framer-motion";
import Image from "next/image";

const WorkSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const marqueeTexts = [
    " Product Designer ",
    " Motion Designer  ",
    " Photographer ", // Fixed typo here
    " Brand Designer  ",
    " Game Design Enthusiast  ",
    " Gamer ",
    " Product Designer ",
    " Motion Designer ",
    " Photographer ",
    " Brand Designer ",
    " Game Design Enthusiast ",
    " Gamer ",
  ];

  return (
    <div
      className="bg-cover bg-center w-full h-fit flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('/images/work-background.png')`,
      }}
    >
      <span className="w-full mt-1 mb-8 lg:mt-8 lg:mb-16 overflow-hidden" aria-live="polite">
        <div style={{ width: "180%", overflow: "hidden" }}>
          <motion.div
            initial={{ x: "10%" }} // Start off-screen to the right
            animate={{ x: "-50%" }} // Move to off-screen to the left
            transition={{
              duration: 10, // Adjust duration for speed
              ease: "linear", // Ensure the movement is smooth
              repeat: Infinity, // Repeat the animation indefinitely
            }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              whiteSpace: "nowrap", // Prevent wrapping
            }}
          >
            {marqueeTexts.map((text, index) => (
              <div
                key={index}
                className="text-white flex gap-4 items-center font-sans font-[500] text-[64px] mx-4"
              >
                {text}
                <Image
                  src="/icons/smiley.svg"
                  width={32}
                  height={32}
                  alt="smiley"
                  className="mr-2"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </span>
      <div className="w-full px-2 lg:px-12 mb-4 flex flex-col justify-start relative">
        <Image src="/icons/line.svg" width={500} height={500} alt="line" className="w-full h-full" />
        <motion.div
          className="absolute w-[93%] h-fit px-10"
          initial={{ opacity: 0, translateY: 50 }} // Initial state (hidden)
          whileHover={{ opacity: 1, translateY: 0 }} // State on hover
          transition={{ duration: 0.5 }} // Transition duration
        >
          <h2 className="text-white font-bold text-[2.2rem] pl-8 font-sans">
            Recent Works
          </h2>
          <div className="flex flex-wrap justify-between w-full h-fit p-4 ">
            {works.map((work, index) => (
              <WorkCard
                key={index}
                title={work.title}
                tag={work.tag}
                image={work.image}
                styles={work.styles}
                unavailable={work.unavailable}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <span className="w-full flex items-center justify-center mt-[390px] mb-16 text-black">
        <Link href="/work">
          <button className="px-6 py-3 border border-white bg-black text-white rounded-full">
            View More
          </button>
        </Link>
        
      </span>   
    </div>
  );
};

export default WorkSection;
