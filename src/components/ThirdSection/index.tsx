import React from "react";
import { motion } from "framer-motion";
import { itemVariants, sectionVariants } from "../../utils/helpers";

const ThirdSection: React.FC = () => {
  return (
    <motion.section
      className="bg-yellow-400 pt-12 flex flex-col h-[684px] overflow-hidden my-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="flex flex-col justify-between items-start h-full px-6"
        variants={itemVariants}
      >
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <motion.p className="text-lg" variants={itemVariants}>
            Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
            est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
            ultricies commodo. Neque suspendisse a habitasse commodo.
          </motion.p>
          <motion.p className="text-lg" variants={itemVariants}>
            Marie Poirot, Bigapp
          </motion.p>
        </motion.div>
        <motion.img
          src="/slider-cues.svg"
          alt="slider cues"
          className="mt-12 w-24"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
      <motion.div className="mt-auto" variants={itemVariants}>
        <motion.img
          src="/third-image.svg"
          alt="student photo"
          className="mx-auto z-50"
          variants={itemVariants}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
        />
      </motion.div>
    </motion.section>
  );
};

export default ThirdSection;
