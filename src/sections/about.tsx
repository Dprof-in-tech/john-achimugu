"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceCard from "@/components/ExperienceCard";
import { education, experiences } from "../../data";
import Footer from "@/components/footer";

interface WatchingImage {
  src: string;
  alt: string;
  title: string;
  location?: string;
}

const watchingImages: WatchingImage[] = [
  {
    src: "/images/movies/silo.png",
    alt: "Silo",
    title: "Silo",
    location: "Apple TV+",
  },
  {
    src: "/images/movies/severance.png",
    alt: "Severance",
    title: "Severance",
    location: "Apple TV+",
  },
  {
    src: "/images/movies/bleach.png",
    alt: "bleach",
    title: "Bleach",
    location: "Hulu",
  },
  {
    src: "/images/movies/ashoka.png",
    alt: "ashoka",
    title: "Ahsoka",
    location: "Disney+",
  },
  {
    src: "/images/movies/clover.png",
    alt: "clover",
    title: "Black Clover",
    location: "Netflix",
  },
  {
    src: "/images/movies/from.png",
    alt: "from",
    title: "From",
    location: "Prime Videos",
  },
];

const listeningImages: WatchingImage[] = [
  {
    src: "/images/music/broken.png",
    alt: "broken",
    title: "Broken",
    location: "Little Simz",
  },
  {
    src: "/images/music/longbeach.png",
    alt: "long beach",
    title: "Long Beach",
    location: "Kota the Friend",
  },
  {
    src: "/images/music/knob.png",
    alt: "off the knob",
    title: "Off the Knob",
    location: "Marlon Craft",
  },
  {
    src: "/images/music/pink.png",
    alt: "pink + white",
    title: "Pink + White",
    location: "Frank Ocean",
  },
  {
    src: "/images/music/tekit.png",
    alt: "Tek it",
    title: "Tek It",
    location: "Cafune",
  },
  {
    src: "/images/music/feels.png",
    alt: "feels",
    title: "Nothing Burns Like the Cold",
    location: "Snoh Aalegra, Vince Staples",
  },
];

const gamingImages: WatchingImage[] = [
  {
    src: "/images/games/dredge.png",
    alt: "dredge",
    title: "Dredge",
    location: "Nintendo Switch Console",
  },
  {
    src: "/images/games/spiderman.png",
    alt: "spiderman",
    title: "Spiderman 2",
    location: "PlayStation",
  },
  {
    src: "/images/games/starwars.png",
    alt: "starwars",
    title: "Star Wars: Jedi Fallen Order",
    location: "Electronic Arts Inc",
  },
  {
    src: "/images/games/zelda.png",
    alt: "legend of Zelda",
    title: "Legend of Zelda: TOTK",
    location: "Nintendo Switch Console",
  },

  {
    src: "/images/games/fc24.png",
    alt: "FC 24",
    title: "FC 24",
    location: "Nintendo Switch Console",
  },

  {
    src: "/images/games/fortnite.png",
    alt: "fortnite",
    title: "Fortnite",
    location: "Nintendo Switch Console",
  },
];

