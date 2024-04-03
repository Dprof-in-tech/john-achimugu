"use client";
import React, { createContext } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-[6rem] w-[95%]">

      <div className="w-full flex flex-row justify-between px-4">
        <div className="flex text-[0.7rem] md:text-[1rem] px-2 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-black"
          >
            Code by <a href="#" className="underline">Isaac</a>
          </motion.h2>
        </div>
        <div className="text-[0.7rem] md:text-[2rem] space-x-4 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/icons/Vector.png"
              alt=""
              width={15}
              height={15}
              className="md:h-30 md:w-30 h-15 w-15"
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
      <div className="flex flex-col items-center justify-center w-full mt-[4rem]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-black text-center text-[3rem] lg:text-[8rem] font-bold"
        >
          John Achimugu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-full lg:max-w-[50%] text-gray-600 text-[1.2rem] font-semibold text-center"
        >
               Passionate about solving design problems, visual storytelling and human centered designs.<svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="max-w-full lg:max-w-[25%] text-gray-600 text-[1.2rem] text-center mt-[2.5rem]"
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
          initial={{ opacity: 0.8, y: 50 }}
          animate={{ opacity:1, y: 50, rotate: 360,}}
          transition={{
            delay: 0.6 ,
            duration: 20, 
            ease: "linear", 
            repeat: Infinity, 
          }}
        >
          <Image
            src="/images/Scroll.png"
            alt=""
            width={140}
            height={140}
            className=" mt-[4rem] mb-[5rem]"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;
