import React from "react";

interface ExperienceProps{
    company: string,
    location: string,
    role: string,
    duration: string
}

const ExperienceCard:React.FC<ExperienceProps> = ({ company, location, role, duration }) => {
    return(
        <div className="w-full h-[fit-content] pl-4 md:px-1 py-4 flex flex-col justify-start space-y-1">
        <span className="flex flex-row gap-1 items-center ">
            <h1 className="text-black text-[1.2rem] font-semibold ">
                {company}
            </h1>
            <p className="text-gray-500 text-[1rem]">
                - {location}
            </p>
        </span>
        <h2 className="text-black font-medium text-[1rem]">
            {role}
        </h2>
        <p className="text-gray-500 text-[1rem]">
            {duration}
        </p>
    </div>
    );
};

export default ExperienceCard
