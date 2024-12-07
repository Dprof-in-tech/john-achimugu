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
            <h1 className="text-white text-[24px] font-semibold ">
                {company}
            </h1>
            <p className="text-white text-[1rem]">
                - {location}
            </p>
        </span>
        <h2 className="text-white font-medium text-[20px]">
            {role}
        </h2>
        <p className="text-white text-[1rem] opacity-60">
            {duration}
        </p>
    </div>
    );
};

export default ExperienceCard
