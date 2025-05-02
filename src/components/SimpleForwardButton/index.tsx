import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SimpleForwardButtonProps {
  text: string;
}

const SimpleForwardButton: React.FC<SimpleForwardButtonProps> = ({ text }) => {
  return (
    <motion.button className="flex gap-4 text-center items-center text-blue-600">
      <span className="font-medium">{text}</span>
      <ArrowRight className="size-4" />
    </motion.button>
  );
};

export default SimpleForwardButton;
