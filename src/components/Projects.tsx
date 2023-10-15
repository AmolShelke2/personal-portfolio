import Image from "next/image";
import Link from "next/link";

export const Projects: React.FC = () => {
  return (
    <div
      className="w-full lg:max-w-[1440px] xl:mx-auto h-auto lg:h-[780px] mt-12"
      id="projects">
      <h2 className="text-center underline text-3xl lg:text-5xl font-extrabold capitalize my-5 text-gray-700 py-4">
        Projects
      </h2>
      <div className="h-full lg:h-[650px] bg-[#f8fafc] flex flex-col-reverse lg:flex-row justify-between gap-4 items-center py-4 my-4 shadow-md px-5">
        <div className="w-full lg:w-1/2">
          <h3 className="text-[32px] lg:text-[45px] font-bold my-2">
            Seamless-AI Clone
          </h3>
          <p className="text-gray-600 text-lg lg:text-xl py-4 my-4 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ut
            non adipisci quas nisi expedita sint nam, quasi natus provident?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex items-center gap-4 py-4">
            <Link href={""}>
              <button className="bg-[#e13019] text-white w-[180px] py-4 rounded-lg text-lg shadow-md">
                Demo
              </button>
            </Link>
            <Link href={""}>
              <button className="bg-[#e13019] text-white w-[180px] py-4 rounded-lg text-lg shadow-md">
                Source
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 py-4 my-4 relative">
          <Image
            src={"/images/project-1.png"}
            height={600}
            width={600}
            alt="project-1"
            className="w-full h-full"
          />

          <Image
            src={"/images/project-1-mobile.png"}
            height={200}
            width={100}
            alt="project-1"
            className="absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
};
