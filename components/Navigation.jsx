import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const MotionLink = motion(Link);

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute h-[1px] bg-black left-0 -bottom-1 inline-block w-0  group-hover:w-full ease duration-300 cursor-pointer
      ${router.asPath === href ? "text-violet-600 w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navigation = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-32 py-8 text-xl font-medium">
      {/* hamburger icon */}
      <div
        onClick={() => setIsMenu(!isMenu)}
        className="block absolute left-4  lg:hidden"
      >
        <AiOutlineMenu className={`w-6 h-6 cursor-pointer`} />
      </div>

      {/* mobile menu */}
      {isMenu && (
        <div className="flex flex-col lg:hidden w-full h-full justify-center items-center fixed top-0 left-0 z-30 bg-black/95 text-slate-100 text-3xl ">
          <div
            onClick={() => setIsMenu(!isMenu)}
            className="absolute top-4 right-8"
          >
            <AiOutlineClose className="w-8 h-8 cursor-pointer hover:text-sky-600" />
          </div>
          {/* nav links */}
          <nav
            className="flex flex-col gap-10 "
            onClick={() => setIsMenu(!isMenu)}
          >
            <CustomLink href="/" title="Home" />
            <CustomLink href="/skills" title="Skills" />
            <CustomLink href="/projects" title="Projects" />
            <CustomLink href="/contact" title="Contact" />
          </nav>
          {/* social media links */}
          <nav className="flex items-center justify-center flex-wrap mt-24 gap-8">
            <motion.a
              href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 1.1 }}
            >
              <FaLinkedinIn size={30} />
            </motion.a>

            <motion.a
              href="https://github.com/VUQUYNHNGAHUYNH"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 1.1 }}
            >
              <FaGithub size={30} />
            </motion.a>

            <motion.a
              href="mailto:r0917268@student.thomasmore.be"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 1.1 }}
            >
              <AiOutlineMail size={30} />
            </motion.a>

            <motion.a
              href="https://github.com/VUQUYNHNGAHUYNH"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 1.1 }}
            >
              <BsFillPersonLinesFill size={30} />
            </motion.a>
          </nav>
        </div>
      )}

      {/* desktop */}
      <div className="hidden lg:flex w-full justify-between items-center">
        {/* nav links */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-6" />
          <CustomLink href="/skills" title="Skills" className="mr-6" />
          <CustomLink href="/projects" title="Projects" className="mr-6" />
          <CustomLink href="/contact" title="Contact" />
        </nav>
        {/* social media links */}
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"
            className="w-6 mr-6"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 1.1 }}
          >
            <FaLinkedinIn size={28} />
          </motion.a>

          <motion.a
            href="https://github.com/VUQUYNHNGAHUYNH"
            className="w-6 mr-6"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 1.1 }}
          >
            <FaGithub size={28} />
          </motion.a>

          <motion.a
            href="mailto:r0917268@student.thomasmore.be"
            className="w-6 mr-6"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 1.1 }}
          >
            <AiOutlineMail size={28} />
          </motion.a>

          <motion.a
            href="https://github.com/VUQUYNHNGAHUYNH"
            className="w-6"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 1.1 }}
          >
            <BsFillPersonLinesFill size={28} />
          </motion.a>
        </nav>
      </div>

      {/* logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <div className="flex items-center justify-center mt-2">
          <MotionLink
            href="/"
            className="w-14 h-14 bg-black text-slate-50 rounded-full flex items-center justify-center text-2xl font-bold"
            whileHover={{
              backgroundColor: ["#7F00FF", "#008CFF", "#FF7945", "#00B392"],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            NH
          </MotionLink>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
