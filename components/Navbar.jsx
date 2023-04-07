import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-[#ecf0f3]");
  const [textColor, setTextColor] = useState("text-sky-600");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setTextColor("text-slate-100");
        setBackgroundColor("bg-sky-400");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={`fixed w-full h-20 z-10 shadow-md mb-16 ${backgroundColor}`}
    >
      <div className="flex justify-between  items-center w-full h-full px-2 2xl:px-16">
        {/* desktop */}
        <Link href="/#home">
          <h1 className={`${textColor}`}>NH</h1>
        </Link>
        {/* navbar links */}
        <ul className={`hidden md:flex space-x-12 ${textColor}`}>
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              href={`#${nav.id}`}
              className="uppercase hover:border-b"
            >
              {nav.title}
            </Link>
          ))}
        </ul>
        {/* Hamburger icon */}
        <div
          className={` ${menu ? "hidden" : ""} block md:hidden z-10`}
          onClick={() => setMenu(!menu)}
        >
          <AiOutlineMenu className={`w-6 h-6 cursor-pointer ${textColor}`} />
        </div>
      </div>
      {/* mobile menu */}
      {/* overlay */}
      <div
        className={
          menu ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        {/* side menu */}
        <div
          className={` ${
            menu ? "fixed" : "hidden"
          }  left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  
           h-screen bg-[#ecf0f3] ease-in duration-300`}
        >
          <div className="flex w-full justify-between items-center p-4">
            <Link href="/#home">
              <h1>NH</h1>
            </Link>
            <div
              className="rounded-full w-[40px] shadow-md shadow-gray-400 p-2 cursor-pointer hover:bg-rose-400 hover:text-slate-50"
              onClick={() => setMenu(!menu)}
            >
              <AiOutlineClose className="w-6 h-6" />
            </div>
          </div>
          {/* nav links */}
          <div className="flex flex-col space-y-8 justify-center items-center mt-20">
            {navLinks.map((nav) => (
              <Link
                key={nav.id} 
                href={`#${nav.id}`}
                className="uppercase hover:text-rose-400 text-2xl"
                onClick={() => setMenu(!menu)}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
