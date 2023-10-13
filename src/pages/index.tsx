import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
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
      <Image src={"/images/pre.svg"} height={150} width={150} alt="loading" />
    </div>
  ) : (
    <div className="h-full w-full bg-white">
      <Header />
      <HomeSection />
      <About />
    </div>
  );
}
