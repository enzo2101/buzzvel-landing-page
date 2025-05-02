import React from "react";
import {
  ColorLogo,
  FooterCategories,
  FooterCategoriesMap,
} from "../../utils/enums";
import List from "./List";
import { Globe, PersonStanding } from "lucide-react";
import Logo from "../Header/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 px-6">
      <Logo color={ColorLogo.WHITE} className="mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {Object.values(FooterCategories).map((category) => {
          const linksMap = FooterCategoriesMap[category as FooterCategories];
          const links = Object.values(linksMap).map((item) =>
            typeof item === "string"
              ? { name: item }
              : { name: item.name, isBeta: item.isBeta }
          );
          return <List key={category} title={category} links={links} />;
        })}
      </div>
      <div className="border-t border-gray-500 mt-12 py-6 flex flex-col gap-6">
        <p className="text-gray-200">uteach @ 2023. All rights reserved.</p>
        <ul className="text-gray-200 flex justify-between">
          <li>Terms</li>
          <li>Privacy</li>
          <li className="flex gap-2">
            <Globe />
            <span>EN</span>
          </li>
          <li>EUR</li>
          <li>
            <PersonStanding />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
