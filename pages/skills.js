import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";

const Skills = () => {
  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full md:h-screen max-w-[80%] mx-auto flex flex-col py-4 mt-12 ">
        <AnimatedText text="Skills" />
        <AnimatedText text="What can I do?" />
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:mt-24 gap-8 lg:gap-12 2xl:gap-24 py-4">
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 hover:bg-sky-200 shadow-gray-400 items-center justify-center ">
            <Image src="/skills/html.png" width={60} height={60} alt="/" />
            <h3 className="mt-2">HTML</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/css.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">CSS</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/tailwind.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">Tailwind</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/bootstrap.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">Bootstrap</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/react.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">React</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/nextjs.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">Nextjs</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/mysql.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">MySQL</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/node.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">Node</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/python.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">Python</h3>
          </div>
          <div className="flex flex-col shadow-lg rounded-xl hover:scale-105 ease-in duration-300 py-6 hover:bg-sky-200 shadow-gray-400 items-center justify-center">
            <Image src="/skills/github.png" width={60} height={60} alt="/" />
            <h3 className="mt-4">Github</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
