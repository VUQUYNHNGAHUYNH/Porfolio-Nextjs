import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CgChevronDoubleUpO } from "react-icons/cg";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <>
      <TransitionEffect />
      <div className="w-[90%] lg:w-full mx-auto flex flex-col justify-center overflow-hidden">
        <AnimatedText text="Contact me" className="md:ml-32 mt-12" />
        <div className="w-[90%] gap-4 flex flex-col items-center justify-center lg:flex-row mx-auto">
          <Image
            className="mx-auto w-[80%] lg:w-1/2"
            src="/contact.png"
            width={300}
            height={300}
            alt="contact"
          />
          {/* form  */}
          <div className="w-full lg:w-1/2 mx-auto p-4 md:p-8 bg-slate-200 shadow-xl shadow-gray-300 rounded-xl">
            <form
              className="font-medium text-base"
              target="_blank"
              onSubmit={handleSubmit}
              action="https://formsubmit.co/448deb11c7ffc2a180a664acb4fa5ffc"
              method="POST"
            >
              <input
                className="w-full p-2 2xl:p-3 rounded-lg border-2 border-gray-400"
                type="text"
                placeholder="Name..."
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && (
                <p className="text-rose-700 mt-3 text-left">
                  {errors.name.type === "required" && "This field is required"}
                </p>
              )}
              <input
                className="w-full p-2 2xl:p-3 mt-5 rounded-lg border-2 border-gray-400"
                type="text"
                placeholder="Email..."
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="text-rose-700 mt-2 text-left">
                  {errors.email.type === "required" && "This field is required"}
                </p>
              )}
              <textarea
                className="w-full p-2  2xl:p-3 mt-5 rounded-lg border-2 border-gray-400"
                type="text"
                placeholder="Message..."
                rows="4"
                cols="10"
                {...register("message", {
                  required: true,
                })}
              />
              {errors.message && (
                <p className="text-rose-700 mt-2 text-left">
                  {errors.message.type === "required" &&
                    "This field is required"}
                </p>
              )}
              <div className="flex justify-center items-center">
                <button className="text-lg lg:text-xl mt-4 rounded-lg mx-auto bg-slate-900 text-slate-100 font-medium px-6 py-3">
                  Send Me A Message
                </button>
              </div>
            </form>
            {/* icon move to homepage */}
            <div className="flex justify-center mt-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <Link href="/">
                <CgChevronDoubleUpO className="text-slate-800" size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
