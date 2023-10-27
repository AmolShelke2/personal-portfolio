import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavItem } from "./re-usable/NavItem";

export const Header: React.FC = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <header
      className="bg-white shadow-lg h-[80px] lg:h-[100px] fixed top-0 left-0 w-full flex flex-col
     lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0 lg:px-32 z-50">
      <div className="flex items-center">
        <div className="h-[60px] w-[60px] mt-2 lg:mt-0">
          <Image
            src={"/images/logo.jpg"}
            height={100}
            width={100}
            alt="logo"
            className=" rounded-full"
          />
        </div>

        <h1 className="text-black text-xl lg:text-2xl mx-4 capitalize font-semibold heading">
          Amol Shelke
        </h1>
      </div>

      <div className="w-full lg:w-1/4 mr-8 flex">
        <ul
          className={`${
            isNavActive ? "flex  transition-all duration-150" : "hidden"
          } lg:flex flex-col lg:flex-row justify-around w-full bg-slate-100 lg:bg-white`}>
          <NavItem
            link={"home"}
            title={"Home"}
            handleNav={setIsNavActive}
            isActive={isNavActive}
          />
          <NavItem
            link={"about"}
            title={"About"}
            handleNav={setIsNavActive}
            isActive={isNavActive}
          />
          <NavItem
            link={"projects"}
            title={"Projects"}
            handleNav={setIsNavActive}
            isActive={isNavActive}
          />
          <NavItem
            link={"blogs"}
            title={"Blogs"}
            handleNav={setIsNavActive}
            isActive={isNavActive}
          />
          <NavItem
            link={"contact"}
            title={"Contact"}
            handleNav={setIsNavActive}
            isActive={isNavActive}
          />
        </ul>
      </div>

      <div
        className="block lg:hidden absolute right-4 top-5 cursor-pointer"
        onClick={() => setIsNavActive(!isNavActive)}>
        <AiOutlineMenu size={25} />
      </div>
    </header>
  );
};
