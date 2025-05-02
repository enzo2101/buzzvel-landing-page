import React from "react";

interface ListProps {
  title: string;
  links: Array<{ name: string; isBeta?: boolean }>;
}

const List: React.FC<ListProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-white font-medium mb-4">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.name} className="text-white">
            <a href="#\">{link.name}</a>
            {link.isBeta && (
              <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-1 rounded">
                Beta
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
