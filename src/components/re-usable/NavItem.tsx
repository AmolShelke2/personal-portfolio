import React from "react";
import { Link } from "react-scroll";

interface navItemProps {
  link: string;
  title: string;
}

export const NavItem: React.FC<navItemProps> = ({ link, title }) => {
  return (
    <Link
      to={link}
      className="text-lg cursor-pointer font-medium px-4 py-4 lg:py-0 tracking-wide border-b-2 lg:border-none">
      {title}
    </Link>
  );
};
