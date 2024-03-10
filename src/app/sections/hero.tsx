"use client";
import React, { createContext } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-[6rem] w-[95%]">
      <div className="w-[100%] flex flex-row justify-between px-4">
        <div className="flex">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-black"
          >
            Code by <a href="" className="underline">Isaac</a>
          </motion.h2>
        </div>
        <div className="text-[2rem] space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/icons/Vector.png"
              alt=""
              width={30}
              height={30}
              className="h-30 w-30"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-black font-semibold"
          >
            Product Designer
          </motion.h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] mt-[4rem]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-black text-[8rem] font-bold"
        >
          John Achimugu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-[50%] text-gray-600 text-[1.2rem] font-semibold text-center"
        >
          Passionate about solving design problems, visual storytelling and human centered designs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-[25%] text-gray-600 text-[1.2rem] text-center mt-[2.5rem]"
        >
          Product Designer at <a href="" className="line-through">Ustacky</a>, <a href="" className="line-through">Browiso</a>, Ibx exchange
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="w-[100%] flex items-center justify-center border-gray-500 border-r-2 border-solid"
        >
          <button className="bg-black text-white rounded-full px-10 py-2 text-[1.5rem] mt-[2rem]">
            About Me
          </button>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <Image
            src="/images/Scroll.png"
            alt=""
            width={140}
            height={140}
            className=" mt-[4rem] mb-[3rem]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
