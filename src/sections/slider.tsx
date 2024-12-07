import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    position: string;
    company: string;
    twitterHandle: string;
    work: string;
    second_work: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote:
            "I've seen some decent designs in my time, but John work on Helpmee was borderline genius. I mean, who needs endless revisions when someone actually understands what they're doing? His designs were so good, I almost forgot I was working with a human. In all seriousness, John's exceptional communication skills, attention to detail, and mastery of mobile design principles made this project a dream. No unnecessary headaches or technical gymnastics required. Looking forward to the next project where John can once again make me look like a development superstar.",
        name: "Godsfavour Lewechi",
        position: "Mobile Software Engineer",
        company: "Dayout",
        twitterHandle: "@GodsfavourLewechi",
        work: "- Daytona",
        second_work: "",
    },
    {
        id: 2,
        quote:
            "John is efficient and works quickly. He communicates promptly if he is unable to complete a task immediately.",
        name: "Ijeoma Ubochi",
        position: "Content Creator",
        company: "TechFlow",
        twitterHandle: "@ijeomademerkins",
        work: "- Ibx",
        second_work: "",
    },
    {
        id: 3,
        quote:
            "John is my go-to for any design work, not only because of his incredible talent but also for his reliability. Having worked with him, I can confidently say he’s not just an outstanding designer, but also a disciplined and trustworthy professional. He consistently delivers on time, and that level of dependability is something I value above all else.",
        name: "David Ejere",
        position: "Co-Founder, Frontend Developer",
        company: "- Young & Skilled Initiative - Fominance",
        twitterHandle: "@Doomsday_codes",
        work: "- Young & Skilled Initiative",
        second_work: "- Fominance",
    },
    {
        id: 4,
        quote:
            "worked with John as part of the Ingressive For Good circle programme and it was a pleasant experience working with him. He took over as the Lead of I4G UNN circle and he made sure to grow the community by hosting events that impacted the skills of community members. He's also a talented designer with attention to detail and is fond of delivering his deliverables on or before time. I would always recommend him as I have seen he is a value add to any team he joins.",
        name: "Daniel Anomfueme",
        position: "Contributor",
        company: "- - VitaDAO, DeSci Africa",
        twitterHandle: "@lifeofdanel",
        work: "- VitaDAO, DeSci Africa",
        second_work: "",
    },
    {
        id: 5,
        quote:
            "I had the pleasure of working with John Achimugu for a year at IBX Exchange, where I served as the Brand Manager, and he was a Product Designer. John consistently demonstrated an exceptional talent for creating unique and innovative designs that perfectly aligned with our brand’s vision. His attention to detail, combined with his creativity, made his work stand out, and he was always able to deliver high-quality outputs, even under tight deadlines. In addition to his technical skills, John is a great team player. He was always willing to collaborate across departments, ensuring smooth project execution. His positive attitude, reliability, and dedication to excellence made him a valuable asset to our team, and I have no doubt he will continue to contribute meaningfully in any future endeavors.",
        name: "Urenna Ochulo",
        position: "Brand and Corporate Communications",
        company: "- Fidelity Pension Managers Limited",
        twitterHandle: "@urenna_ochulo",
        work: "- Fidelity Pension Manager",
        second_work: "",
    },
];

const TestimonialSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const testimonialWidth = 600 + 32;

    return (
        <div ref={containerRef} className="min-h-screen bg-[#121213] relative">
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto no-scrollbar scroll-smooth px-32 py-20"
            >
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex-none w-[600px] mr-8 group">
                        {/* Testimonial Card */}
                        <div className="bg-black rounded-xl overflow-hidden relative px-8 py-4">
                            <Image className="absolute mx-6 py-4 top-4 left-2" src="/images/quotes.png" height={30} width={30} alt="Quotes-img" />
                            <Image className="absolute mx-6 py-4 bottom-2 right-2 transform rotate-180" src="/images/quotes.png" height={30} width={30} alt="Quotes-img" />



                            <blockquote className="text-white text-sm px-10 py-8 tracking-wider leading-loose">
                                {testimonial.quote}
                            </blockquote>
                        </div>

                        {/* Extra Info Card */}
                        <div className="bg-blue-600 flex items-end text-white px-10 py-8 rounded-b-xl rounded-t-xl transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out">
                            <div className="flex items-center justify-between w-full">
                                <div className="mt-[2rem]">
                                    <div className="font-bold">{testimonial.name}</div>
                                    <div className="text-sm">{testimonial.position}</div>
                                </div>
                                <div className="mt-[-2rem]">
                                    <div className="text-lg font-semibold text-gray-300 leading-[2rem]">{testimonial.work}</div>
                                    <div className="text-lg font-semibold text-gray-300 mt-[-0.5rem]">{testimonial.second_work}</div>
                                    <div className="text-sm text-gray-300 leading-[2rem] mt-4">{testimonial.twitterHandle}</div>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `}</style>
        </div>



    );
};

export default TestimonialSlider;
