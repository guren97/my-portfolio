import { useEffect } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import Sections from "../../components/custom_ui/Sections.jsx";

const Home = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("#js-scroll"),
      smooth: true,
      smoothMobile: true,
      // Add any additional options as needed
    });

    // Clean up the instance on unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div>
      <div
        className="h-full   relative dark:bg-neutral-900 dark:text-slate-50"
        id="js-scroll"
      >
        <Sections id="about_section">
          <section className="w-full p-0 m-0 absolute -py-24 flex justify-between items-center align-middle gap-10 -mt-8 ">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1.1 }}
              transition={{ duration: 0.75 }}
              exit={{ opacity: 0 }}
              div
              className="w-4/12 absolute ml-36 "
            >
              <h1 className="text-2xl font-medium">Hey there, {"I'm"}</h1>
              <h1 className="text-6xl font-semibold translate-x-4 ">
                Gwen Bautista,
              </h1>
              <p className="tracking-wide py-4 text-sm translate-x-3 text-wrap">
                a passionate
                <span className="text-1xl font-semibold">
                  {" "}
                  Developer & Designer{" "}
                </span>
                with a love for Creating and Designing websites for you. I aim
                to showcase my skills, experiences, and projects that highlight
                my journey in the world of evolving technology.
              </p>
            </motion.div>
          </section>
        </Sections>
        <Sections id="services_section">
          <section className="w-full p-0 m-0 absolute -py-24 flex justify-between items-center align-middle gap-10 -mt-8 ">
            <div className="w-5/12 absolute ml-24 -my-40">
              <h1 className="text-6xl font-semibold translate-x-4">
                Services Section
              </h1>
            </div>
          </section>
        </Sections>
        <Sections id="projects_section">
          <section className="w-full p-0 m-0 absolute -py-24 flex justify-between items-center align-middle gap-10 -mt-8 ">
            <div className="w-5/12 absolute ml-24 -my-40">
              <h1 className="text-6xl font-semibold translate-x-4">
                Projects Section
              </h1>
            </div>
          </section>
        </Sections>
        <Sections id="resume_section">
          <section className="w-full p-0 m-0 absolute -py-24 flex justify-between items-center align-middle gap-10 -mt-8 ">
            <div className="w-5/12 absolute ml-24 -my-40">
              <h1 className="text-6xl font-semibold translate-x-4">
                Resume Section
              </h1>
            </div>
          </section>
        </Sections>
        <Sections id="cantact_section">
          <section className="w-full p-0 m-0 absolute -py-24 flex justify-between items-center align-middle gap-10 -mt-8 ">
            <div className="w-5/12 absolute ml-24 -my-40">
              <h1 className="text-6xl font-semibold translate-x-4">
                Contact Section
              </h1>
            </div>
          </section>
        </Sections>
      </div>
    </div>
  );
};

export default Home;
