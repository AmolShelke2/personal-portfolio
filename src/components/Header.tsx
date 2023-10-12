import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <header
      className="bg-white shadow-lg h-[80px] lg:h-[100px] fixed top-0 left-0 w-full flex flex-col
     lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-0 lg:px-32">
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

        <h1
          className="text-black text-xl lg:text-2xl mx-4 uppercase font-semibold 
        tracking-wide">
          Amol Shelke
        </h1>
      </div>

      <div className="w-full lg:w-1/4 mr-8 flex">
        <ul
          className={`${
            isNavActive ? "flex  transition-all duration-150" : "hidden"
          } lg:flex flex-col lg:flex-row justify-around w-full bg-slate-100 lg:bg-white`}>
          <Link
            href={"#home"}
            className="text-lg font-medium px-4 py-4 lg:py-0 tracking-wide border-b-2 lg:border-none">
            Home
          </Link>
          <Link
            href={"#about"}
            className="text-lg font-medium px-4 py-4 lg:py-0 tracking-wide border-b-2 lg:border-none">
            About
          </Link>
          <Link
            href={"#projects"}
            className="text-lg font-medium px-4 py-4 lg:py-0 tracking-wide border-b-2 lg:border-none">
            Projects
          </Link>
          <Link
            href={"#blogs"}
            className="text-lg font-medium px-4 py-4 lg:py-0 border-b-2 lg:border-none tracking-wide">
            Blogs
          </Link>
          <Link
            href={"#contact"}
            className="text-xl font-medium px-4 py-4 lg:py-0 border-b-2 lg:border-none tracking-wide">
            Contact
          </Link>
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
