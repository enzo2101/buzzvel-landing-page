import React from "react";
import { motion } from "framer-motion";
import { sectionVariants, itemVariants } from "../../utils/helpers";
import List from "./List";
import CardTakeLesson from "./CardTakeLesson";
import { CardsTakeLessonTypes } from "../../utils/enums";
import SimpleForwardButton from "../SimpleForwardButton";

const AllInOneSection: React.FC = () => {
  return (
    <motion.section
      className="flex flex-col gap-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 className="text-4xl font-bold px-4">
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
      <motion.p variants={itemVariants} className="px-4">
        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
        suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
        amet, dui sit suspendisse.
      </motion.p>
      <List
        listItems={[
          "Est et in pharetra magna adipiscing ornare aliquam.",
          "Tellus arcu sed consequat ac velit ut eu blandit.",
          "Ullamcorper ornare in et egestas dolor orci.",
        ]}
      />
      <div className="flex flex-col gap-8 relative px-4">
        <SimpleForwardButton text="Find more about the app" />
        <img
          src="/stars.svg"
          alt="stars-effect"
          className="w-40 h-[520px] absolute right-1/2"
        />
      </div>
      <div className="relative mb-52">
        <motion.div className="flex relative mt-8" variants={itemVariants}>
          <motion.img
            src="/desktop.svg"
            alt="play-video-template"
            className="absolute top-[-10%]"
            variants={itemVariants}
          />
          <motion.img src="/blob.svg" alt="" className="" />
        </motion.div>
        <div className="absolute bottom-[-55%] right-5 flex gap-4">
          <CardTakeLesson
            cards={[
              {
                type: CardsTakeLessonTypes.FEATURED,
                title: "The map of mathematics",
                description:
                  "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
              },
              {
                type: CardsTakeLessonTypes.POPULAR,
                title: "Design for how people think",
                description:
                  "Aliquam ut euismod condimentum elementum ultricies volutpat sit non. ",
              },
            ]}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AllInOneSection;
