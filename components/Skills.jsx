import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full h-full md:h-screen max-w-[80%] mx-auto flex flex-col justify-center py-12 mt-12 "
    >
      <h1>Skills</h1>
      <h2 className="py-4">What can I do?</h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 xl:mt-24 gap-8 lg:gap-12 2xl:gap-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 hover:bg-sky-200 shadow-gray-400 items-center justify-center ">
          <Image src="/skills/html.png" width={80} height={80} alt="/" />
          <h3 className="mt-2">HTML</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/css.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">CSS</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/tailwind.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">Tailwind</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/bootstrap.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">Bootstrap</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/react.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">React</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/nextjs.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">Nextjs</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/node.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">Node</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/mysql.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">MySQL</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/python.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">Python</h3>
        </div>
        <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
          <Image src="/skills/github.png" width={80} height={80} alt="/" />
          <h3 className="mt-4">Github</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
