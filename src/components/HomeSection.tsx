import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const HomeSection: React.FC = () => {
  return (
    <div className="h-screen my-12 bg-home" id="home">
      <div
        className="max-w-[1440px] h-full flex flex-col-reverse gap-8 lg:gap-6 sm:flex-row justify-center sm:justify-between 
      items-center mx-auto px-4 lg:px-0">
        <div className="w-full sm:w-1/2">
          <h1 className="text-black p-2 text-3xl lg:text-[56px] lg:p-8 font-semibold uppercase mb-5 text-center sm:text-start lg:leading-[70px]">
            Hey there, <br /> I&apos;m
            <span className=" text-blue-500 font-bold"> Amol Shelke</span>
          </h1>
          <p className="text-center text-xl font-medium text-gray-600 capitalize tracking-wider sm:hidden">
            Software engineer based in India
          </p>
        </div>

        <div className="w-full sm:w-1/2">
          <Image
            src={"/images/hero-image.png"}
            alt="hero-image"
            height={500}
            width={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
