import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  tag: string;
  styles: string;
  unavailable?: boolean;
}

const WorkCard: React.FC<CardProps> = ({ title, image, tag, styles, unavailable }) => {
  const slug = title.toLowerCase().replace(' ', '-');

  return (
    <div className={`group w-full md:w-[563px] h-[70vh] mb-[8rem] md:mb-0 md:h-[657px] relative ${styles}`}>
      {unavailable ? (
        <Link href={`#`}>
          <div className="w-full h-full relative rounded-3xl transition-transform duration-300 ease-in-out filter grayscale group-hover:grayscale-0"
               style={{
                 backgroundImage: `url(${image})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }} 
          />

          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center rounded-3xl bg-black bg-opacity-50 text-white text-xl font-lighter md:font-bold">
            <div className="flex items-center justify-center font-moonwalk text-center rounded-full px-6 py-3 bg-white text-black absolute bottom-[10%]">
              Coming Soon
            </div>
          </div>
          <div className="w-full h-[fit-content] cursor-pointer rounded-3xl flex-col justify-end items-center">
            <div className="flex flex-col cursor-pointer p-4 w-full h-[fit-content] justify-between items-start gap-0.5 ">
              <div className="pt-2 flex-col justify-start items-start inline-flex gap-1">
                <h1 className="text-white text-[1.2rem] md:text-[20px] font-[600] font-sans leading-9">{title}</h1>
                <div className="justify-start items-start">
                  <p className='font-[400] text-[16px]'>{tag}</p>
                </div>
              </div>
                <p className=" self-start justify-center mb-2 mt-1 w-full text-[12px] font-[300]">
                  Coming Soon
                </p>
            </div>
          </div>
        </Link>
      ) : (
        <Link href={`/work/${slug}`}>
          <div className="w-full h-full relative rounded-3xl transition-transform duration-300 ease-in-out filter grayscale group-hover:grayscale-0"
               style={{
                 backgroundImage: `url(${image})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }} 
          />
          <div className="w-full h-[fit-content] cursor-pointer rounded-3xl flex-col justify-end items-center">
            <div className="flex flex-col cursor-pointer p-4 w-full h-[fit-content] justify-between items-start gap-0.5 ">
              <div className="pt-2 flex-col justify-start items-start inline-flex gap-1">
                <h1 className="text-white text-[1.2rem] md:text-[20px] font-[600] font-sans leading-9">{title}</h1>
                <div className="justify-start items-start">
                  <p className='font-[400] text-[16px]'>{tag}</p>
                </div>
              </div>
              <Link href={`/work/${slug}`}>
                <button className="flex gap-2 items-start justify-center mb-2 mt-1 w-full text-[12px] font-[300]">
                  View Live Site
                  <Image src="/icons/vector.svg" alt="" width={12} height={12} />
                </button>
              </Link>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default WorkCard;
