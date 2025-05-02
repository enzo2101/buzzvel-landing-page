import React from "react";
import { motion } from "framer-motion";
import { sectionVariants, itemVariants } from "../../utils/helpers";

const JoinWorldSection: React.FC = () => {
  return (
    <motion.section
      className="from-yellow-200 to-yellow-400 bg-gradient-to-b p-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.img
        src="/round-top.svg"
        alt="decorative top"
        className="w-full"
        variants={itemVariants}
      />
      <motion.div
        className="flex flex-col justify-center items-center text-center gap-6 py-8"
        variants={itemVariants}
      >
        <motion.h1 className="text-2xl font-bold" variants={itemVariants}>
          Join a world of learning
        </motion.h1>
        <motion.p className="text-gray-800" variants={itemVariants}>
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
          elit et fringilla habitant ut facilisi.
        </motion.p>
        <motion.button
          className="relative overflow-hidden group bg-orange-600 text-white font-medium rounded-lg py-3 px-7 w-fit"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Sign Up Now
        </motion.button>
      </motion.div>
      <motion.img
        src="/round-bottom.svg"
        alt="decorative bottom"
        className="w-full"
        variants={itemVariants}
      />
    </motion.section>
  );
};

export default JoinWorldSection;
