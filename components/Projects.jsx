import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Ecommerce",
    image: "ecommerce",
    link: "https://github.com/VUQUYNHNGAHUYNH/E-Commerce",
    description: "React JS, Redux Toolkit, Tailwind CSS, Strapi",
  },
  {
    name: "Monster Store",
    image: "monster-store",
    link: "https://monster-store.vercel.app/",
    description: "React JS, Context API, Bootstrap 5",
  },
  {
    name: "Netflix",
    image: "netflix",
    link: "http://localhost:3000/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects[currentImageIndex];

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? projects.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === projects.length - 1 ? 0 : currentImageIndex + 1
    );
  };
  return (
    <div
      id="projects"
      className="max-w-[80%] md:h-screen w-full h-full mx-auto py-12 mt-12 flex flex-col justify-center"
    >
      <h1>Projects</h1>
      <h2 className="mt-8">What I have Built ?</h2>
      <p className="text-xl xl:text-2xl 2xl:text-2xl">
        Hover the image to see technology tools and link to website
      </p>

      <div className="relative group hover:bg-gray-900 mt-12 w-full h-auto duration-500 flex justify-center items-center ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            className="group-hover:opacity-30 object-cover"
            src={`/projects/${currentProject.image}.jpg`}
            width={900}
            height={600}
            alt={currentProject.name}
          />
        </motion.div>

        {/* description */}
        <div className="absolute hidden group-hover:block text-slate-200 text-center">
          <h2>{currentProject.name}</h2>
          <p className="text-base md:text-xl xl:text-3xl py-4 xl:py-8">
            {currentProject.description}
          </p>
          <Link href={`${currentProject.link}`}>
            <button>Link to website</button>
          </Link>
        </div>

        {/* Arrow left and right */}
        <div
          onClick={handlePrevClick}
          className="absolute hidden group-hover:block hover:scale-105 transition duration-300  text-4xl lg:text-6xl top-[50%] left-1 -translate-x-10 translate-y-[-50%] text-slate-700 cursor-pointer"
        >
          <IoMdArrowDropleftCircle />
        </div>
        <div
          onClick={handleNextClick}
          className="absolute hidden group-hover:block hover:scale-105 transition duration-300  text-4xl lg:text-6xl top-[50%] right-1 translate-x-10 translate-y-[-50%] text-slate-700 cursor-pointer"
        >
          <IoMdArrowDroprightCircle />
        </div>
      </div>
    </div>
  );
};

export default Projects;
