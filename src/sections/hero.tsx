"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import StarWarsIcon from "/public/icons/starwars.svg";
import GamerIcon from "/public/icons/gamer.svg";
import AnimeIcon from "/public/icons/anime.svg";
import LiverpoolIcon from "/public/icons/liverpool.svg";

const HeroSection = () => {
  const textArray = [
    "crazy about Starwars",
    "a gamer",
    "an anime lover",
    "a Liverpool fan",
  ];
  const iconsArray = [StarWarsIcon, GamerIcon, AnimeIcon, LiverpoolIcon];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [textArray.length]);

  return (
    <div className="flex flex-col mt-[6rem] w-full px-4 md:px-10 md:w-[95%]">
      <div className="w-full flex flex-row justify-between px-4">
        <div className="flex text-[0.7rem] md:text-[1rem]">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-black"
          >
            Code by{" "}
            <a href="https://linkedin.com/in/Onyemaechi" className="underline">
              Isaac
            </a>
          </motion.h2>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 w-full mt-[4rem] px-4">
        <div className="w-full">
          <h1 className="flex gap-2 font-sans text-black text-[50px] font-[500]">
            Hey! I'm John (lexjo), a
            <span className="hover:text-blue-600">designer.</span>
          </h1>
          <h2 className="flex gap-2 font-sans text-black text-[50px] font-[500]">
            Also
            <span className="text-gray-600 flex items-center">
              {textArray[currentIndex]} {/* Animated text */}
              <span className="ml-2">
                <Image
                  src={iconsArray[currentIndex]}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </span>
            </span>
          </h2>

          <p className="max-w-[60%] text-gray-600 font-[400] text-[20px] mt-[3rem]">
            Passionate about solving design problems, helping brands stand out
            and human-centered design currently at Ustacky, Browiso,{" "}
            <span className="text-black font-semibold">Ibx Exchange</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center relative w-full">
  <motion.div
    initial={{ opacity: 0.8, y: 0, x:0 }}
    animate={{ opacity: 1, y: 0, x:0, rotate: 360 }}
    transition={{
      delay: 0.6,
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    }}
    className="relative flex items-center justify-center" // Keeps the rotating image centered
  >
    <Image
      src="/icons/scroll.svg"
      alt=""
      width={140}
      height={140}
      className="mt-[4rem] mb-[5rem]" // Keep this as is
    />
  </motion.div>
  {/* Mouse image is outside of the rotating div */}
  <Image
    src="/icons/mouse.svg"
    alt=""
    width={23.25}
    height={36.12}
    className="absolute top-[49.2%] left-[49.2%] transform translate-x-[-0%] translate-y-[-0%]" // Centered with transform
  />
</div>
</div>
    </div>
  );
};

export default HeroSection;
