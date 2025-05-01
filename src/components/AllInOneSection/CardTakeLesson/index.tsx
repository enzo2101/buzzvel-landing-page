import React from "react";
import { motion } from "framer-motion";
import { CardsTakeLessonTypes } from "../../../utils/enums";
import { cn } from "../../../utils/cn";
import { itemVariants } from "../../../utils/helpers";

interface Lesson {
  type: CardsTakeLessonTypes;
  title: string;
  description: string;
}

interface CardTakeLessonProps {
  cards: Array<Lesson>;
}

const CardTakeLesson: React.FC<CardTakeLessonProps> = ({ cards }) => {
  return (
    <>
      {cards.map(({ type, title, description }) => (
        <motion.div
          className="bg-white p-4 max-w-40 rounded-[10px]"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p
                className={cn(" w-fit px-1 py-0.5 rounded-sm", {
                  "text-purple-800 bg-purple-800/20":
                    type === CardsTakeLessonTypes.FEATURED,
                  "text-blue-800 bg-blue-800/20":
                    type === CardsTakeLessonTypes.POPULAR,
                })}
              >
                {type}
              </p>
              <h1 className="font-medium">{title}</h1>
              <p className="text-gray-600">{description}</p>
            </div>
            <button className="border-2 border-blue-600 text-blue-600 rounded-lg py-2 px-6 text-sm">
              Take Lesson
            </button>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default CardTakeLesson;
