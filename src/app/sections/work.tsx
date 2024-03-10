import React from 'react';
import Image from 'next/image';
import WorkCard from '../components/WorkCard';

const WorkSection: React.FC = () => {
  // Define an array of work items with titles and tags
  const works = [
    {
      title: 'Trackack',
      tags: ['UX Research', 'UI Design'],
      image: '/images/work1.png',
      styles: 'mt-0'
    },
    {
      title: 'Trackack',
      tags: ['Brand Identity', 'UI Design', 'UX Research'],
      image: '/images/work2.png',
      styles: 'mt-32'
    },
    {
        title: 'Trackack',
        tags: ['UX Research', 'UI Design'],
        image: '/images/work3.png',
        styles: 'mt-0'
      },
      {
        title: 'Trackack',
        tags: ['UX Research', 'UI Design'],
        image: '/images/work4.png',
        styles: 'mt-32 mb-8'
      },
    // Add more work items as needed
  ];

  return (
    <div
      className="bg-cover bg-center w-[102.5%] h-[fit-content] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('/images/work-background.png')`
      }}
    >
      <span className='w-full mt-16 mb-16 border-dashed border-gray-500 border-t-1'>
        <Image src={'/images/marquee.png'} alt="" width={1000} height={1000} className="w-full m-0 object-cover" />
      </span>
      <div className='w-[100%] px-12 mb-4 flex flex-col justify-start'>
        <h2 className='text-white font-bold text-[2.2rem] font-epilogue '>Recent Works</h2>
        <div className='flex flex-wrap justify-evenly p-4'>
          {/* Map through the works array and render a Card component for each work item */}
          {works.map((work, index) => (
            <WorkCard 
                key={index} 
                title={work.title} 
                tags={work.tags}
                image={work.image}
                styles={work.styles}
                 />
          ))}
        </div>
        <span className='w-[100%] flex items-center justify-center mt-16 mb-32 text-black'>
            <button className='px-6 py-2 bg-white rounded-full'>View More</button>
        </span>
      </div>
    </div>
  );
};

export default WorkSection;
