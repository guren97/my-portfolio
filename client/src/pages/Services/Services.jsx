import { easeOut, motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.75, delay: 0.4, ease: easeOut }}
        exit={{ opacity: 1 }}
        className="h-dvh w-full text-slate-900 absolute top-0 left-0  mx-0   lg:px-80 px-24 "
      >
        <div className="my-96">
          <div className="flex flex-col tracking-wide">
            {" "}
            <motion.h1 className="text-6xl font-medium text-center mb-6">
              Services Page
            </motion.h1>
          </div>
        </div>
      </motion.main>
    </>
  );
};
export default Services;
