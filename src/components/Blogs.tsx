import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/Blogs";

export const Blogs: React.FC = () => {
  return (
    <div
      className="w-full lg:max-w-[1440px] xl:mx-auto h-auto mt-12"
      id="blogs">
      <h2 className="text-center underline text-3xl lg:text-5xl font-extrabold capitalize my-5 text-gray-700 py-4">
        Blogs
      </h2>

      <div className="px-4">
        {blogs.map((blog) => (
          <div
            className="flex flex-col sm:flex-row border-2 rounded-md sm:gap-4 w-full my-6"
            key={blog.id}>
            <div className="m-2 border-2 p-1">
              <Image
                src={blog.blogImage}
                alt="blog-banner"
                height={300}
                width={300}
                className="w-full h-full sm:w-fit sm:h-fit"
              />
            </div>

            <div className="w-full flex flex-col justify-center items-start sm:w-1/2 py-2 px-2">
              <h3 className="text-2xl font-semibold my-2">{blog.blogTitle} </h3>
              <Link href={blog.blogSource} target="_blank">
                <button className="py-4 rounded-sm px-12 bg-slate-100 my-2">
                  Read
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
