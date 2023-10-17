import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface specificProject {
  id: number;
  projectTitle: string;
  projectDescription: string;
  projectSource: string;
  projectDemo: string;
  projectDesktopPreview: string;
  projectMobilePreview: string;
  isReverse: boolean;
}

export const SpecificProject: React.FC<specificProject> = ({
  projectTitle,
  projectDescription,
  projectSource,
  projectDemo,
  projectDesktopPreview,
  projectMobilePreview,
  isReverse,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <div
        className={`h-full lg:h-[650px] bg-[#f8fafc] flex flex-col-reverse overflow-hidden ${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } justify-between gap-4 items-center py-4 my-4 shadow-md px-5`}>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 76 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.5, delay: 0.25 }}
          className="w-full lg:w-1/2">
          <h3 className="text-[32px] lg:text-[45px] font-bold my-2">
            {projectTitle}
          </h3>
          <p className="text-gray-600 text-lg lg:text-xl py-4 my-4 w-[90%]">
            {projectDescription}
          </p>

          <div className="flex items-center gap-4 py-4">
            <Link href={projectDemo} target="_blank">
              <button className="bg-[#e13019] text-white w-[180px] py-4 rounded-lg text-lg shadow-md">
                Demo
              </button>
            </Link>
            <Link href={projectSource} target="_blank">
              <button className="bg-[#e13019] text-white w-[180px] py-4 rounded-lg text-lg shadow-md">
                Source
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 py-4 my-4 relative z-10"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 76 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5 }}>
          <Image
            src={projectDesktopPreview}
            height={600}
            width={600}
            alt="project-1"
            className="w-full h-full"
          />

          <Image
            src={projectMobilePreview}
            height={200}
            width={100}
            alt="project-1"
            className="absolute bottom-0"
          />
        </motion.div>
      </div>
    </div>
  );
};
