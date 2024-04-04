import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const About = () => {
  return (
    <>
      {" "}
      <section className="w-full p-0 m-0 absolute -py-24 flex justify-between items-center align-middle gap-10 -mt-8 ">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.75 }}
          exit={{ opacity: 0 }}
          div
          className="w-5/12 absolute ml-24 -my-40"
        >
          <h1 className="text-2xl">Hey there, I'm</h1>
          <h1 className="text-6xl font-semibold translate-x-4">
            Gwen Bautista,
          </h1>
          <p className="tracking-wide py-4 text-sm translate-x-3">
            a passionate
            <span className="text-1xl font-semibold">
              {" "}
              Developer & Designer{" "}
            </span>
            with a love for Creating and Designing websites for you. I aim to
            showcase my skills, experiences, and projects that highlight my
            journey in the world of evolving technology.
          </p>
        </motion.div>
      </section>
    </>
  );
};
export default About;
