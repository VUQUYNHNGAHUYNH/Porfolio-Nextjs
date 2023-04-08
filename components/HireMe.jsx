import Image from "next/image";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed -right-6 bottom-0 flex items-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          src="/circular-text.png"
          alt="text"
          width={250}
          height={330}
          className="animate-spin-slow w-[140px]"
        />
        <Link
          href="mailto:r0917268@student.thomasmore.be"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-black text-white w-16 h-16 rounded-full text-lg hover:scale-105 transition duration-300"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
