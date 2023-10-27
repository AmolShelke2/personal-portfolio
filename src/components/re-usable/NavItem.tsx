import React from "react";
import { Link } from "react-scroll";

interface navItemProps {
  link: string;
  title: string;
  isActive: boolean;
  handleNav: Function;
}

export const NavItem: React.FC<navItemProps> = ({
  link,
  title,
  isActive,
  handleNav,
}) => {
  return (
    <Link
      onClick={() => handleNav(!isActive)}
      to={link}
      className="text-lg cursor-pointer font-medium px-4 py-4 lg:py-0 tracking-wide border-b-2 lg:border-none">
      {title}
    </Link>
  );
};
