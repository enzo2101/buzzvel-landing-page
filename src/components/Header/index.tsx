import React from "react";
import Buttons from "./Buttons";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { ColorLogo } from "../../utils/enums";

const Header: React.FC = () => {
  return (
    <header className="bg-white py-6 md:px-20 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 bg-amber-300">
          <Logo color={ColorLogo.BLACK} />
          <ul className="hidden md:flex items-center gap-12 text-gray-700">
            <li className="hover:text-black cursor-pointer">Products</li>
            <li className="hover:text-black cursor-pointer">Solution</li>
            <li className="hover:text-black cursor-pointer">Pricing</li>
            <li className="hover:text-black cursor-pointer">Resources</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Buttons className="hidden lg:flex" />
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
