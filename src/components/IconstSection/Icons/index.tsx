import React from "react";
import { motion } from "framer-motion";

interface IconsProps {
  icons: Array<{ imgPath: string; value: string; label: string }>;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Icons: React.FC<IconsProps> = ({ icons }) => {
  return (
    <motion.div
      className="flex flex-col gap-12 justify-center items-center lg:justify-evenly w-full lg:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {icons.map(({ imgPath, value, label }) => (
        <motion.div
          key={label}
          className="flex flex-col gap-2 items-center"
          variants={iconVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={imgPath} alt={label} className="w-16 h-16" />
          <h3 className="text-5xl font-extrabold text-yellow-400">{value}</h3>
          <p className="text-yellow-400">{label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Icons;
