import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const Contact: React.FC = () => {
  return (
    <div
      className="w-full lg:max-w-[1440px] xl:mx-auto h-auto mt-12 lg:h-[600px] flex flex-col items-center shadow-lg"
      id="contact">
      <h2 className="text-center underline text-3xl lg:text-5xl font-extrabold capitalize my-5 text-gray-700 py-4">
        Contact me
      </h2>

      <div className="flex flex-col-reverse sm:flex-row justify-center lg:justify-around  items-center lg:items-start h-full w-full lg:h-3/4 lg:w-2/3 shadow-lg">
        <div className="w-full lg:w-1/2 h-full p-5">
          <div className="my-4 py-4 mr-5">
            <h3 className="text-xl font-bold mb-4 text-blue-500">Email</h3>
            <p className="text-gray-600 font-normal text-lg">
              shelkeamol897@gmail.com
            </p>
          </div>
          <div className="my-4 py-4">
            <h3 className="text-xl font-bold mb-4 text-blue-500">Address</h3>
            <p className="text-gray-600 font-normal text-lg">
              Nagpur, Maharashtra India
            </p>
          </div>

          <div className="my-4 py-4">
            <h3 className="text-blue-500 font-bold text-xl">Socials</h3>
            <div className="flex gap-4 py-4 mt-2 sm:border-none">
              <Link
                href="https://www.linkedin.com/in/amol-shelke-627813220/"
                target="_blank">
                <AiFillLinkedin size={28} className="text-gray-500" />
              </Link>
              <Link href="https://twitter.com/amol_shelke09" target="_blank">
                <AiFillTwitterSquare size={28} className="text-gray-500" />
              </Link>

              <Link href="mailto:shelkeamol897@gmail.com">
                <AiFillMail size={28} className="text-gray-500" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center lg:w-1/2 h-full">
          <Image
            src={"/images/hero-image.png"}
            height={400}
            width={400}
            alt="contact"
            className="sm:h-full sm:w-full"
          />
        </div>
      </div>
    </div>
  );
};
