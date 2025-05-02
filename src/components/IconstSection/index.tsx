import React from "react";
import { motion } from "framer-motion";
import Icons from "./Icons";
import { sectionVariants } from "../../utils/helpers";

const IconstSection: React.FC = () => {
  return (
    <motion.div
      className="bg-gray-900 flex flex-col justify-center items-center py-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Icons
        icons={[
          {
            imgPath: "heart-circle-sharp.svg",
            value: "195",
            label: "user countries",
          },
          {
            imgPath: "diamond.svg",
            value: "1M",
            label: "valued teachers",
          },
          {
            imgPath: "school.svg",
            value: "17M",
            label: "happy students",
          },
        ]}
      />
    </motion.div>
  );
};

export default IconstSection;
