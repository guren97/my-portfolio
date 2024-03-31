import { easeIn, motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <main className="h-dvh w-full text-slate-900 absolute top-0 left-0  mx-0  lg:px-80 px-24 ">
        <div className="my-96">
          <div className="flex flex-col tracking-wide">
            {" "}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: -20 }}
              transition={{ duration: 0.75, delay: 0.4, ease: easeIn }}
              exit={{ opacity: 1 }}
              className="text-6xl font-medium text-center mb-6"
            >
              Home Page Page
            </motion.h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
