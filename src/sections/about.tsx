import React from "react";
import Image from 'next/image';
import ExperienceCard from "@/components/ExperienceCard";
import { education, experiences } from "../../data";
import Footer from "@/components/footer";

const AboutSection:React.FC = () => {
    return(
        <section className="flex flex-col gap-8 mt-16">
            <div className="flex flex-col md:flex-row justify-around items-center mb-8">
                <div className="w-full md:w-[35%] h-[65vh] p-4">
                    <Image src='/images/Johns-Avatar.png' width={500} height={500} alt="John's Avatar" className="w-full h-full" />
                </div>
                <div className="flex flex-col text-gray-900 w-full md:w-[50%] gap-4">
                    <h1 className="font-bold text-center text-[1.5rem] md:text-[3rem]">Hello, I&apos;m John!</h1>
                    <p className="text-[1.2rem] mx-auto md:mx-0 max-w-[90%] text-start md:text-justify">
                        I&apos;m a visual and product designer. I bring a multidisciplinary, human-centered approach and a growth 
                        mindset into my design process and craft.  
                    </p>
                    <p className="text-[1.2rem] max-w-[90%] mx-auto md:mx-0 text-start md:text-justify">
                        My primary goal is to provide a rich engaging and innovative user experience to the user. I am proficient at designing systems, 
                        applying design research and strategy to solve complex problems.
                    </p>
                    <p className="text-[1.2rem] max-w-[90%] mx-auto md:mx-0 text-start md:text-justify"> 
                        I am self-aware of the impact our solutions have on people&apos;s lives, and this is the reason 
                        why I always give my best to create a seamless and delightful experience.
                    </p>
                </div>
            </div>
            <span className="text-gray-900 text-[1.2rem] w-[90%] mx-auto px-6 py-2 md:mx-0 text-start md:text-justify">
                When I&apos;m not designing, you can find me exploring amazing systems (3d modeling, gaming, animating, etc.), watching nature documentaries,  
                podcasts, listening to music genres with Hiphop, Pop, R&B, indie alternative influence, watching TV series and animes.
            </span>
            <span className="text-gray-900 text-[1.2rem] md:ml-[5%] w-full md:w-[40%] px-6">
                If you have similar interests or just want to connect, let&apos;s <a href="#" className="text-blue-500 underline">chat!</a> You can download my <a href="#" className="text-blue-500 underline">resume here.</a>
            </span>
                    
            <div className="flex flex-col md:flex-row justify-center justify-evenly gap-[20%] mt-8 mb-32 px-2 md:px-12">
                <div className=" flex flex-col w-full  md:w-[35%]">
                    <span className='flex self-start items-center justify-center mb-4 px-8 relative'>
                        <h1 className="text-black font-semibold text-[1.7rem] mb-4 text-start">Work Experience</h1>
                        <svg width="302" height="24" viewBox="0 0 302 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0'>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.965 9.7296C110.125 10.1181 108.295 10.5306 106.477 10.9689C105.815 11.1283 105.411 11.7892 105.572 12.4443L105.581 12.4701C95.7289 12.6282 85.8794 12.8795 76.0345 13.2264C61.8129 13.728 47.5015 14.5637 33.3295 15.8711C19.3242 17.1629 15.4549 17.4949 3.40665 19.668C3.06209 19.7301 2.39727 19.7255 2.0397 19.8242C1.69968 19.9179 1.45639 20.0816 1.30021 20.2419C1.10016 20.4451 0.985233 20.6793 0.936724 20.9357C0.885411 21.2151 0.90117 21.5565 1.1437 21.9382C1.82788 23.0094 2.93234 23.3045 4.27875 23.0802C5.43722 22.887 6.83725 22.1997 7.93476 22.1222C26.2051 20.8333 44.463 19.402 62.7353 18.1393C90.7081 16.2065 118.597 15.3107 146.491 14.7867C175.818 15.0719 205.131 16.1529 234.394 17.9686C253.452 19.1503 272.471 20.8954 291.505 22.4244C291.491 22.5073 291.489 22.5939 291.493 22.6823C291.535 23.3551 292.123 23.8685 292.802 23.8282C293.491 23.7874 299.634 23.6204 300.766 23.3451C301.415 23.1873 301.668 22.7909 301.752 22.6212C301.98 22.1557 301.993 21.6496 301.483 21.1663C301.382 21.0736 301.195 20.9203 300.85 20.8223C300.555 20.7363 299.824 20.6272 298.497 20.5261C277.178 18.8844 255.886 16.8554 234.543 15.5299C225.015 14.9401 215.482 14.426 205.94 13.9944C218.889 13.8407 231.844 13.6646 244.818 13.4006C245.377 13.3908 245.648 13.3012 245.698 13.28C246.41 12.9761 246.459 12.4188 246.445 12.1029C246.441 11.9902 246.344 11.0596 245.299 10.9279C244.687 10.8505 240.267 10.6969 238.567 10.606C230.397 10.1617 230.587 10.2305 222.229 9.84582C203.848 9.00218 185.495 8.43519 167.093 7.97347C159.756 7.78966 152.419 7.6404 145.08 7.52915C166.228 5.76676 187.814 5.86051 208.385 5.66092C218.997 5.55819 229.612 5.52087 240.224 5.66674C244.977 5.73221 249.729 5.87662 254.482 5.96562C255.958 5.9931 257.431 6.05479 258.906 6.09103C259.08 6.09514 261.369 6.116 261.744 6.10826C262.727 6.08805 262.953 5.22145 262.961 5.18672C263.003 5.02364 263.165 3.85746 261.943 3.67633C244.295 1.05877 225.798 1.65012 207.975 1.20938C176.78 0.437849 145.503 0.567129 114.312 1.49638C100.515 1.90727 86.7637 2.77903 72.9871 3.64631C66.1066 4.07952 59.2079 4.53902 52.3936 5.60622C51.71 5.71345 50.1605 5.82283 49.409 5.95003C49.0266 6.01498 48.7543 6.11774 48.6297 6.18794C48.0834 6.49263 47.975 6.94147 47.9666 7.25623C47.9613 7.49212 48.0127 8.32278 49.1388 8.57763C65.2302 12.2239 83.0811 9.90333 99.4179 9.78173C103.6 9.75056 107.781 9.73343 111.965 9.7296ZM125.588 9.7643C120.742 10.4929 115.945 11.3588 111.216 12.3902C122.977 12.2439 134.739 12.23 146.506 12.3447C165.918 11.9801 185.329 11.7949 204.764 11.5657C192.197 11.0961 179.626 10.7308 167.035 10.4151C153.224 10.0686 139.406 9.84575 125.588 9.7643ZM192.843 3.34805C166.696 2.9427 140.514 3.15907 114.393 3.93734C100.621 4.34763 86.8983 5.21805 73.1485 6.0837C67.7381 6.42432 62.313 6.77946 56.9305 7.44187C70.8404 9.15107 85.659 7.4417 99.3949 7.33964C108.07 7.27512 116.749 7.27013 125.426 7.32094C147.484 4.02843 170.53 3.55013 192.843 3.34805Z" fill="#0078FF"/>
                        </svg>
                    </span>
                    <div className="w-full">
                        {experiences.map((experience, index) => (
                            <ExperienceCard 
                                key={index}
                                company={experience.company}
                                location={experience.location}
                                role={experience.role}
                                duration={experience.duration}
                            />
                        ))}
                    </div>
                </div>
                <div className=" flex flex-col w-full md:w-[35%] px-2">
                <span className='flex self-start items-center justify-center mb-4 pl-16 relative'>
                        <h1 className="text-black font-semibold text-[1.7rem] mb-4 text-start">Education</h1>
                        <svg width="302" height="24" viewBox="0 0 302 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0'>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.965 9.7296C110.125 10.1181 108.295 10.5306 106.477 10.9689C105.815 11.1283 105.411 11.7892 105.572 12.4443L105.581 12.4701C95.7289 12.6282 85.8794 12.8795 76.0345 13.2264C61.8129 13.728 47.5015 14.5637 33.3295 15.8711C19.3242 17.1629 15.4549 17.4949 3.40665 19.668C3.06209 19.7301 2.39727 19.7255 2.0397 19.8242C1.69968 19.9179 1.45639 20.0816 1.30021 20.2419C1.10016 20.4451 0.985233 20.6793 0.936724 20.9357C0.885411 21.2151 0.90117 21.5565 1.1437 21.9382C1.82788 23.0094 2.93234 23.3045 4.27875 23.0802C5.43722 22.887 6.83725 22.1997 7.93476 22.1222C26.2051 20.8333 44.463 19.402 62.7353 18.1393C90.7081 16.2065 118.597 15.3107 146.491 14.7867C175.818 15.0719 205.131 16.1529 234.394 17.9686C253.452 19.1503 272.471 20.8954 291.505 22.4244C291.491 22.5073 291.489 22.5939 291.493 22.6823C291.535 23.3551 292.123 23.8685 292.802 23.8282C293.491 23.7874 299.634 23.6204 300.766 23.3451C301.415 23.1873 301.668 22.7909 301.752 22.6212C301.98 22.1557 301.993 21.6496 301.483 21.1663C301.382 21.0736 301.195 20.9203 300.85 20.8223C300.555 20.7363 299.824 20.6272 298.497 20.5261C277.178 18.8844 255.886 16.8554 234.543 15.5299C225.015 14.9401 215.482 14.426 205.94 13.9944C218.889 13.8407 231.844 13.6646 244.818 13.4006C245.377 13.3908 245.648 13.3012 245.698 13.28C246.41 12.9761 246.459 12.4188 246.445 12.1029C246.441 11.9902 246.344 11.0596 245.299 10.9279C244.687 10.8505 240.267 10.6969 238.567 10.606C230.397 10.1617 230.587 10.2305 222.229 9.84582C203.848 9.00218 185.495 8.43519 167.093 7.97347C159.756 7.78966 152.419 7.6404 145.08 7.52915C166.228 5.76676 187.814 5.86051 208.385 5.66092C218.997 5.55819 229.612 5.52087 240.224 5.66674C244.977 5.73221 249.729 5.87662 254.482 5.96562C255.958 5.9931 257.431 6.05479 258.906 6.09103C259.08 6.09514 261.369 6.116 261.744 6.10826C262.727 6.08805 262.953 5.22145 262.961 5.18672C263.003 5.02364 263.165 3.85746 261.943 3.67633C244.295 1.05877 225.798 1.65012 207.975 1.20938C176.78 0.437849 145.503 0.567129 114.312 1.49638C100.515 1.90727 86.7637 2.77903 72.9871 3.64631C66.1066 4.07952 59.2079 4.53902 52.3936 5.60622C51.71 5.71345 50.1605 5.82283 49.409 5.95003C49.0266 6.01498 48.7543 6.11774 48.6297 6.18794C48.0834 6.49263 47.975 6.94147 47.9666 7.25623C47.9613 7.49212 48.0127 8.32278 49.1388 8.57763C65.2302 12.2239 83.0811 9.90333 99.4179 9.78173C103.6 9.75056 107.781 9.73343 111.965 9.7296ZM125.588 9.7643C120.742 10.4929 115.945 11.3588 111.216 12.3902C122.977 12.2439 134.739 12.23 146.506 12.3447C165.918 11.9801 185.329 11.7949 204.764 11.5657C192.197 11.0961 179.626 10.7308 167.035 10.4151C153.224 10.0686 139.406 9.84575 125.588 9.7643ZM192.843 3.34805C166.696 2.9427 140.514 3.15907 114.393 3.93734C100.621 4.34763 86.8983 5.21805 73.1485 6.0837C67.7381 6.42432 62.313 6.77946 56.9305 7.44187C70.8404 9.15107 85.659 7.4417 99.3949 7.33964C108.07 7.27512 116.749 7.27013 125.426 7.32094C147.484 4.02843 170.53 3.55013 192.843 3.34805Z" fill="#0078FF"/>
                        </svg>
                    </span>
                    <div className="w-full">
                        {education.map((book, index) => (
                            <ExperienceCard 
                                key={index}
                                company={book.company}
                                location={book.location}
                                role={book.role}
                                duration={book.duration}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default AboutSection