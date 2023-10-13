import { SpecificSkill } from "./re-usable/SpecificSkill";

export const About: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-[600px]" id="about">
      <h2 className="text-center underline text-5xl font-extrabold capitalize my-5 text-gray-700">
        About me
      </h2>
      <div className="flex flex-row justify-center mt-20">
        <div className="w-1/2 px-6 py-5">
          <h3 className="text-black text-2xl font-medium mb-5 capitalize">
            A frontend developer
          </h3>
          <p className="text-xl text-gray-600 leading-9">
            Hey There I&apos;m Amol Shelke a frontend developer based in India.
            With experience in working with technologies like HTML, CSS,
            JavaScript, Reactjs, nextjs and Tailwind CSS. With a focus of
            creating delightful user interfaces. <br />I have been learning and
            building frontend and UI from past 1.5 years, In this period of time
            I did two tech internships and worked with some good companies, {""}
            <span>@skilzen</span> and <span>@codedamn</span>
            <div>{/* social links */}</div>
          </p>
        </div>
        <div className="w-1/2 px-6 py-5">
          <h3 className="text-black text-2xl font-medium mb-5 capitalize">
            Skills
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <SpecificSkill skill="HTML" />
            <SpecificSkill skill="CSS" />
            <SpecificSkill skill="JavaScript" />
            <SpecificSkill skill="TypeScript" />
            <SpecificSkill skill="React.js" />
            <SpecificSkill skill="Next.js" />
            <SpecificSkill skill="Tailwind CSS" />
            <SpecificSkill skill="Git" />
            <SpecificSkill skill="Github" />
          </div>
        </div>
      </div>
    </div>
  );
};
