import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div>
            <nav className={`flex w-full items-center justify-between px-10 py-4 ${dropdownVisible ? 'bg-black text-white' : 'bg-white text-black'} relative`}>
                <div className=" font-bold text-[1.3rem] ml-4">John Achimugu</div>
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
                <ul className="flex flex-col items-center justify-center w-full relative bg-black space-y-2 text-white text-[4.2rem]">
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
            )}
        </div>
    );
};

export default Navbar;
