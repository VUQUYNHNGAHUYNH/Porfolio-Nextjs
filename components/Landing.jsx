import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Landing = () => {
  return (
    <div
      id="home"
      className="sm:max-w-[80%] mx-auto w-full md:h-screen flex flex-col-reverse items-center justify-center 
    md:flex-row md:justify-between space-x-8 py-12 text-center md:text-left"
    >
      {/* text */}
      <div className="flex basis-3/5 md:mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="py-2 mt-8 md:mt-0 ">NGA HUYNH</h1>
          <h2 className="py-2">Front-End Developer Intern </h2>
          <p className="py-8 text-xl xl:text-2xl 2xl:text-2xl text-slate-900 font-normal">
            As a computer science student with a passion for front-end
            development, I am seeking an internship opportunity that will allow
            me to apply my skills and gain hands-on experience in creating
            responsive and user-friendly web applications. I am excited to learn
            and grow in a professional environment, and contribute to innovative
            projects that make a positive impact.
          </p>
          <div className="flex items-center justify-center md:justify-start mx-auto py-4 space-x-4 md:space-x-6">
            <div className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-100 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit">
                <FaLinkedinIn size={25} />
              </a>
            </div>
            <div className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-100 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/VUQUYNHNGAHUYNH">
                <FaGithub size={25} />
              </a>
            </div>
            <div className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-100 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="mailto:r0917268@student.thomasmore.be">
                <AiOutlineMail size={25} />
              </a>
            </div>
            <div className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-100 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/VUQUYNHNGAHUYNH">
                <BsFillPersonLinesFill size={25} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* image */}
      <div className="md:flex md:basis-2/5 mt-24 mx-auto w-full flex items-center justify-center">
        <Image
          className="rounded-2xl shadow-xl shadow-slate-400 hover:filter hover:saturate-150 transtion duration-500"
          src="/avatar.png"
          alt="avatar"
          width={330}
          height={330}
        />
      </div>
    </div>
  );
};

export default Landing;
