import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MotionLink = motion(Link);

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute h-[1px] bg-black left-0 -bottom-1 inline-block w-0  group-hover:w-full ease duration-300
      ${router.asPath === href ? "text-violet-600 w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const Navigation = () => {
  return (
    <header className="w-full flex items-center justify-between px-32 py-8 text-xl font-medium">
      {/* nav links */}
      <nav>
        <CustomLink href="/" title="Home" className="mr-6" />
        <CustomLink href="/skills" title="Skill" className="mr-6" />
        <CustomLink href="/projects" title="Projects" className="mr-6" />
        <CustomLink href="/contact" title="Contact" />
      </nav>
      {/* logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <div className="flex items-center justify-center mt-2">
          <MotionLink
            href="/"
            className="w-16 h-16 bg-black text-slate-50 rounded-full flex items-center justify-center text-2xl font-bold"
            whileHover={{
              backgroundColor: ["#7F00FF", "#008CFF", "#FF7945", "#00B392"],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            NH
          </MotionLink>
        </div>
      </div>
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
    </header>
  );
};

export default Navigation;
