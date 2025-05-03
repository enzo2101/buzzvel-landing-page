import React from "react";
import { motion } from "framer-motion";
import { sectionVariants, itemVariants } from "../../utils/helpers";
import { useMediaQuery } from "react-responsive";

const JoinWorldSection: React.FC = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  const topSrc = isLaptop ? "/round-top-desktop.svg" : "/round-top.svg";
  const bottomSrc = isLaptop
    ? "/round-bottom-desktop.svg"
    : "/round-bottom.svg";

  return (
    <motion.section
      className="
        bg-gradient-to-b from-yellow-200 to-yellow-400
        p-4
        lg:flex lg:items-center lg:justify-center
      "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.img
        src={topSrc}
        alt="decorative top"
        className="w-full lg:w-auto"
        variants={itemVariants}
      />
      <motion.div
        className="
          flex flex-col
          justify-center items-center
          text-center gap-6
          py-8 px-4 lg:px-12
        "
        variants={itemVariants}
      >
        <motion.h1
          className="text-2xl lg:text-4xl font-bold"
          variants={itemVariants}
        >
          Join a world of learning
        </motion.h1>
        <motion.p
          className="text-gray-800 text-base lg:text-lg"
          variants={itemVariants}
        >
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
          elit et fringilla habitant ut facilisi.
        </motion.p>
        <motion.button
          className="
            relative overflow-hidden group
            bg-orange-600 text-white font-medium
            rounded-lg py-3 px-7 w-fit
          "
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Sign Up Now
        </motion.button>
      </motion.div>
      <motion.img
        src={bottomSrc}
        alt="decorative bottom"
        className="w-full lg:w-auto"
        variants={itemVariants}
      />
    </motion.section>
  );
};

export default JoinWorldSection;