const containerVariants = {
  stacked: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  grid: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  stacked: (index: number) => ({
    position: "absolute",
    x: index * 20,
    y: index * -10,
    rotate: index * 15 - 30,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
  grid: (index: number) => ({
    position: "relative",
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
};

// Social link type and data
interface SocialLink {
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "LinkedIn", url: "#" },
];

// Arrow icon component
const ArrowIcon = () => (
  <svg
    className="h-3 w-3 ml-2"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.54395 9.35693L10.0602 1.35693M10.0602 1.35693H1.8846M10.0602 1.35693V9.03693"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AboutSection: React.FC = () => {
  const [isWatchingVisible, setIsWatchingVisible] = useState(false);
  const [isListeningVisible, setIsListeningVisible] = useState(false);
  const [isgamingVisible, setIsgamingVisible] = useState(false);
  const sectionRefWatching = useRef<HTMLDivElement>(null);
  const sectionRefListening = useRef<HTMLDivElement>(null);
  const sectionRefgaming = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const stackedPositions = [
    { x: 0, y: 0, rotate: -12 }, // First card (bottom)
    { x: 20, y: -10, rotate: 12 }, // Second card
    { x: 40, y: -20, rotate: -6 }, // Third card
    { x: 100, y: -30, rotate: 0 }, // Fourth card (top)
    { x: 100, y: -30, rotate: 0 },
    { x: 100, y: -30, rotate: 0 },
  ];

  const gridPositions = [
    { x: -170, y: -40, rotate: -20 }, // Top left
    { x: 120, y: -60, rotate: 12 }, // Top right
    { x: 450, y: -150, rotate: 14 }, // Bottom left
    { x: 520, y: 250, rotate: -20 }, // Bottom right
    { x: 90, y: 320, rotate: 18 },
    { x: -320, y: 350, rotate: 16 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === sectionRefWatching.current) {
          setIsWatchingVisible(entry.isIntersecting);
        } else if (entry.target === sectionRefListening.current) {
          setIsListeningVisible(entry.isIntersecting);
        } else if (entry.target === sectionRefgaming.current) {
          setIsgamingVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRefWatching.current) {
      observer.observe(sectionRefWatching.current);
    }
    if (sectionRefListening.current) {
      observer.observe(sectionRefListening.current);
    }
    if (sectionRefgaming.current) {
      observer.observe(sectionRefgaming.current);
    }

    return () => observer.disconnect();
  }, []);

  const WatchingImages = () => {
    return (
      <motion.div
        className="relative w-full md:w-[50%] h-[500px]"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={containerVariants}
        animate={isHovered ? "grid" : "stacked"}
      >
        <div
          className={`
            relative w-auto h-full 
            ${
              isHovered
                ? "grid grid-cols-2 gap-4 p-4"
                : "flex items-center justify-center"
            }
          `}
        >
          {watchingImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute"
              animate={{
                x: isHovered
                  ? gridPositions[index].x
                  : stackedPositions[index].x,
                y: isHovered
                  ? gridPositions[index].y
                  : stackedPositions[index].y,
                rotate: isHovered
                  ? gridPositions[index].rotate
                  : stackedPositions[index].rotate,
                zIndex: isHovered ? 1 : watchingImages.length - index,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className="relative w-full h-full group">
                <div className="bg-white px-4 pt-4 w-[280px] h-[356px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="object-cover transition-transform duration-300 h-3/4 w-full filter grayscale group-hover:grayscale-0"
                  />
                  <div className=" group-hover:flex flex-col items-center mt-6 hidden">
                    <p className="text-black text-[16px] font-semibold">
                      {image.title}
                    </p>
                    <p className="text-black text-[12px] font-medium">
                      {image.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const ListeningImages = () => {
    return (
      <motion.div
        className="relative w-full md:w-[50%] h-[500px]"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={containerVariants}
        animate={isHovered ? "grid" : "stacked"}
      >
        <div
          className={`
            relative w-auto h-full 
            ${
              isHovered
                ? "grid grid-cols-2 gap-4 p-4"
                : "flex items-center justify-center"
            }
          `}
        >
          {listeningImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute"
              animate={{
                x: isHovered
                  ? gridPositions[index].x
                  : stackedPositions[index].x,
                y: isHovered
                  ? gridPositions[index].y
                  : stackedPositions[index].y,
                rotate: isHovered
                  ? gridPositions[index].rotate
                  : stackedPositions[index].rotate,
                zIndex: isHovered ? 1 : watchingImages.length - index,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className="relative w-full h-full group">
                <div className="bg-white px-4 pt-4 w-[280px] h-[356px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="object-cover transition-transform duration-300 h-3/4 w-full filter grayscale group-hover:grayscale-0"
                  />
                  <div className=" group-hover:flex flex-col items-center mt-6 hidden">
                    <p className="text-black text-[16px] font-semibold">
                      {image.title}
                    </p>
                    <p className="text-black text-[12px] font-medium">
                      {image.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const GamingImages = () => {
    return (
      <motion.div
        className="relative w-full md:w-[50%] h-[500px]"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={containerVariants}
        animate={isHovered ? "grid" : "stacked"}
      >
        <div
          className={`
            relative w-auto h-full 
            ${
              isHovered
                ? "grid grid-cols-2 gap-4 p-4"
                : "flex items-center justify-center"
            }
          `}
        >
          {gamingImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute"
              animate={{
                x: isHovered
                  ? gridPositions[index].x
                  : stackedPositions[index].x,
                y: isHovered
                  ? gridPositions[index].y
                  : stackedPositions[index].y,
                rotate: isHovered
                  ? gridPositions[index].rotate
                  : stackedPositions[index].rotate,
                zIndex: isHovered ? 1 : watchingImages.length - index,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className="relative w-full h-full group">
                <div className="bg-white px-4 pt-4 w-[280px] h-[356px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="object-cover transition-transform duration-300 h-3/4 w-full filter grayscale group-hover:grayscale-0"
                  />
                  <div className=" group-hover:flex flex-col items-center mt-6 hidden">
                    <p className="text-black text-[16px] font-semibold">
                      {image.title}
                    </p>
                    <p className="text-black text-[12px] font-medium">
                      {image.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const SocialLinks = () => (
    <div className="hidden md:flex md:w-auto space-x-4 text-gray-400 text-[20px]">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.url}>
          <h1 className="text-white flex flex-row items-center w-fit pr-4">
            {link.name}
            <ArrowIcon />
          </h1>
        </a>
      ))}
    </div>
  );

  return (
    <section className="flex flex-col gap-8 mt-8 bg-work-bg overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-[2rem] w-full">
        <div className="w-full md:w-[310px] h-[380px] bg-white px-4 pt-3 -rotate-12 group flex flex-col items-center ml-[5%]">
          <Image
            src="/images/lexjo.png"
            width={500}
            height={500}
            alt="John"
            className="w-full h-[82%] rotate-0 filter grayscale group-hover:grayscale-0"
          />
          <p className="hidden group-hover:flex text-black opacity-60 mt-4 text-[20px]">
            Yep that&apos;s me
          </p>
        </div>
        <div className="flex flex-col text-gray-900 w-full md:w-[60%] gap-[3rem] pt-12 px-4">
          <div>
            <h1 className="font-[600] px-4 md:px-0 text-start text-[1.5rem] md:text-[3rem] m-0 text-white opacity-60">
              Hey there,
            </h1>
            <h2 className="font-[600] px-4 md:px-0 text-start text-[1.5rem] md:text-[3rem] m-0 text-white">
              My legal name is John, but you can call me Alex or lexjo.
            </h2>
          </div>
          {/* Bio paragraphs */}
          {[
            "I'm a visual and product designer. I bring a multidisciplinary, human-centered approach and a growth mindset into my design process and craft.",
            "My primary goal is to provide a rich engaging and innovative user experience to the user. I am proficient at designing systems, applying design research and strategy to solve complex problems.",
            "I am self-aware of the impact our solutions have on people's lives, and this is the reason why I always give my best to create a seamless and delightful experience.",
          ].map((text, index) => (
            <p
              key={index}
              className="text-[1.2rem] max-w-[90%] mx-auto md:mx-0 text-start md:text-justify text-white"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <span className="self-center text-[1.2rem] w-full md:w-[90%] mx-auto px-6 py-2 md:mx-0 text-start md:text-justify text-white">
        When I&apos;m not designing, you can find me exploring amazing systems
        (design trends, gaming, animating, etc.), playing video games on my
        console, watching animes, series, movies and nature documentaries,
        listening to music genres with Hiphop, Pop, R&B, indie alternative
        influence.
      </span>
      {/* Watch Section with Images */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[6rem] my-[4rem] gap-8 md:gap-[5rem] h-[80vh]"
        initial={{ opacity: 0 }}
        animate={isWatchingVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`flex flex-col items-start justify-center gap-4 w-full md:w-[40%] h-full text-start overflow-x-hidden ${
            isWatchingVisible ? "opacity-100" : "opacity-0"
          }`}
          ref={sectionRefWatching}
        >
          <h2 className="text-[28px] text-white">
            What I&apos;m <span className="opacity-60">watching</span>
          </h2>
          <p className="text-[20px] text-white">
            You can catch me on Apple TV+, Netflix, HBO, Prime videos, Disney+ &
            Hulu watching shows like Severance, Silo, From, Bleach, Ahsoka,
            Black Clover
          </p>
        </div>

        <WatchingImages />
      </motion.div>

      {/* Watch Section with Images */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[6rem] my-[4rem] gap-8 md:gap-[5rem] h-[80vh]"
        initial={{ opacity: 1 }}
        animate={isListeningVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`flex flex-col items-start justify-center gap-4 w-full md:w-[40%] h-full text-start overflow-x-hidden ${
            isListeningVisible ? "opacity-100" : "opacity-0"
          }`}
          ref={sectionRefListening}
        >
          <h2 className="text-[28px] text-white">
            What I&apos;m <span className="opacity-60">listening to</span>
          </h2>
          <p className="text-[20px] text-white">
            I vibe to any genre of music like Pop, Hip-hop, Alternative Hip-hop,
            chill, jazz
          </p>

          <button className="group flex gap-2 text-white border border-white rounded-full py-4 px-8">
            <Image
              src="/icons/spotify.svg"
              width={20}
              height={20}
              alt="spotify"
              className="mr-2 filter grayscale group-hover:grayscale-0"
            />
            Let&apos;s Vibe
          </button>
        </div>

        <ListeningImages />
      </motion.div>

      {/* Watch Section with Images */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[6rem] my-[4rem] gap-8 md:gap-[5rem] h-[80vh]"
        initial={{ opacity: 1 }}
        animate={isgamingVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`flex flex-col items-start justify-center gap-4 w-full md:w-[40%] h-full text-start overflow-x-hidden ${
            isgamingVisible ? "opacity-100" : "opacity-0"
          }`}
          ref={sectionRefgaming}
        >
          <h2 className="text-[28px] text-white">
            When I&apos;m <span className="opacity-60">Gaming</span>
          </h2>
          <p className="text-[20px] text-white">
            I mostly play Action-adventure, RPG, Sports, Multiplayer Battle
            royale, platformer and cozy games.
          </p>
        </div>

        <GamingImages />
      </motion.div>

      {/* Experience and Education Section */}
      <div className="flex flex-col md:flex-row items-start justify-evenly gap-[20%] mt-8 mb-32 px-2 md:px-12">
        {[
          { title: "Work Experience", data: experiences },
          { title: "Education", data: education },
        ].map(({ title, data }) => (
          <div key={title} className="flex flex-col w-full md:w-[35%] px-2">
            <h1 className="font-semibold text-[1.7rem] mb-4 text-center md:text-start text-white">
              {title.split(" ")[0]}{" "}
              {title.split(" ")[1] && (
                <span className="opacity-60">{title.split(" ")[1]}</span>
              )}
            </h1>
            <div className="w-full">
              {data.map((item, index) => (
                <ExperienceCard key={index} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="flex flex-col w-full gap-3 md:w-[40%] px-[6rem] mb-12">
        <p className="text-white text-[28px]">
          Let&apos;s grab <span className="opacity-60">coffee and chat!</span>
        </p>
        <p className="text-white text-[20px]">
          The best stories are told in person.
        </p>
        <p className="text-white mt-4 text-[20px]">
          Say hello at achimugunusa11@gmail.com. For more info, here&apos;s my{" "}
          <a href="" className="underline">
            resume.
          </a>
        </p>
        <SocialLinks />
      </div>
      <Footer />
    </section>
  );
};

export default AboutSection;
