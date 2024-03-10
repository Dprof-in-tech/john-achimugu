import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex w-[100%] items-center justify-between p-4 bg-white text-black">
            <div className="text-black font-bold text-[1.3rem] ml-4">John Achimugu</div>
            <ul className=" hidden md:flex w-[28%] space-x-[1.5rem] lg:space-x-[3rem] text-gray-400 text-[1.2rem]">
                <Link href="/work"><li>Work</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
    );
};

export default Navbar;