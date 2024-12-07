import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flex flex-col w-full items-center justify-center px-4 pt-[6rem] bg-white text-black ">
            <div className='w-[95%] border-dashed border-t-2 border-gray-500 py-6'>
                <span className=' text-[3rem] md:text-[3.5rem] lg:text-[5rem] w-[fit-content]'>
                    <h1 className="text-black">Let&apos;s Work</h1>
                    <h1 className="text-gray-600 font-[300] flex flex-row relative w-[fit-content] pr-4">Together <Image src="/icons/Vector.png" alt="" width={5} height={5} className='h-5 w-5 ml-8 absolute top-12 lg:top-20 right-0 rotate-90 ' /></h1>
                </span>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full md:w-[85%] lg:w-[50%] items-center justify-center space-x-8 p-4 text-black py-12 ">
                <a href=""><button className=' border-solid border-gray-400 border-2 px-6 py-2 font-semi-bold text-[1.2rem] rounded-full'>achimugunusa11@gmail.com</button></a>
                <a href=""><button className='border-solid border-gray-400 border-2 px-4 py-2  font-semi-bold text-[1.2rem] rounded-full w-full md:w-[fit-content]'>+234-7156456787</button></a>
            </div>
            <div className="flex w-[95%] items-center justify-between py-8 bg-white text-black border-dashed border-t-2 border-gray-500">
                <div className="text-gray-600 text-[1rem]">&#169;John Achimugu 2024</div>
                <div className=" hidden md:flex md:w-auto   space-x-[1rem] lg:space-x-[1.5rem] text-gray-400 text-[1.2rem]">
                    <a href="">
                        <h1 className="text-gray-600 flex flex-row items-center w-[fit-content] pr-4">Instagram <svg className='h-3 w-3 ml-2' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54395 9.35693L10.0602 1.35693M10.0602 1.35693H1.8846M10.0602 1.35693V9.03693" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </h1>
                    </a>
                    <a href="">
                        <h1 className="text-gray-600 flex flex-row items-center w-[fit-content] pr-4">Twitter <svg className='h-3 w-3 ml-2' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54395 9.35693L10.0602 1.35693M10.0602 1.35693H1.8846M10.0602 1.35693V9.03693" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </h1>
                    </a>
                    <a href="">
                        <h1 className="text-gray-600 flex flex-row items-center w-[fit-content] pr-4">LinkedIn <svg className='h-3 w-3 ml-2' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54395 9.35693L10.0602 1.35693M10.0602 1.35693H1.8846M10.0602 1.35693V9.03693" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </h1>
                    </a>
                </div>
            </div>
       </footer>
    );
};

export default Footer;