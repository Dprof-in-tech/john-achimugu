import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: 'spring', duration: 0.5, delay: 0.3 } 
        },
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
        <div className='focus'>
            <nav className={`flex w-full items-center justify-between px-2 lg:px-10 py-4 ${dropdownVisible ? 'bg-black text-white' : 'bg-white text-black'} relative`}>
                <Link href='/'>
                    <div className=" font-bold text-[1.3rem] ml:2 md:ml-4">John Achimugu</div>
                </Link>
                <button onClick={toggleDropdown} className='bg-gray-400 bg-opacity-20 rounded-[50%] p-2 focus:outline-none'>
                    {dropdownVisible ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    )}
                </button>
            </nav>
            {dropdownVisible && (
                <motion.div
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: dropdownVisible ? 1 : 0, y: dropdownVisible ? 0 : -50 }} 
                transition={{ duration: 0.3 }} 
              >
               <div className='flex flex-col justify-evenly h-[90vh] w-full  bg-black'>
                 <ul className="flex flex-col items-center justify-center w-full relative space-y-2 text-white text-[2.1rem] md:text-[4.2rem]">
                     <li className="p-2 hover:text-blue-500">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-2 hover:text-blue-500">
                        <Link href="/work">Work</Link>
                    </li>
                    <li className="p-2 hover:text-blue-500">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="p-2 hover:text-blue-500">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                <div className="flex flex-col md:flex-row w-full items-center justify-between  px-8 py-8 bg-black text-white">
                <div className="text-[1rem]">&#169; Code by Isaac</div>
                <div className=" hidden md:flex md:w-auto   space-x-[1rem] lg:space-x-[1.5rem] text-white text-[1.2rem]">
                    <a href="">
                        <h1 className="text-white flex flex-row items-center w-[fit-content]  hover:text-blue-500 pr-4">Instagram <svg className='h-3 w-3 ml-2' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54395 9.35693L10.0602 1.35693M10.0602 1.35693H1.8846M10.0602 1.35693V9.03693" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </h1>
                    </a>
                    <a href="">
                        <h1 className="text-white flex flex-row items-center w-[fit-content]  hover:text-blue-500 pr-4">Twitter <svg className='h-3 w-3 ml-2' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54395 9.35693L10.0602 1.35693M10.0602 1.35693H1.8846M10.0602 1.35693V9.03693" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </h1>
                    </a>
                    <a href="">
                        <h1 className="text-white flex flex-row items-center w-[fit-content]  hover:text-blue-500 pr-4">LinkedIn <svg className='h-3 w-3 ml-2' width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.54395 9.35693L10.0602 1.35693M10.0602 1.35693H1.8846M10.0602 1.35693V9.03693" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </h1>
                    </a>
                </div>

                </div>
               </div>
               </motion.div>
            )}            
        </div>
        </motion.div>
    );
};

export default Navbar;
