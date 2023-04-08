import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import blog from "../public/projects/blog.png";
import ecommerce from "../public/projects/ecommerce.jpg";
import monster from "../public/projects/monster-store.png";
import fitness from "../public/projects/fitness.png";

import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

const Project = ({ title, description, img, link, github }) => {
  return (
    <>
      <TransitionEffect />
      <div className="relative w-[90%] p-6  mx-auto flex flex-col md:flex-row items-center justify-center rounded-3xl rounded-br-2xl border border-slate-300 bg-slate-50 shadow-2xl ">
        <div className="absolute top-0 -right-3 -z-10 bg-slate-800 rounded-[2rem] w-[101%] h-[101%] rounded-br-3xl" />
        {/* image */}
        <Link
          href={link}
          target="_blank"
          className="md:w-1/2 hidden md:inline-block cursor-pointer overflow-hidden rounded-xl"
        >
          <Image src={img} alt={title} className="md:h-[280px] xl:h-[380px]" />
        </Link>
        {/* title and description */}
        <div className="w-full md:w-1/2 mx-auto flex flex-col py-2 space-y-2 md:pl-6">
          <Link href={link} target="_blank" className="hover:text-violet-500">
            <h2 className="w-full text-center md:text-left text-2xl lg:text-3xl font-bold text-violet-700">
              {title}
            </h2>
          </Link>
          <p className="text-sm lg:text-base  2xl:text-lg">{description}</p>
          <div className="flex items-center justify-center mx-auto">
            <Link href={github} target="_blank">
              <FaGithub size={28} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-slate-900 text-slate-100 font-medium text-sm lg:text-base px-4 py-2"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center text-slate-800 mt-12">
        <AnimatedText text="Projects" className="lg:ml-24" />
        <AnimatedText text="What I have built?" className="lg:ml-24" />
        <div className="grid grid-cols-12 items-center justify-center gap-6 py-8">
          <div className="xl:col-span-6 col-span-12">
            <Project
              title="Ecommerce Application"
              description="Implemented Redux Toolkit and Tailwind CSS to enhance state management and streamline responsive web design. Optimized data management by utilizing Strapi CMS, resulting in increased efficiency."
              img={ecommerce}
              link="https://github.com/VUQUYNHNGAHUYNH/E-Commerce"
              github="https://github.com/VUQUYNHNGAHUYNH/E-Commerce"
            />
          </div>
          <div className="xl:col-span-6 col-span-12">
            <Project
              title="Fitness Application"
              description="Utilized the power of Tailwind CSS to create a responsive website that adjusts to various screen sizes and devices, providing users with a seamless experience."
              img={fitness}
              link="https://fitness-nga.vercel.app/"
              github="https://github.com/VUQUYNHNGAHUYNH/Fitness-"
            />
          </div>
          <div className="xl:col-span-6 col-span-12">
            <Project
              title="Blog Application"
              description="This blog website leverages the power of GraphQl, Hygraph Headless CMS, and Tailwind CSS to enable seamless content management, lightning-fast page load times, and a sleek, modern design."
              img={blog}
              link="https://blog-hygraph-nga.vercel.app/"
              github="https://github.com/VUQUYNHNGAHUYNH/blog_hygraph"
            />
          </div>
          <div className="xl:col-span-6 col-span-12">
            <Project
              title="Monster Store Application"
              description="The website uses the Context API to manage the state of the cart, allowing users to add items and keep track of their price. Bootstrap is used for styling and layout, ensuring a user-friendly experience while navigating the cart functionality."
              img={monster}
              link="https://monster-store.vercel.app/"
              https:github="https://github.com/VUQUYNHNGAHUYNH/monster-react"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
