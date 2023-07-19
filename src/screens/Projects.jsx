import { motion } from "framer-motion";
import JavaBankApp from "../projects/JavaBankApp";
import ReactChatApp from "../projects/ReactChatApp";
import FitnessApp from "../projects/FitnessApp";
import ChatAppV2 from "../projects/ChatAppV2";
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="pt-2 pb-24 ">
      <div className="flex flex-col px-3 flex-wrap md:flex md:justify-between gap-10 md:gap-14 mt-32 md:flex-col md:mb-0">
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
        <ChatAppV2 />
        <ReactChatApp />
        <FitnessApp />
        <JavaBankApp />
      </div>
    </section>
  );
};

export default Projects;
