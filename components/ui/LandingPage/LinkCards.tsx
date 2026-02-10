import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const CARDS = [
  { title: "Basics",
    to: "/basics",
    image: "/Basics_Card_Image.webp",
    ROTATE: -10, 
    Y: 200,
    X: 100
  },
  {
    title: "Experiments",
    to: "/experiments",
    // image: "/Experiment_Card_Image.webp"
    // image: "/card_experiments.jpg"
    image: "/experiments_card_image.png",
    ROTATE: 0,
    Y: 200
  },
  {
    title: "Blog",
    to: "/blog",
    // image: "/Card_blog_Image.webp"
    image: "/blog_card_image.webp",
    ROTATE: 10, 
    Y: 200,
    X: -100
  }
]


export default function LinkCards(){
    return (
         <motion.div
        initial={{
          scale: 0.5,
          filter: "blur(4px)"
        }}
        animate={{
          scale: 1,
          filter: "blur(0px)"
        }}
        transition={{
          duration: 2,
          type: "spring",
          bounce: 0.1
        }}
        className="relative backdrop-blur-xs origin-bottom mt-20 m-1 outline-1 outline-zinc-200/80 before:absolute before:content-['+'] before:-top-4.5 before:-left-2 before:text-2xl before:z-20 text-zinc-200  after:absolute after:content-['+'] after:-bottom-3.5 after:-right-2 after:text-zinc-200 after:text-2xl">
          <div className="md:flex md:gap-10 lg:gap-20 overflow-clip p-20 before:absolute before:content-['+'] before:-bottom-3.5 before:-left-2 before:text-2xl before:z-20 before:text-zinc-200 after:absolute after:content-['+'] after:-top-4.5 after:-right-2 after:text-zinc-200 after:text-2xl">

          {CARDS.map((card, i) => 
              (
                <Link href={card.to} key={i} className="perspective-[1000px] group">
                  <motion.div 
                  initial={{
                    y: card.Y,
                    rotate: card.ROTATE * 2,
                    x: card.X
                  }}
                  animate={{
                    y: 0,
                    rotate: card.ROTATE / 5,
                    x: 0
                  }}
                  transition={{
                    delay: 3.5,
                    duration: 1,
                    type: "spring",
                    bounce: 0.4
                  }}
                    className="card my-10 md:my-0 transform outline-1 p-1.5 rounded-xs bg-zinc-100 outline-zinc-200 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:z-10 group-hover:shadow-xl text-neutral-500  group-hover:text-neutral-800 group-hover:bg-zinc-50 group-hover:rounded-lg">
                    <div className="outline-[0.5px] rounded-[1px] outline-zinc-200 bg-white group-hover:rounded-[calc(var(--radius-xl)-6px)]">
                    <Image src={card.image} alt={`${card.title}-image`} width={300} height={300}  className="w-70 h-72"/>
                    </div>
                    <p className="text-center mt-4 mb-2">{card.title}</p>
                  </motion.div>
                </Link>
              )
          )}
          </div>

        </motion.div>
    )
}