import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../../utils/helpers";
import List from "./List";
import SimpleForwardButton from "../SimpleForwardButton";

const AllInOneSection: React.FC = () => {
  return (
    <motion.section
      className="lg:flex lg:items-center lg:justify-between lg:px-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-6 lg:gap-8">
        <motion.h1 className="text-4xl font-bold px-4 lg:text-5xl lg:max-w-[545px]">
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
        <List
          listItems={[
            "Est et in pharetra magna adipiscing ornare aliquam.",
            "Tellus arcu sed consequat ac velit ut eu blandit.",
            "Ullamcorper ornare in et egestas dolor orci.",
          ]}
        />
        <div className="flex flex-col gap-8 relative px-4">
          <SimpleForwardButton text="Find more about the app" />
        </div>
      </div>
      <div className="flex items-center">
        <img src="/desktop-pc.svg" alt="" className="hidden lg:block" />
        <img src="/desktop.svg" alt="" className="lg:hidden" />
      </div>
    </motion.section>
  );
};

export default AllInOneSection;
