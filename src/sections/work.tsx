import React from 'react';
import Image from 'next/image';
import WorkCard from '../components/WorkCard';
import Link from 'next/link';
import { works } from '../../data';
import { motion, useTransform, useScroll } from "framer-motion";

const WorkSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  return (
    <div
      className="bg-cover bg-center w-full h-[fit-content] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('/images/work-background.png')`,
      }}
    >
      <span className='w-full mt-1 mb-8 lg:mt-16 lg:mb-16 border-dashed border-gray-500 border-t overflow-hidden'>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <motion.div
            style={{ scaleX: scale, scaleY: scale, display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <Image src={'/images/marquee.png'} alt="" width={1000} height={1000} className="w-full m-0" />
          </motion.div>
        </div>
      </span>
      <div className='w-full px-2 lg:px-12 mb-4 flex flex-col justify-start'>
        <h2 className='text-white font-bold text-[2.2rem] pl-8 font-epilogue '>Recent Works</h2>
        <div className='flex flex-wrap justify-between p-4'>
          {works.map((work, index) => (
            <WorkCard 
              key={index} 
              title={work.title} 
              tags={work.tags}
              image={work.image}
              styles={work.styles}
              unavailable={work.unavailable}
            />
          ))}
        </div>
        <span className='w-full flex items-center justify-center mt-16 mb-16 text-black'>
            <Link href='/'>
              <button className='px-6 py-2 bg-white rounded-full'>View More</button>
            </Link>
        </span>
      </div>
    </div>
  );
};

export default WorkSection;
