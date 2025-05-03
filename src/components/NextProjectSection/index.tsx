import React from "react";
import { motion } from "framer-motion";
import { sectionVariants, itemVariants } from "../../utils/helpers";

const NextProjectSection: React.FC = () => {
  return (
    <motion.section
      className="bg-orange-600 py-12 px-4 text-white flex flex-col gap-8 lg:items-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="flex flex-col gap-8 text-center"
        variants={itemVariants}
      >
        <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
          Ready for your next project?
        </motion.h1>
        <motion.h2 className="text-lg" variants={itemVariants}>
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </motion.h2>
      </motion.div>
      <motion.div
        className="flex flex-col gap-5 lg:min-w-[550px]"
        variants={itemVariants}
      >
        <label htmlFor="Email" className="text-lg">
          Email
        </label>
        <motion.input
          type="text"
          id="Email"
          className="bg-white w-full rounded-xl placeholder:text-gray-400 p-4"
          placeholder="Enter your email"
          variants={itemVariants}
        />
      </motion.div>
      <motion.div
        className="flex flex-col gap-5 lg:min-w-[550px]"
        variants={itemVariants}
      >
        <label htmlFor="Message" className="text-lg">
          Message
        </label>
        <motion.textarea
          id="Message"
          className="bg-white w-full rounded-xl placeholder:text-gray-400 p-4"
          placeholder="What are you say?"
          rows={4}
          variants={itemVariants}
        />
      </motion.div>
      <motion.div className="flex justify-center" variants={itemVariants}>
        <motion.button
          className="relative overflow-hidden group bg-gray-900 text-white font-medium rounded-lg py-3 px-7 w-fit"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={itemVariants}
        >
          Request Demo
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default NextProjectSection;
