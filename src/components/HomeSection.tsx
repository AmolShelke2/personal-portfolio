import Link from "next/link";
import React from "react";

export const HomeSection: React.FC = () => {
  return (
    <div className="h-screen mb-8 bg-home" id="home">
      <div className="max-w-[1440px] h-full flex flex-col justify-center items-center mx-auto px-4 lg:px-0">
        <h2 className="text-black text-2xl p-2 lg:text-[56px] lg:p-8 font-extrabold uppercase tracking-wide mb-5 lg:w-3/4 text-center">
          Hey there, I&apos;m Amol Shelke
        </h2>
        <p className="lg:w-2/4 text-lg w-full sm:w-[70%] lg:text-xl lg:leading-9 text-center mb-10">
          A Frontend developer building user interfaces with Nextjs, Reactjs and
          Tailwind CSS. Which leads the success of overall product.
        </p>

        <Link href={"#projects"}>
          <button
            className="bg-[#e13019] text-white px-24 text-xl tracking-wider font-bold
            py-6 rounded-md">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};
