import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/Blogs";
import { SpecificBlog } from "./re-usable/SpecificBlog";

export const Blogs: React.FC = () => {
  return (
    <div
      className="w-full lg:max-w-[1440px] xl:mx-auto h-auto mt-12"
      id="blogs">
      <h2 className="text-center underline text-3xl lg:text-5xl font-extrabold capitalize my-5 text-gray-700 py-4">
        Blogs
      </h2>

      <div className="px-4">
        {blogs.map(({ id, blogTitle, blogImage, blogSource }) => (
          <SpecificBlog
            key={id}
            id={id}
            blogTitle={blogTitle}
            blogImage={blogImage}
            blogSource={blogSource}
          />
        ))}
      </div>
    </div>
  );
};
