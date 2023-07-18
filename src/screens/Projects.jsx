import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import JavaBankApp from "../projects/JavaBankApp";
import ReactChatApp from "../projects/ReactChatApp";
import React from "react";

const Projects = () => {
  const isAboveMediumScreen = useMediaQuery({ query: "(min-width: 1060px)" });
  return (
    <section id="projects" className="pt-2 pb-24 ">
      <div className=" flex flex-col flex-wrap md:flex md:justify-between md:gap-14 mt-32 md:flex-col md:mb-0">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl md:text-6xl mb-5 font-roboto font-semibold">
            My <span className="text-blue">Projects 🧑‍💻</span>
          </p>

          <p className="text-2xl">A Selection Of Stuff I've Built</p>
        </motion.div>
        <ReactChatApp />
        <JavaBankApp />
        <ReactChatApp />
      </div>
    </section>
  );
};

export default Projects;
