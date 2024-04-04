// eslint-disable-next-line react/prop-types
const Sections = ({ children, id }) => {
  return (
    <section
      className="h-dvh flex justify-center items-center align-middle sm:w-full md:w-full lg:w-full"
      id={id}
      data-scroll-section // remove extra curly braces and quotes here
      style={{ scrollSnapAlign: "center" }}
    >
      {children}
    </section>
  );
};

export default Sections;
