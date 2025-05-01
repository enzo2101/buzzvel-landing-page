import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { itemVariants } from "../../../utils/helpers";

interface ListProps {
  listItems: Array<string>;
}

const List: React.FC<ListProps> = ({ listItems }) => {
  return (
    <motion.ul className="flex flex-col gap-4" variants={itemVariants}>
      {listItems.map((item) => (
        <motion.li className="flex gap-2" variants={itemVariants}>
          <Check className="size-6" />
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default List;
