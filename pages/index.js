import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nga Huynh</title>
        <meta name="description" content="Front end developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile-img.png" />
      </Head>
      <main className="flex items-center w-full text-slate-800 min-h-screen font-outfit">
        <div className="w-full h-full inline-block">
          <Navigation />
          <Landing />
          <Skills />
          <Projects />
        </div>
        {/* <Navbar />
       
       
        <Skills />
        <Projects />
        <Contact /> */}
      </main>
    </>
  );
}
