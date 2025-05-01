import React from "react";
import { cn } from "../../../utils/cn";

interface ButtonsProps {
  className?: string;
}

const Buttons: React.FC<ButtonsProps> = ({ className }) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <button className="relative inline-flex items-center justify-center py-3 px-2 overflow-hidden font-medium transition duration-300 ease-out rounded-lg group hover:cursor-pointer">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
          Log In
        </span>
        <span className="relative invisible">Log In</span>
      </button>
      <button className="relative overflow-hidden group border-2 rounded-lg py-3 px-7 hover:cursor-pointer">
        <span
          className="
            absolute inset-0 
            bg-black 
            transform -translate-x-full 
            group-hover:translate-x-0 
            transition-transform duration-300 ease-out
          "
        />
        <span
          className="
            relative z-10 
            text-black 
            group-hover:text-white 
            transition-colors duration-300
          "
        >
          Sign Up Now
        </span>
      </button>
    </div>
  );
};

export default Buttons;
