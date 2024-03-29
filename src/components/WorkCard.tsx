import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  image: string;
  tags: string[];
  styles: string;
  unavailable?: boolean;
}

const WorkCard: React.FC<CardProps> = ({ title, image, tags, styles, unavailable }) => {

  return (
    <div className={`group w-full md:w-[47%] h-[70vh] mb-8 md:mb-0 md:h-[98vh] relative ${styles}`}>
      <div className="w-full h-full relative rounded-3xl" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

  
      {unavailable ? (
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black bg-opacity-50 text-white text-xl font-lighter md:font-bold">
          <div className="flex items-center justify-center font-['Epilogue'] text-center  rounded-[50%] h-[30%] lg:h-[35%] w-[40%] p-4 bg-white text-black">
            Coming Soon
          </div>
        </div>
      ) : (
        <div className="w-full h-[fit-content] cursor-pointer absolute bottom-0 rounded-3xl flex-col justify-end items-center">
          <div className="hidden group-hover:flex flex-row bg-gray-700 bg-opacity-65 cursor-pointer p-4 rounded-b-3xl w-full h-full justify-between items-end gap-0.5 ">

            <div className="pt-2 flex-col justify-start items-start inline-flex">
              <h1 className="text-white text-[1.2rem] md:text-[1.5rem] font-medium font-['Epilogue'] leading-9">{title}</h1>
              <div className="p-2 justify-start items-start gap-3 inline-flex flex-wrap">
                {tags.slice(0, 4).map((tag, index) => (
                  <div key={index} className="md:px-4 md:py-2 px-2 py-1 rounded-full border border-white justify-start items-start flex">
                    <div className="text-center text-white text-base font-light font-['Epilogue'] leading-snug">{tag}</div>
                  </div>
                ))}
              </div>
            </div>

            <Link href='/'>
            <button className="w-[3rem] h-[2rem] px-4 py-2 bg-white rounded-full mb-2">
              <Image src="/icons/Vector.png" alt="" width={500} height={500} className="h-30 w-30" />
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCard;
