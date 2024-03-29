'use client'
import Navbar from "@/components/navbar";
import React from "react";
import WorkCard from "@/components/WorkCard";
import { usecases } from "../../../data";
import Footer from "@/components/footer";

const WorkPage = () => {
 return(
    <div>
        <Navbar />
        <div className='bg-black w-full px-12 py-8 mb-4 flex flex-col justify-start'>
            <h2 className="text-white text-center font-bold text-[4.2rem] mt-16 mb-16">Works</h2>
        <div className='flex flex-wrap justify-between p-4'>
          {usecases.map((usecase, index) => (
            <WorkCard 
              key={index} 
              title={usecase.title} 
              tags={usecase.tags}
              image={usecase.image}
              styles={usecase.styles}
              unavailable={usecase.unavailable}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
 ); 
}

export default WorkPage