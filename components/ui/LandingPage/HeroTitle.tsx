export default function HeroTitle(){
    return (
         <div
        style={{ opacity: 0 }}
        className="hero-container relative outline-1 origin-top flex flex-col items-center p-2 px-4 outline-zinc-200/80 before:animate-pulse before:absolute before:-top-4.5 before:content-['+'] before:-left-2 before:text-2xl before:text-zinc-300 after:animate-pulse after:absolute after:-bottom-3.5 after:-right-2 after:content-['+'] after:text-zinc-300 after:text-2xl backdrop-blur-xs">
        <h1 
          className="text-[clamp(2rem,-0.077rem+4.923vi,3.5rem)] font-funnel-display">
          Web Chemistry
        </h1>
        <div className="text-[clamp(0.75rem,-0.026rem+1.641vi,1rem)] px-2">
          <ul 
          className="flex origin-center text-neutral-600 gap-5 mt-2 font-mono *:pr-3">
            <li className="relative after:absolute after:content-[''] after:size-2 after:bg-red-500 after:top-[30%] after:-right-2">Learning</li>
            <li className="relative after:absolute after:content-[''] after:size-2 after:bg-red-500 after:top-[30%] after:-right-2">Re-creation</li>
            <li>Experiment</li>
          </ul>
        </div>
        </div>
        
    )
}