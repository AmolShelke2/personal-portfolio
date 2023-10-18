import { projects } from "@/data/Projects";
import { SpecificProject } from "./re-usable/SpecificProject";

export const Projects: React.FC = () => {
  return (
    <div
      className="w-full lg:max-w-[1440px] xl:mx-auto h-auto  mt-12"
      name="projects">
      <h2 className="text-center underline text-3xl lg:text-5xl font-extrabold capitalize my-5 text-gray-700 py-4">
        Projects
      </h2>
      {projects.map((project) => (
        <SpecificProject
          key={project.id}
          projectTitle={project.projectTitle}
          id={project.id}
          projectDescription={project.projectDescription}
          projectSource={project.projectSource}
          projectDemo={project.projectDemo}
          projectDesktopPreview={project.projectDesktopPreview}
          projectMobilePreview={project.projectMobilePreview}
          isReverse={project.isReverse}
        />
      ))}
    </div>
  );
};
