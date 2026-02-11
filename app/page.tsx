'use client';
import HeroTitle from "@/components/ui/LandingPage/HeroTitle";
import LinkCards, { CARDS } from "@/components/ui/LandingPage/LinkCards";
import { useAnimate } from "motion/react";
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
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('hasAnimated');

    if (hasAnimated) {
      // Skip animation — instantly show final state
      animate([
        ['.hero-container', { scale: 1, opacity: 1 }, { duration: 0 }],
        ['.cards-container', { scale: 1, opacity: 1, filter: "blur(0px)" }, { duration: 0 }],
        ['.hero-container h1', { opacity: 1, y: 0, filter: "blur(0px)" }, { duration: 0 }],
        ['.hero-container ul', { clipPath: "inset(0 0 0 0)" }, { duration: 0 }],
        ...CARDS.map((card, i) => [
          `.cards-container a:nth-child(${i + 1}) .card`,
          { y: 0, rotate: card.ROTATE / 5, opacity: 1, x: 0 },
          { duration: 0 },
        ] as [string, Record<string, unknown>, Record<string, unknown>]),
      ]);
      return;
    }

    const controls = animate([
      // Container entrance -> Container scales in to full size
      ['.hero-container', { scale: [0.5, 1], opacity: [0, 1] }, { duration: 1.2, ease: "easeOut" }],
      ['.cards-container', { scale: [0.5, 1], opacity: [0, 1], filter: ["blur(4px)", "blur(0px)"] }, { duration: 1.5, type: "spring", bounce: 0.1 }],
      
      // Phase 1: Hero entrance
      ['.hero-container h1', { opacity: [0, 1], y: [10, 0], filter: ["blur(10px)", "blur(0px)"] }, { duration: 1, type: "spring", bounce: 0.3 }],
      ['.hero-container ul', { clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] }, { type: "spring", duration: 0.5 , "at": "<0.5"}],

      // Phase 2: Cards entrance — uses CARDS config for values
      ...CARDS.map((card, i) => [
        `.cards-container a:nth-child(${i + 1}) .card`,
        { y: [card.Y, 0], rotate: [card.ROTATE * 2, card.ROTATE / 5], opacity: [0.8, 1], x: [card.X, 0] },
        { duration: 1, type: "spring" as const, bounce: 0.4, at: i === 0 ? "<" : "-0.85" , delay: 0.5},
      ] as [string, Record<string, unknown>, Record<string, unknown>]),
    ]);

    sessionStorage.setItem('hasAnimated', 'true');
    return () => controls.stop();
  }, [animate]);

  return (
    <div ref={scope}>
      <main className="mt-20 md:mt-44 flex flex-col items-center justify-center font-lexend z-10">
        <div className="bg-lines"></div>
        <HeroTitle />
        <LinkCards />      
      </main>
    </div>
  )
}