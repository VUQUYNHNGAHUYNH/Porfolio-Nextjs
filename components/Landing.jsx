import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

const Landing = () => {
  return (
    <div className="flex items-center w-full justify-between">
      {/* image */}
      <div className="w-1/2">
        <Image
          className="w-[80%] mx-auto h-auto"
          src="/profile-img.png"
          alt="avatar"
          width={330}
          height={330}
        />
      </div>
      {/* text */}
      <div className="w-1/2 flex flex-col items-start self-center text-left">
        <div>
          <AnimatedText text="Nga Huynh" />
          <AnimatedText text="Frond-End Developer" />

          <p className="text-lg xl:text-xl 2xl:text-2xl text-slate-700 font-normal my-4">
            I am seeking an internship opportunity that will allow me to apply
            my skills and gain hands-on experience in creating responsive and
            user-friendly web applications. I am excited to learn and grow in a
            professional environment, and contribute to innovative projects that
            make a positive impact.
          </p>
        </div>

        <Link
          href="https://github.com/VUQUYNHNGAHUYNH"
          target={"_blank"}
          className="flex items-center bg-slate-900 text-white p-2.5 px-6 rounded-lg text-xl font-medium
           hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900"
          download={true}
        >
          Resume <BiDownload className="ml-1 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
