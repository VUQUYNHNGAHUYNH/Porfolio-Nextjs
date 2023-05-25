import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import hotelapp from "../public/projects/hotelapp.png";
import ecommerce from "../public/projects/ecommerce.jpg";
import pizza1 from "../public/projects/pizza1.png";
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
          className="hidden md:inline-block cursor-pointer overflow-hidden rounded-xl md:w-1/2"
        >
          <Image src={img} alt={title} />
        </Link>
        {/* title and description */}
        <div className="w-full md:w-1/2 mx-auto flex flex-col py-2 space-y-2 md:pl-6">
          <Link href={link} target="_blank" className="hover:text-violet-500">
            <h2 className="w-full text-center md:text-left text-2xl lg:text-3xl font-bold text-violet-700">
              {title}
            </h2>
          </Link>
          <p className="text-sm lg:text-base 2xl:text-xl">{description}</p>
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
        <div className="flex flex-col lg:w-[80%] items-center justify-center mx-auto gap-8 lg:gap-10 py-8">
          <Project
            title="Pizza Application"
            description="The website uses the Context API to manage the state of the cart, allowing users to add items and keep track of their price. Tailwind is used for styling and layout, ensuring a user-friendly experience while navigating the cart functionality."
            img={pizza1}
            link="https://pizza-shop-nga.vercel.app/"
            github="https://github.com/VUQUYNHNGAHUYNH/pizza"
          />

          <Project
            title="Hotel Application"
            description="This is a hotel booking website where you can browse and book accommodations for your upcoming trip. Property owners can also list their properties for potential guests to book."
            img={hotelapp}
            link="https://hotels-web.vercel.app/"
            github="https://github.com/VUQUYNHNGAHUYNH/hotels-app"
          />

          <Project
            title="Ecommerce Application"
            description="Implemented Redux Toolkit and Tailwind CSS to enhance state management and streamline responsive web design. Optimized data management by utilizing Strapi CMS, resulting in increased efficiency."
            img={ecommerce}
            link="https://github.com/VUQUYNHNGAHUYNH/E-Commerce"
            github="https://github.com/VUQUYNHNGAHUYNH/E-Commerce"
          />
          <Project
            title="Fitness Application"
            description="Utilized the power of Tailwind CSS to create a responsive website that adjusts to various screen sizes and devices, providing users with a seamless experience."
            img={fitness}
            link="https://fitness-nga.vercel.app/"
            github="https://github.com/VUQUYNHNGAHUYNH/Fitness-"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
