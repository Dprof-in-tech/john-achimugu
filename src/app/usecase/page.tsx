'use client'
import React from "react";
import Navbar from "@/components/navbar";
import Image from 'next/image';

export default function Page() {
    return (
        <div>
            <Navbar />
            <section className="text-black mt-16 px-12 py-2 space-y-4">
               <span className="w-full space-y-2">
                    <h1 className="max-w-[50%] text-gray-800 font-bold text-[2.5rem]">Trackack</h1>
                    <p className="max-w-[50%] text-gray-800 text-[1.2rem]">
                        Trackack is a fitness and diet tracker app that guides users through their daily workout activities  
                    </p>
               </span>
               <div className="w-full h-[520px]">
                    <Image src={'/images/trackack-cover.png'} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
               </div>
                <div className="flex flex-row items-start justify-start w-full h-[fit-content] gap-[16%] px-6 py-4 mb-32">
                    <span className="flex flex-col justify-start space-y-4">
                        <h2 className="font-semibold text-black ">Client</h2>
                        <ul className="space-y-2">
                            <li>Trackack</li>
                        </ul>
                    </span>
                    <span className="flex flex-col justify-start space-y-4">
                        <h2 className="font-semibold text-black ">Tools</h2>
                        <ul className="space-y-2">
                            <li>Figma</li>
                            <li>Adobe Illustrator</li>
                            <li>Miro board</li>
                        </ul>
                    </span>
                    <span className="flex flex-col justify-start space-y-4">
                        <h2 className="font-semibold text-black ">Services</h2>
                        <ul className="space-y-2">
                            <li>Visual Design</li>
                            <li>Ux Research</li>
                        </ul>
                    </span>
                    <span className="flex flex-col justify-start space-y-4">
                        <h2 className="font-semibold text-black ">Category</h2>
                        <ul className="space-y-2">
                            <li>Product Design</li>
                        </ul>
                    </span>
                </div>
                <div className="flex flex-col justify-start space-y-8 text-[1.2rem] text-gray-700 px-4 py-6 border-t-2 border-dashed border-gray-700 ">
                    <p className="max-w-[50%]">
                        Sport is an important part of our lives, which leads us to good health and a sane mind. 
                        Many people start their workout routine with high hopes. When people start working out, 
                        much of their success or failure in reaching their goals are based on their diet. 
                        Even with a great plan, tracking your eating after every meal is very hard, and good UX can be an 
                        important factor in your success or failure in the long run. I found this as an interesting challenge to solve.
                    </p>
                    <p className="max-w-[50%]">
                        Trackack is a mobile app designed to make it easier for people interested in keeping their 
                        body fit and live a healthy life. This app would help users get online lessons, keep track of 
                        their activities, check their diet plans, play their favorite songs, own a personal instructor, 
                        etc Though some people have issued complains about workout apps related to this UI/UX field, 
                        Trackack goal is to engage people interested in working out to provide a better experience for users
                    </p>
                </div>
            </section>
            <section className="w-full mb-72">
                <div className="w-full h-[620px]">
                    <Image src={'/images/trackack-cover.png'} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                </div>
            </section>
            <section className="px-6 py-4">
                <div className="flex flex-row items-start justify-between gap-16 px-6 py-4">
                    <span className="text-gray-700 w-[80%]">
                        <h1 className="text-[2rem] text-black font-bold mb-4">Problem Statement</h1>
                        <p className="mb-20 text-[1.2rem]">
                            People that are interested in working out mostly find it difficult going to the gym probably because 
                            they&apos;ve other engagements, work, activity or they might just be feeling lazy. So they always try 
                            to rely on home workouts on their own and they find out not meeting their target. Also, people who go 
                            to the gym simply aren&apos;t getting any attention from the trainers unless they opt for a personal trainer. 
                            So getting their desired fitness is also a problem. People also find it an issues knowing if their current 
                            diet plan is safe for their workout and daily activities and also trying to access apps for their workout 
                            activities such as music and scheduling apps.
                        </p>
                        <h1 className="text-[2rem] text-black font-bold mb-4">
                            Goals
                        </h1>
                        <ul className="text-[1.2rem] list-disc px-4 space-y-2">
                            <li>promote healthy behavior change with personalized workouts, fitness advice and nutrition plans.</li>
                            <li>Time -efficient way to commute to workout activities</li>
                            <li>To help people who are inclined to exercise more, but who are reluctant to do so due to a variety of reasons</li>
                        </ul>
                    </span>
                    <span className="w-[460px] h-[650px]">
                        <Image src={'/images/trackack-cover.png'} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                    </span>
                </div>

                <div className="flex flex-row justify-between items-start mt-12 px-6 py-4">
                    <span className="text-gray-700">
                        <h1 className="text-[2rem] text-black font-bold mb-4">
                            Who are our Target Users
                        </h1>
                        <ul className="text-[1.2rem] px-2 space-y-4">
                            <li>Beginners in fitness</li>
                            <li>Fitnes Enthusiasts</li>
                            <li>Health conscious people</li>
                            <li>Music lovers</li>
                            <li>Age group of 16 - 45</li>
                        </ul>

                        <h1 className="text-[2rem] mt-8 text-black font-bold mb-4">
                            Pain points
                        </h1>
                        <ul className="text-[1.2rem] list-disc px-6 space-y-2">
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                        </ul>
                    </span>
                    <span className="w-[380px] h-[380px]">
                        <Image src={'/images/trackack-cover.png'} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                    </span>
                </div>

                <div className="flex flex-col px-6 py-4">
                    <h1 className="text-black text-[2rem] font-semibold">My Solution</h1>
                    <span className="text-gray-700">
                        <p className="max-w-[85%] text-[1.2rem] mb-8">
                            Users will experience the service by using a mobile app. I need to ensure that 
                            my designed experience is friendly, usable, desirable, credible, and accessible. 
                            Some offering solutions based on user behavior, attitude, lifestyle, and insights 
                            from the research I&apos;ve offered on this project are:
                        </p>
                        <ul className="text-[1.2rem] list-disc px-8 space-y-2">
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                            <li>Don&apos;t have enough free time to do some exercise.</li>
                        </ul>
                    </span>
                    <div className="flex flex-wrap justify-start gap-6 px-2 py-4 mt-12">
                        <span className="w-full h-[520px]">
                            <Image src={'/images/trackack-cover.png'} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-[49%] h-[520px]">
                            <Image src={'/images/trackack-cover.png'} alt="Trackack" width={1000} height={1000} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-[49%] h-[520px] bg-gray-300">
                            {/* <Image src={'/images/trackack-cover.png'} alt="Trackack" width={1000} height={1000}  className="w-full h-full object-cover"/> */}
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
} 