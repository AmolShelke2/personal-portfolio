import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header
      className="bg-white shadow-lg h-[90px] 
    fixed top-0 left-0 w-full flex flex-row justify-between items-center px-32">
      <div className="flex items-center">
        <div className="h-[60px] w-[60px]">
          <Image
            src={"/images/logo.jpg"}
            height={100}
            width={100}
            alt="logo"
            className=" rounded-full"
          />
        </div>

        <h1
          className="text-black text-2xl mx-4 uppercase font-semibold 
        tracking-wide">
          Amol Shelke
        </h1>
      </div>

      <div className=" w-1/4 mr-8 flex">
        <ul className="flex justify-around w-full">
          <Link
            href={"#home"}
            className="text-lg font-medium px-4 tracking-wide">
            Home
          </Link>
          <Link
            href={"#about"}
            className="text-lg font-medium px-4 tracking-wide">
            About
          </Link>
          <Link
            href={"#projects"}
            className="text-lg font-medium px-4 tracking-wide">
            Projects
          </Link>
          <Link
            href={"#blogs"}
            className="text-lg font-medium px-4 tracking-wide">
            Blogs
          </Link>
          <Link
            href={"#contact"}
            className="text-xl font-medium px-4 tracking-wide">
            Contact
          </Link>
        </ul>
      </div>
    </header>
  );
};
