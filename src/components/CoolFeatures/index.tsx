import React from "react";
import { motion } from "framer-motion";
import { sectionVariants, itemVariants } from "../../utils/helpers";
import SimpleForwardButton from "../SimpleForwardButton";

const CoolFeatures: React.FC = () => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.div
      className="flex flex-col gap-6 max-w-3xl mx-auto px-4"
      variants={sectionVariants}
    >
      <motion.h1 className="text-2xl font-bold" variants={itemVariants}>
        All the cool{" "}
        <span className="relative inline-block">
          <span className="relative z-10">features</span>
          <img
            src="/vector.svg"
            alt="sublinha teach"
            className="absolute inset-x-0 bottom-[-5px] w-full h-auto pointer-events-none -z-10"
          />
        </span>
      </motion.h1>
      <motion.p variants={itemVariants}>
        Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In
        et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque
        feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a,
        neque orci.
      </motion.p>
      <motion.div variants={itemVariants}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SimpleForwardButton text="View all the features" />
        </motion.div>
      </motion.div>
    </motion.div>

    <motion.img
      src="/cool-features.svg"
      alt="cool features graphic"
      className="mt-12 w-full object-cover"
      variants={itemVariants}
      transition={{ delay: 0.4, duration: 0.8 }}
    />
  </motion.section>
);

export default CoolFeatures;
