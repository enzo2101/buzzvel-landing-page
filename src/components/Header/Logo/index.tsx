import React from "react";
import { ColorLogo } from "../../../utils/enums";
import { cn } from "../../../utils/cn";

interface LogoProps {
  color: ColorLogo;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color, className }) => {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {color === ColorLogo.WHITE ? (
        <img src="/logo-white.svg" alt="Logo white" className="h-8" />
      ) : (
        <img src="/logo-black.svg" alt="Logo black" className="h-8" />
      )}
      <h1
        className={cn("text-white text-3xl font-bold", {
          "text-white": color === ColorLogo.WHITE,
          "text-black": color === ColorLogo.BLACK,
        })}
      >
        teach
      </h1>
    </div>
  );
};

export default Logo;
