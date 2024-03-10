import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  image: string;
  tags: string[];
  styles: string;
}

const WorkCard: React.FC<CardProps> = ({ title, image, tags, styles }) => {
  return (
    <div className={`w-[45%] h-[80vh] mb-2 relative p-4 ${styles}`}>
      {/* Background gradient */}
    <div className="w-[100%] h-[80vh] relative rounded-3xl" style={{
        backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'
    }} />
      
      {/* Content */}
      <div className="inline-flex mt-2 w-[93%] h-[100%] px-4  absolute top-0 rounded-3xl flex-col justify-end items-center">
        <div className="inline-flex cursor-pointer w-[100%] h-[100%] justify-between items-end gap-0.5 ">
          {/* Title */}
          <div className="pt-2 flex-col justify-start items-start inline-flex">
            <h1 className="text-white text-[1.5rem] font-medium font-['Epilogue'] leading-9">{title}</h1>
            {/* Tags */}
            <div className="p-2 justify-start items-start gap-3 inline-flex">
              {tags.slice(0, 4).map((tag, index) => (
                <div key={index} className="px-4 py-2 rounded-full border border-white justify-start items-start flex">
                  <div className="text-center text-white text-base font-light font-['Epilogue'] leading-snug">{tag}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Icon */}
          <div className="w-[3rem] h-[2rem] px-4 py-2 bg-white rounded-full mb-2">
            <Image src="/icons/Vector.png" alt="" width={30} height={30} className="h-30 w-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
