import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import TransitionEffect from "./TransitionEffect";

const Landing = () => {
  return (
    <>
      <TransitionEffect />
      <div className="flex flex-col items-center w-full justify-between lg:flex-row py-32 gap-8">
        {/* image */}
        <div className="w-1/2">
          <Image
            className="w-[70%] mx-auto h-auto"
            src="/profile-img.png"
            alt="avatar"
            width={330}
            height={330}
          />
        </div>
        {/* text */}
        <div className="w-1/2 flex flex-col items-start self-center text-left space-y-4 lg:space-y-8">
          <div>
            <AnimatedText text="Nga Huynh" />
            <AnimatedText text="Frond End Developer" />

            <p className="text-base lg:text-xl xl:text-2xl 2xl:text-3xl  max-w-[750px] text-slate-700 my-4">
              I am seeking an internship opportunity that will allow me to apply
              my skills and gain hands-on experience in creating responsive and
              user-friendly web applications. I am excited to learn and grow in
              a professional environment, and contribute to innovative projects
              that make a positive impact.
            </p>
          </div>

          <Link
            href="https://github.com/VUQUYNHNGAHUYNH"
            target={"_blank"}
            className="flex items-center bg-slate-900 text-white p-2.5 2xl:p-4 px-6 2xl:px-8 rounded-lg text-xl 2xl:text-3xl font-medium
           hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900"
            download={true}
          >
            Resume <BiDownload className="ml-1 w-6 h-6" />
          </Link>
        </div>
      </div>
      {/* hire me */}
      <div className="fixed top-0 right-0 lg:left-0 lg:bottom-0 flex items-center overflow-hidden">
        <div className="w-48 h-auto flex items-center justify-center relative">
          <Image
            src="/circular-text.png"
            alt="text"
            width={250}
            height={330}
            className="animate-spin-slow w-[130px] lg:w-[180px]"
          />
          <Link
            href="mailto:r0917268@student.thomasmore.be"
            className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-black text-white w-14 h-14 lg:w-20 lg:h-20 rounded-full text-base lg:text-xl hover:scale-105 transition duration-300"
          >
            Hire me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
