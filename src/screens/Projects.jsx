import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import React from "react";

const Projects = () => {
  const isAboveMediumScreen = useMediaQuery({ query: "(min-width: 1060px)" });
  return (
    <section id="projects" className="pt-2 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32 md:flex-col">
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

          <p className="text-2xl md:w-[1000px]">
            A Selection Of Stuff I've Built
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
