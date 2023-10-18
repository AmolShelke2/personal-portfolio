import Link from "next/link";
import { SpecificSkill } from "./re-usable/SpecificSkill";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const About: React.FC = () => {
  return (
    <div
      className="w-full lg:max-w-[1440px] xl:mx-auto h-auto lg:h-[780px] shadow-md"
      id="about">
      <h2 className="text-center underline text-5xl font-extrabold capitalize my-5 py-4 text-gray-700">
        About me
      </h2>
      <div className="flex flex-col lg:flex-row justify-center mt-20">
        <div className="w-full lg:w-1/2 px-6 py-5">
          <h3 className="text-black text-2xl font-medium mb-5 capitalize">
            A frontend developer
          </h3>
          <p className="text-lg lg:text-xl text-gray-600 mb-4 w-full lg:w-[90%] lg:leading-9">
            Hey There I&apos;m Amol Shelke a frontend developer based in India.
            With experience in working with technologies like HTML, CSS,
            JavaScript, Reactjs, nextjs and Tailwind CSS. With a focus of
            creating delightful user interfaces. <br />I have been learning and
            building frontend and UI from past 1.5 years, In this period of time
            I did two tech internships and worked with some good companies, {""}
            <span className="text-black font-bold">@skilzen</span> and{" "}
            <span className="text-black font-bold">@codedamn</span>
          </p>
          <div className="flex gap-4 py-4 border-b-2 mt-4 sm:border-none">
            <Link
              href="https://www.linkedin.com/in/amol-shelke-627813220/"
              target="_blank">
              <AiFillLinkedin size={28} />
            </Link>
            <Link href="https://twitter.com/amol_shelke09" target="_blank">
              <AiFillTwitterSquare size={28} />
            </Link>
            <Link href="https://github.com/AmolShelke2" target="_blank">
              <AiFillGithub size={28} />
            </Link>
            <Link href="mailto:shelkeamol897@gmail.com">
              <AiFillMail size={28} />
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-6 py-5">
          <h3 className="text-black text-2xl font-medium mb-5 capitalize">
            Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <SpecificSkill skill="HTML" />
            <SpecificSkill skill="CSS" />
            <SpecificSkill skill="JavaScript" />
            <SpecificSkill skill="TypeScript" />
            <SpecificSkill skill="React.js" />
            <SpecificSkill skill="Next.js" />
            <SpecificSkill skill="Tailwind CSS" />
            <SpecificSkill skill="Git" />
            <SpecificSkill skill="Github" />
            <SpecificSkill skill="VS code" />
            <SpecificSkill skill="Responsive web designs" />
          </div>
        </div>
      </div>
    </div>
  );
};
