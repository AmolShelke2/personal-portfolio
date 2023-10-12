import Link from "next/link";
import React from "react";

interface navItemProps {
  link: string;
  title: string;
}

export const NavItem: React.FC<navItemProps> = ({ link, title }) => {
  return (
    <Link
      href={link}
      className="text-lg font-medium px-4 py-4 lg:py-0 tracking-wide border-b-2 lg:border-none">
      {title}
    </Link>
  );
};
