import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const AllInOneSection: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="flex flex-col gap-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 className="text-4xl font-bold">
        An{" "}
        <span className="relative inline-block">
          <span className="relative z-10">all-in-one</span>
          <img
            src="/vector-section-2.svg"
            alt="sublinha teach"
            className="absolute inset-x-0 bottom-[-5px] w-full h-auto pointer-events-none -z-10"
          />
        </span>{" "}
        app that makes it easier
      </motion.h1>
      <motion.p variants={itemVariants}>
        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
        suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
        amet, dui sit suspendisse.
      </motion.p>
      <div className="flex flex-col gap-8 relative">
        <motion.ul className="flex flex-col gap-4" variants={itemVariants}>
          <motion.li className="flex gap-2" variants={itemVariants}>
            <Check className="size-6" />
            Est et in pharetra magna adipiscing ornare aliquam.
          </motion.li>
          <motion.li className="flex gap-2" variants={itemVariants}>
            <Check className="size-6" />
            Tellus arcu sed consequat ac velit ut eu blandit.
          </motion.li>
          <motion.li className="flex gap-2" variants={itemVariants}>
            <Check className="size-6" />
            Ullamcorper ornare in et egestas dolor orci.
          </motion.li>
        </motion.ul>
        <motion.button className="flex gap-4 text-center items-center text-blue-600">
          <span className="font-medium">Find more about the app</span>
          <ArrowRight className="size-4" />
        </motion.button>
        <img
          src="/stars.svg"
          alt=""
          className="w-40 h-[520px] absolute right-1/2"
        />
      </div>
    </motion.section>
  );
};

export default AllInOneSection;
