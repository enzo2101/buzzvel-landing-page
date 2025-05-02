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

const studentBubbleVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const teacherBubbleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
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
    <div>
      <motion.div
        className="flex justify-end relative mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col gap-2 absolute left-[25%] items-end"
          variants={containerVariants}
        >
          <motion.p
            className="rounded-2xl rounded-br-sm px-4 py-2 shadow-sm shadow-black/20 bg-white w-fit"
            variants={studentBubbleVariants}
          >
            Nunc, at libero neque
          </motion.p>
          <motion.p
            className="rounded-2xl rounded-br-sm px-4 py-2 shadow-sm shadow-black/20 bg-white w-fit"
            variants={studentBubbleVariants}
          >
            Viverra sed
          </motion.p>
        </motion.div>
        <img src="/student.svg" alt="student-image" />
      </motion.div>
      <motion.div
        className="flex relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <img src="/teacher.svg" alt="teacher-image" />
        <motion.div
          className="flex flex-col gap-2 absolute right-[23%] items-start"
          variants={containerVariants}
        >
          <motion.p
            className="rounded-2xl rounded-bl-sm bg-gray-700 px-4 py-2 text-white w-fit"
            variants={teacherBubbleVariants}
          >
            Turpis platea nunc mattis
          </motion.p>
          <motion.p
            className="rounded-2xl rounded-bl-sm bg-gray-700 px-4 py-2 text-white w-fit"
            variants={teacherBubbleVariants}
          >
            Vitae viverra ut non
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
);

export default StudentsWorldWideSection;
