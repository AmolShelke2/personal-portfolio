import { About } from "@/components/About";
import { Blogs } from "@/components/Blogs";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { Projects } from "@/components/Projects";
import { Loader } from "@/components/re-usable/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="h-full w-full bg-white">
      <Header />
      <HomeSection />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}
