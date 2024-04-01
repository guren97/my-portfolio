import { easeOut, motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.main className="h-12 w-full relative transition duration-200 dark:bg-slate-800 flex items-center align-middle">
        <div className="my-96">
          <div className="flex flex-col tracking-wide">
            {" "}
            <motion.h1
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.4, ease: easeOut }}
              exit={{ opacity: 1 }}
              className="text-6xl font-medium text-center mb-6"
            >
              About Page
            </motion.h1>
          </div>
        </div>
      </motion.main>
    </>
  );
};
export default About;
// <div className="h-screen bg-slate-neutral-950  absolute">
//   <div className="flex flex-col lg:flex-row h-full justify-center items-center gap-10 p-10 lg:p-36">
//     <section
//       id="image-section"
//       className="border  bg-slate-300 border-red-500 rounded-lg lg:rounded-3xl h-full w-full lg:w-1/2"
//     >
//       <div className="aspect-w-16 aspect-h-9">
//         <img
//           id="image"
//           className="w-full h-full object-cover"
//           src="#"
//           alt="Profile Pic"
//         />
//       </div>
//     </section>
//     <section
//       id="about-info-section"
//       className="border  bg-slate-300 border-red-500  h-full w-full lg:w-1/2"
//     >
//       <h1 className="text-4xl lg:text-6xl font-bold text-red-300 text-center lg:text-left">
//         GWEN BAUTISTA
//       </h1>
//     </section>
//   </div>
// </div>
