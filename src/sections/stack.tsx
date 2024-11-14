import Image from "next/image";
import Figma from "/public/images/figma.png";
import Slack from "/public/images/slack.png";
import Adobe from "/public/images/adobe.png";
import Canva from "/public/images/canva.png";
import Notion from "/public/images/notion.png";
import Illustrator from "/public/images/illustrator.png";
import Miro from "/public/images/miro.png";
import Powerpoint from "/public/images/powerpoint.png";
import Forward from "/public/images/forward.svg";
import Ellipse from "/public/images/ellipse.svg";

const StackSection = () => {
    return (
        <div className="bg-[url('/images/work-background.png')] bg-cover bg-center w-full h-[100vh] px-10">
            <p className="text-white font-semibold text-4xl">
                My <span className="opacity-70">Stacks</span>
            </p>
            <p className="text-lg opacity-70 pt-4 pb-20">
                I am always committed to staying updated with the latest design trends and technologies.
            </p>

            {/* divs containing design icons */}
            <div className="flex flex-wrap gap-8 w-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-8 flex-1">
                    {/* Figma */}
                    <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-black grayscale hover:grayscale-0 w-full group">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
                        <div className="flex gap-4 items-center">
                            <div className="border rounded-xl opacity-70 px-5 py-3 relative group">
                                <Image src={Figma} alt="Figma-icon" width={30} height={40} />
                                <Image
                                    className="absolute bottom-0 left-[-0.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    src={Ellipse}
                                    alt="Figma-ellipse"
                                    width={15}
                                    height={5}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-xl">Figma</p>
                                <p className="text-sm opacity-70">Interface design tool</p>
                            </div>
                        </div>
                        <Image src={Forward} alt="forward-icon" width={40} height={40} />
                    </div>

                    {/* Slack */}
                    <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-black grayscale hover:grayscale-0 w-full group">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
                        <div className="flex gap-4 items-center">
                            <div className="border rounded-xl opacity-70 p-4">
                                <Image src={Slack} alt="Slack-icon" width={40} height={40} />
                                <Image
                                    className="absolute bottom-[0.5rem] left-[0.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    src={Ellipse}
                                    alt="Figma-ellipse"
                                    width={15}
                                    height={5}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-xl">Slack</p>
                                <p className="text-sm opacity-70">Workspace & team management tool</p>
                            </div>
                        </div>
                        <Image src={Forward} alt="forward-icon" width={40} height={40} />
                    </div>

                    {/* Adobe XD */}
                    <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-black grayscale hover:grayscale-0 w-full group">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
                        <div className="flex gap-4 items-center">
                            <div className="border rounded-xl opacity-70 p-4">
                                <Image src={Adobe} alt="Illustrator-icon" width={40} height={40} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-xl">Adobe XD</p>
                                <p className="text-sm opacity-70">Vector design tool</p>
                            </div>
                        </div>
                        <Image src={Forward} alt="forward-icon" width={40} height={40} />
                    </div>

                    {/* Canva */}
                    <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-black grayscale hover:grayscale-0 w-full group">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
                        <div className="flex gap-4 items-center">
                            <div className="border rounded-xl opacity-70 p-4">
                                <Image src={Canva} alt="Canva-icon" width={40} height={40} />
                                <Image
                                    className="absolute bottom-[0.5rem] left-[0.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    src={Ellipse}
                                    alt="Figma-ellipse"
                                    width={15}
                                    height={5}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-xl">Canva</p>
                                <p className="text-sm opacity-70">Graphics design tool</p>
                            </div>
                        </div>
                        <Image src={Forward} alt="forward-icon" width={40} height={40} />
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-8 flex-1">
                    {/* Notion */}
                    <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-black grayscale hover:grayscale-0 w-full group">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
                        <div className="flex gap-4 items-center">
                            <div className="border rounded-xl opacity-70 px-4 py-3">
                                <Image src={Notion} alt="Notion-icon" width={43} height={40} />
                                <Image
                                    className="absolute bottom-[0.5rem] left-[0.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    src={Ellipse}
                                    alt="Figma-ellipse"
                                    width={15}
                                    height={5}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-xl">Notion</p>
                                <p className="text-sm opacity-70">Workspace & productivity tool</p>
                            </div>
                        </div>
                        <Image src={Forward} alt="forward-icon" width={40} height={40} />
                    </div>

                    {/* Illustrator */}
                    <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-black grayscale hover:grayscale-0 w-full group">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
                        <div className="flex gap-4 items-center">
                            <div className="border rounded-xl opacity-70 p-4">
                                <Image src={Illustrator} alt="Slack-icon" width={40} height={40} />
                                <Image
                                    className="absolute bottom-[0.5rem] left-[0.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    src={Ellipse}
                                    alt="Figma-ellipse"
                                    width={15}
                                    height={5}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-xl">Adobe illustrator</p>
                                <p className="text-sm opacity-70">Graphics editor tool</p>
                            </div>
                        </div>
                        <Image src={Forward} alt="forward-icon" width={40} height={40} />
                    </div>

                    {/* Miro */}
                    <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-black grayscale hover:grayscale-0 w-full group">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
                        <div className="flex gap-4 items-center">
                            <div className="border rounded-xl opacity-70 p-4">
                                <Image src={Miro} alt="Miro-icon" width={40} height={40} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-xl">Miro</p>
                                <p className="text-sm opacity-70">Management & productivity tool</p>
                            </div>
                        </div>
                        <Image src={Forward} alt="forward-icon" width={40} height={40} />
                    </div>

                    {/* Powerpoint */}
                    <div className="relative overflow-hidden flex justify-between items-center border px-4 py-3 rounded-xl border-gray-600 bg-black grayscale hover:grayscale-0 w-full group">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transform rotate-[25deg] transition-all" />
                        <div className="flex gap-4 items-center">
                            <div className="border rounded-xl opacity-70 p-4">
                                <Image src={Powerpoint} alt="Powerpoint-icon" width={40} height={40} />
                                <Image
                                    className="absolute bottom-[0.5rem] left-[0.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    src={Ellipse}
                                    alt="Figma-ellipse"
                                    width={15}
                                    height={5}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-xl">Powerpoint</p>
                                <p className="text-sm opacity-70">Presentation & animation design tool</p>
                            </div>
                        </div>
                        <Image src={Forward} alt="forward-icon" width={40} height={40} />
                    </div>
                </div>
            </div>

            <p className="text-sm opacity-70 pt-10">*Tools with a dot are the ones I use the most </p>
        </div>
    );
}

export default StackSection;