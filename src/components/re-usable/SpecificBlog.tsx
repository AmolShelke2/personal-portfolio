import Image from "next/image";
import Link from "next/link";
import React from "react";

interface specificBlogProps {
  id: number;
  blogImage: string;
  blogTitle: string;
  blogSource: string;
}

export const SpecificBlog: React.FC<specificBlogProps> = ({
  id,
  blogImage,
  blogTitle,
  blogSource,
}) => {
  return (
    <div
      className="flex flex-col sm:flex-row border-2 rounded-md sm:gap-4 w-full my-6"
      key={id}>
      <div className="m-2 border-2 p-1">
        <Image
          src={blogImage}
          alt="blog-banner"
          height={300}
          width={300}
          className="w-full h-full sm:w-fit sm:h-fit"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-start sm:w-1/2 py-2 px-2">
        <h3 className="text-2xl font-semibold my-2">{blogTitle} </h3>
        <Link href={blogSource} target="_blank">
          <button className="py-4 rounded-sm px-12 bg-slate-100 my-2">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};
