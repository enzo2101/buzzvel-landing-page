import React from "react";
import { motion } from "framer-motion";
import { itemVariants, sectionVariants } from "../../utils/helpers";
import { useMediaQuery } from "react-responsive";
import { LapTopMediaQuery } from "../../utils/constants";

const ThirdSection: React.FC = () => {
  const isLapTop = useMediaQuery({ query: LapTopMediaQuery });

  return (
    <motion.section
      className="relative bg-yellow-400 pt-12 flex flex-col h-[684px] lg:h-[575px] overflow-visible my-12 lg:flex-row lg:px-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <motion.div
          className="flex flex-col justify-between items-start h-full px-6 lg:px-0 lg:justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col gap-4 lg:max-w-[528px]"
            variants={itemVariants}
          >
            <motion.p className="text-lg" variants={itemVariants}>
              Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu
              mattis est velit in. Nibh in purus sit convallis phasellus ut. At
              vel erat ultricies commodo. Neque suspendisse a habitasse commodo.
            </motion.p>
            <motion.p className="text-lg" variants={itemVariants}>
              Marie Poirot, Bigapp
            </motion.p>
          </motion.div>
          <motion.img
            src="/slider-cues.svg"
            alt="slider cues"
            className="mt-12"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
      <motion.div className="mt-auto" variants={itemVariants}>
        <motion.img
          src={isLapTop ? "/third-image2.svg" : "/third-image.svg"}
          alt="student photo"
          className={
            isLapTop ? "absolute bottom-[-80px] right-40 z-50" : "mx-auto z-50"
          }
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
