import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "react-responsive";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImage from "../assets/profile-image.jpg";
import pdf from "../assets/KevinSamsonResume.pdf";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="flex flex-col flex-wrap md:flex md:justify-between gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2"
      >
        {/* PROFILE IMAGE */}
        <img
          alt="profile"
          className="z-10 w-96  h-96 max-w-[400px] md:max-w-[600px] object-cover rounded-full shadow-2xl"
          src={ProfileImage}
        />
      </motion.div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-popins z-10 text-center md:text-start md:w-[600px]">
            Hey, I'm <br></br>
            <span className="text-blue font-extrabold text-7xl ">
              Kevin Samson
            </span>
          </p>

          <p className="mt-10 mb-7 text-lg text-center md:text-start font-roboto">
            I love building beautiful interfaces, web apps, and everything in
            between!🚀
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start space-x-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 font-roboto"
            onClick={() => setSelectedPage("skills")}
            href="#skills"
          >
            My Skills
          </AnchorLink>
          <a
            className="rounded-sm bg-gradient-rainblue py-0.5 px-1"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-deep-blue font-roboto hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-semibold">
              Résumé
            </div>
          </a>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
