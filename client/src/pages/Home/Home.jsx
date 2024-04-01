import { useRef } from "react";
import { motion } from "framer-motion";

const Sections = ({ children, id, style, ref }) => {
  return (
    <section
      className="h-screen flex justify-center items-center align-middle sm:w-full md:w-full lg:w-full "
      id={id}
      style={{ scrollSnapAlign: "center" }}
      ref={ref}
    >
      {children}
    </section>
  );
};

const Home = () => {
  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  return (
    <>
      <div
        className="h-screen w-full transition duration-200 dark:bg-black dark:text-slate-100 px-24 py-2 ring-1 ring-slate-900/5 overflow-auto scroll-smooth"
        style={{
          scrollSnapType: "y mandatory",
        }}
      >
        <div className="h-full">
          <Sections id="about_section" ref={aboutSectionRef}>
            <h1>Section 1</h1>
          </Sections>
          <Sections id="services_section" ref={servicesSectionRef}>
            <h1>Section 2</h1>
          </Sections>
          <Sections id="projects_section" ref={projectsSectionRef}>
            <h1>Section 3</h1>
          </Sections>
          <Sections id="resume_section" ref={projectsSectionRef}>
            <h1>Section 3</h1>
          </Sections>
          <Sections id="cantact_section" ref={projectsSectionRef}>
            <h1>Section 3</h1>
          </Sections>
        </div>
      </div>
    </>
  );
};

export default Home;
