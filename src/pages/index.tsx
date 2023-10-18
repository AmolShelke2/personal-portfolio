import { About } from "@/components/About";
import { Blogs } from "@/components/Blogs";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { Projects } from "@/components/Projects";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={"/images/share-icon.gif"}
        height={150}
        width={150}
        className="rounded-full"
        alt="loading"
      />
    </div>
  ) : (
    <div className="h-full w-full bg-white">
      <Header />
      <HomeSection />
      <About />
      <Projects />
      <Blogs />
    </div>
  );
}
