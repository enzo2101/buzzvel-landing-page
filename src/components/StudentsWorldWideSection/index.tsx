import React from "react";
import { motion } from "framer-motion";
import { CirclePlay } from "lucide-react";

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

const StudentsWorldWideSection: React.FC = () => (
  <motion.section
    className="flex flex-col gap-6 px-4 mb-12"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
      <span className="relative inline-block">
        <span className="relative z-10">Teach</span>
        <img
          src="/vector.svg"
          alt="sublinha teach"
          className="absolute inset-x-0 bottom-[-5px] w-full h-auto pointer-events-none -z-10"
        />
      </span>{" "}
      students worldwide
    </motion.h1>
    <motion.p variants={itemVariants}>
      Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
      tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
      ultricies.
    </motion.p>
    <motion.div className="flex gap-6" variants={itemVariants}>
      <motion.button
        className="relative overflow-hidden group bg-orange-600 text-white font-medium rounded-lg py-3 px-7"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Sign Up Now
      </motion.button>
      <motion.button
        className="relative overflow-hidden group rounded-lg text-blue-600 font-medium py-3 px-7 flex gap-4 items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <CirclePlay />
        <span>View Demo</span>
      </motion.button>
    </motion.div>
    <motion.div className="flex gap-4 flex-col" variants={itemVariants}>
      <motion.p className="text-gray-600">
        Trusted by leading companies
      </motion.p>
      <motion.div className="flex gap-6">
        <img src="/icons3.svg" />
        <img src="/icons2.svg" />
        <img src="/icons4.svg" />
        <img src="/icons5.svg" />
        <img src="/icons1.svg" />
      </motion.div>
    </motion.div>
    <img
      src="/student-teacher-talk.svg"
      alt="Teacher and student talking by message"
    />
  </motion.section>
);

export default StudentsWorldWideSection;
