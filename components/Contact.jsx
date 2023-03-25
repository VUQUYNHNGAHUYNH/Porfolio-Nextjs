import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CgChevronDoubleUpO } from "react-icons/cg";
import { motion } from "framer-motion";

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
    <div
      id="contact"
      className="max-w-[80%] md:h-screen w-full h-full mx-auto py-12 flex flex-col justify-center"
    >
      <h1>Contact Me</h1>
      <h2 className="py-4"> Get in touch!</h2>

      <motion.div
        className="flex flex-col gap-10 mt-12 items-center justify-center xl:flex-row mx-auto h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Image
          className="flex basis-1/3 mt-10 md:mt-0 mx-auto rounded-full"
          src="/contact.png"
          width={300}
          height={300}
          alt="contact"
        />
        {/* form  */}
        <div className="basis-2/3 mx-auto w-full p-4 md:p-10 bg-gray-100 shadow-2xl shadow-gray-400 rounded-xl">
          <form
            className="text-sky-700 font-medium text-base lg:text-xl 2xl:text-2xl"
            target="_blank"
            onSubmit={handleSubmit}
            action="https://formsubmit.co/448deb11c7ffc2a180a664acb4fa5ffc"
            method="POST"
          >
            <input
              className="w-full placeholder-sky-700 p-3 rounded-lg border-2 border-gray-400"
              type="text"
              placeholder="NAME..."
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
              className="w-full placeholder-sky-700 p-3 mt-5 rounded-lg  border-2 border-gray-400"
              type="text"
              placeholder="EMAIL..."
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
              className="w-full placeholder-sky-700 p-3 mt-5 rounded-lg border-2 border-gray-400"
              type="text"
              placeholder="MESSAGE..."
              rows="5"
              cols="70"
              {...register("message", {
                required: true,
              })}
            />
            {errors.message && (
              <p className="text-rose-700 mt-2 text-left">
                {errors.message.type === "required" && "This field is required"}
              </p>
            )}
            <button className="p-4 text-xl lg:text-2xl mt-8 w-full">
              SEND ME A MESSAGE
            </button>
          </form>
          {/* icon moveup */}
          <div className="flex justify-center mt-8 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="/">
              <CgChevronDoubleUpO className="text-sky-600" size={50} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
