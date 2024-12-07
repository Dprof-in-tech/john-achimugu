import Image from "next/image";
import Figma from "/public/images/figma.png";
import Slack from "/public/images/slack.png";
import Adobe from "/public/images/adobe.png";
import Canva from "/public/images/canva.png";
import Notion from "/public/images/Notion.png";
import Illustrator from "/public/images/illustrator.png";
import Miro from "/public/images/miro.png";
import Powerpoint from "/public/images/powerpoint.png";
import Forward from "/public/images/forward.svg";
import Ellipse from "/public/images/ellipse.svg";

const stackData = [
    {
        id: 1,
        name: "Figma",
        description: "Interface design tool",
        icon: Figma,
        isFrequentlyUsed: true,
        iconPadding: "p-4"
    },
    {
        id: 2,
        name: "Slack",
        description: "Workspace & team management tool",
        icon: Slack,
        isFrequentlyUsed: true,
        iconPadding: "p-4"
    },
    {
        id: 3,
        name: "Adobe XD",
        description: "Vector design tool",
        icon: Adobe,
        isFrequentlyUsed: false,
        iconPadding: "p-4"
    },
    {
        id: 4,
        name: "Canva",
        description: "Graphics design tool",
        icon: Canva,
        isFrequentlyUsed: true,
        iconPadding: "p-4"
    },
    {
        id: 5,
        name: "Notion",
        description: "Workspace & productivity tool",
        icon: Notion,
        isFrequentlyUsed: true,
        iconPadding: "p-4"
    },
    {
        id: 6,
        name: "Adobe illustrator",
        description: "Graphics editor tool",
        icon: Illustrator,
        isFrequentlyUsed: true,
        iconPadding: "p-4"
    },
    {
        id: 7,
        name: "Miro",
        description: "Management & productivity tool",
        icon: Miro,
        isFrequentlyUsed: false,
        iconPadding: "p-4"
    },
    {
        id: 8,
        name: "Powerpoint",
        description: "Presentation & animation design tool",
        icon: Powerpoint,
        isFrequentlyUsed: true,
        iconPadding: "p-4"
    }
];

const StackCard = ({ tool }: { tool: typeof stackData[number] }) => {
    return (
        <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-[#101012] grayscale hover:grayscale-0 w-full group">
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
            <div className="flex gap-4 items-center">
                <div className={`border rounded-xl opacity-70 relative group  ${tool.iconPadding}`}>
                    <Image className="max-h-[40px]" src={tool.icon} alt={`${tool.name}-icon`} width={40} height={40} />
                    {tool.isFrequentlyUsed && (
                        <Image
                            className="absolute bottom-[-0.5rem] left-[-0.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            src={Ellipse}
                            alt="usage-indicator"
                            width={15}
                            height={5}
                        />
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-semibold text-xl">{tool.name}</p>
                    <p className="text-sm opacity-70">{tool.description}</p>
                </div>
            </div>
            {/* <Image src={Forward} alt="forward-icon" width={40} height={40} /> */}
        </div>
    );
};

const StackSection = () => {
    const midPoint = Math.ceil(stackData.length / 2);
    const column1Data = stackData.slice(0, midPoint);
    const column2Data = stackData.slice(midPoint);

    return (
        <div className="bg-[url('/images/work-background.png')] bg-cover bg-center w-full h-[100vh] px-10 pt-8">
            <p className="text-white font-semibold text-4xl">
                My <span className="opacity-70">Stacks</span>
            </p>
            <p className="text-lg opacity-70 pt-4 pb-20">
                I am always committed to staying updated with the latest design trends and technologies.
            </p>

            <div className="flex flex-wrap gap-8 w-full">
                <div className="flex flex-col gap-8 flex-1">
                    {column1Data.map(tool => (
                        <StackCard key={tool.id} tool={tool} />
                    ))}
                </div>
                <div className="flex flex-col gap-8 flex-1">
                    {column2Data.map(tool => (
                        <StackCard  key={tool.id} tool={tool}/>
                    ))}
                </div>
            </div>

            <p className="text-sm opacity-70 pt-10">*Tools with a dot are the ones I use the most </p>
        </div>
    );
};

export default StackSection;