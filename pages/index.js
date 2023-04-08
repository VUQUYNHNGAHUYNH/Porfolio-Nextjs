import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { BiDownload } from "react-icons/bi";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nga Huynh</title>
        <meta name="description" content="Front end developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile-img.png" />
      </Head>
      <main className="w-full mx-auto text-slate-800 h-screen overflow-hidden">
        <TransitionEffect />
        <div className="flex flex-col items-center w-[90%] mx-auto justify-between lg:flex-row gap-8 py-12">
          {/* image */}
          <div className="w-full lg:w-1/2">
            <Image
              className="w-[60%] lg:w-full mx-auto"
              src="/profile-img.png"
              alt="avatar"
              width={330}
              height={330}
            />
          </div>
          {/* text */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <AnimatedText text="Nga Huynh" />
            <AnimatedText text="Frond End Developer" />
            <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl mx-auto text-slate-700 my-4 md:my-8">
              I am seeking an internship opportunity that will allow me to apply
              my skills and gain hands-on experience in creating responsive and
              user-friendly web applications. I am excited to learn and grow in
              a professional environment, and contribute to innovative projects
              that make a positive impact.
            </p>
            <Link
              href="https://github.com/VUQUYNHNGAHUYNH"
              target={"_blank"}
              className="flex items-center justify-center bg-slate-900 text-white p-2.5 2xl:p-4 px-6 2xl:px-8 rounded-lg text-2xl 2xl:text-3xl font-medium
           hover:bg-white hover:text-slate-900 hover:border-2 hover:border-slate-900"
              download={true}
            >
              Resume <BiDownload className="ml-1 w-8 h-8" />
            </Link>
          </div>
        </div>
        {/* hire me */}
        <HireMe />
      </main>
    </>
  );
}
