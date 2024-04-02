import { motion } from "framer-motion";
import Sections from "../../components/custom_ui/Sections.jsx";

const Home = () => {
  return (
    <div style={{ overflowY: "hidden" }}>
      {" "}
      {/* Set overflowY to 'hidden' */}
      <div
        className="h-screen w-full transition duration-200  dark:bg-slate-900 dark:text-slate-100 px-24 py-2 overflow-auto scroll-smooth no-scrollbar overflow-y-auto"
        style={{
          scrollSnapType: "y mandatory",
        }}
        id="home_sections"
      >
        <div className="h-full relative">
          <Sections id="about_section">
            <section className="w-full p-0 m-0 absolute -py-24 flex justify-between items-center align-middle gap-10 -mt-8 ">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{}}
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
                  with a love for Creating and Designing websites for you. I aim
                  to showcase my skills, experiences, and projects that
                  highlight my journey in the world of evolving technology.
                </p>
              </motion.div>
            </section>
          </Sections>
          <Sections id="services_section">
            <section className="w-full p-0 m-0 absolute -py-24 flex justify-between items-center align-middle gap-10 -mt-8 ">
              <div className="w-5/12 absolute ml-24 -my-40">
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
                  with a love for Creating and Designing websites for you. I aim
                  to showcase my skills, experiences, and projects that
                  highlight my journey in the world of evolving technology.
                </p>
              </div>
            </section>
          </Sections>
          <Sections id="projects_section">
            <h1>Section 3</h1>
          </Sections>
          <Sections id="resume_section">
            <h1>Section 3</h1>
          </Sections>
          <Sections id="cantact_section">
            <h1>Section 3</h1>
          </Sections>
        </div>
      </div>
    </div>
  );
};

export default Home;
