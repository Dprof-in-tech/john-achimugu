'use client'
import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";

interface UsecaseProps{
    title: string;
    overview: string;
    heroimage: string;
    liveSite: string;
    HeroTags: { title: string; items: string[]; }[];
    Background: string;
    BackgroundText: string;
    BackgroundImage: string;
    BackgroundConclusion: string;
    BackgroundConclusionImage: string;
    SolutionTitle: string;
    SolutionText: string;
    SolutionTags: string[];
    SolutionImages: string[];
    UserTestingTitle: string;
    UserTestingText: string;
    UserTestingImages: string[];
    FinalThoughtsTitle: string;
    FInalThoughtsText: string;
    NextCaseImage: string;
    NextCaseLink: string;
}

const Project: React.FC<UsecaseProps> = ({
    title,
    overview,
    heroimage,
    liveSite,
    HeroTags,
    Background,
    BackgroundText,
    BackgroundImage,
    BackgroundConclusion,
    BackgroundConclusionImage,
    SolutionTitle,
    SolutionText,
    SolutionImages,
    SolutionTags,
    UserTestingTitle,
    UserTestingImages,
    UserTestingText,
    FInalThoughtsText,
    FinalThoughtsTitle,
    NextCaseImage,
    NextCaseLink
}) => {
    return(
        <div>
            <Navbar />
            <section className="text-black mt-4 md:mt-16 px-2 md:px-12 py-2 space-y-4">
               <span className="w-full space-y-2">
                    <h1 className="max-w-full md:max-w-[50%] text-gray-800 font-bold text-[2.5rem]">{title}</h1>
                    <p className="max-w-full md:max-w-[50%] text-gray-800 text-[1.2rem]">
                        {overview}
                    </p>
               </span>
               <div className="w-full h-[520px] relative">
                    <Image src={heroimage} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                    <span className="absolute bottom-4 right-4 pointer text-white rounded-md h-[50px] w-[fit-content] border-black border-2">
                        <a href={liveSite}>
                            <button className="w-full h-full px-4 rounded-md bg-blue-500">
                                View Live Site 
                            </button>
                        </a>
                    </span>
               </div>
               <div className="flex flex-col md:flex-row items-start justify-center w-full h-[fit-content] gap-[1rem] md:gap-[16%] px-6 py-4 mb-32">
                {HeroTags.map((tag, index) => (
                    <span key={index} className="w-full flex flex-col justify-between items-start md:mt-12 md:mb-24">
                    <h2 className="font-semibold text-black ">{tag.title}</h2>
                    <ul className="space-y-2">
                        {tag.items.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                    </span>
                ))}
                </div>
                <div className="flex flex-col justify-start space-y-8 text-[1.2rem] text-gray-700 px-4 py-6 border-t-2 border-dashed border-gray-700 ">
                    <h1 className="text-black text-[1.5rem] font-bold">{Background}</h1>
                    <p className="max-w-full md:max-w-[65%]">
                        {BackgroundText}
                    </p>
                </div>
           </section>
           <section className="flex flex-col w-full ">
                <div className="w-full h-[240px] md:h-[620px]">
                    <Image src={BackgroundImage} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-700 max-w-full md:max-w-[50%] m-4 md:mr-20 md:mt-16 md:mb-16 md:self-end">
                    {BackgroundConclusion}
                </p>
            </section>
            <section className="w-full">
                <div className="w-full h-[240px] md:h-[620px]">
                    <Image src={BackgroundConclusionImage} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                </div>
            </section>
            <section className="w-full">
                <div className="flex flex-col px-2 md:px-6 py-4 mt-12">
                    <h1 className="text-black text-[2rem] font-semibold">{SolutionTitle}</h1>
                    <span className="text-gray-700">
                        <p className="max-w-full md:max-w-[85%] text-[1.2rem] mb-8">
                            {SolutionText}
                        </p>
                        {SolutionTags.slice(0, ).map((SolutionTag, index) => (
                        <ul key={index} className="text-[1.2rem] list-disc px-8 space-y-2">
                            <li>{SolutionTag}</li>
                        </ul>
                        ))}
                    </span>
                    {SolutionImages.slice(0, ).map((SolutionImage, index) => (
                    <div key={index} className="flex flex-col justify-start gap-2 md:gap-6 md:px-2 py-2 md:py-4 md:mt-12">
                        <span className="w-full h-[240px] md:h-[620px]">
                            <Image src={SolutionImage} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                        </span>
                    </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="flex flex-col px-2 md:px-8 py-4 mt-6">
                    <h1 className="text-black text-[2rem] font-semibold">{UserTestingTitle}</h1>
                    <span className="text-gray-700 mb-8 md:mb-32">
                        <p className="max-w-full md:max-w-[85%] text-[1.2rem] mb-2 md:mb-8">
                            {UserTestingText} 
                        </p>
                    </span>
                </div>
                <div className="w-full">
                {UserTestingImages.slice(0, ).map((UserTestingImage, index) => (
                    <div key={index} className="flex flex-col justify-start px-2">
                        <span className="w-full h-[fit-content]">
                            <Image src={UserTestingImage} alt="Trackack" width={2000} height={2000} className="w-full h-full object-cover" />
                        </span>
                    </div>
                    ))}
                </div>

                <div className="flex flex-col px-2 md:px-10 py-4 mt-12">
                    <h1 className="text-black text-[2rem] font-semibold">{FinalThoughtsTitle}</h1>
                    <span className="text-gray-700 mb-8 md:mb-32">
                        <p className="max-w-full md:max-w-[85%] text-[1.2rem]">
                            {FInalThoughtsText}
                        </p>
                    </span>

                    <span className=" flex flex-col items-center w-full h-fit-content] py-2 px-2 md:px-4 ">
                        <h1 className="text-black text-[2rem] font-semibold">Next Case</h1>
                        <div className=" md:h-[460px] h-[380px] w-full md:w-[360px] rounded-xl mx-auto ">
                            <Image src={NextCaseImage} alt="Next case" width={500} height={500} className="w-full h-full object-cover rounded-xl" />
                        </div>

                        <Link href={NextCaseLink}>
                            <button className="rounded-full px-4 py-2 border-black border text-black mt-8">
                                View more works
                            </button>
                        </Link>
                    </span>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Project