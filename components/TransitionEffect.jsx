import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-violet-600"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-25 bg-sky-600"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-15 bg-slate-800"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
