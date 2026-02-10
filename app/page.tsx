'use client';
import HeroTitle from "@/components/ui/LandingPage/HeroTitle";
import LinkCards from "@/components/ui/LandingPage/LinkCards";
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};


export default function Home() {
  return (
    <div >
      <main className="mt-20 md:mt-44 flex flex-col items-center justify-center font-lexend z-10">
        <div className="bg-lines"></div>
        <HeroTitle />
        <LinkCards />      
      </main>
    </div>
  )
}