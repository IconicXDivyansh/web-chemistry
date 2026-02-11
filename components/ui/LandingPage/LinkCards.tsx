import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const CARDS = [
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
    image: "/experiments_card_image.png",
    ROTATE: 0,
    Y: 200,
    X: 0
  },
  {
    title: "Blog",
    to: "/blog",
    image: "/blog_card_image.webp",
    ROTATE: 10, 
    Y: 200,
    X: -100
  }
]


export default function LinkCards(){
    return (
         <div
        style={{ opacity: 0 }}
        className="cards-container relative backdrop-blur-xs origin-bottom mt-19 m-1 outline-1 outline-zinc-200/80 before:absolute before:content-['+'] before:-top-4.5 before:-left-2 before:text-2xl before:z-20 text-zinc-200 after:absolute after:content-['+'] after:-bottom-3.5 after:-right-2 after:text-zinc-200 after:text-2xl">
          <div className="md:flex md:gap-10 lg:gap-20 overflow-clip p-20 before:absolute before:content-['+'] before:-bottom-3.5 before:-left-2 before:text-2xl before:z-20 before:text-zinc-200 after:absolute after:content-['+'] after:-top-4.5 after:-right-2 after:text-zinc-200 after:text-2xl">

          {CARDS.map((card, i) => 
              (
                <Link href={card.to} key={i} className="perspective-[1000px]">
                  <motion.div 
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 10,
                    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
                    backgroundColor: "#fafafa",
                    color: "#262626",
                    borderRadius: "8px",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  style={{ rotate: card.ROTATE / 5, backgroundColor: "#f4f4f5", color: "#737373" }}
                    className="card my-10 md:my-0 transform outline-1 p-1.5 rounded-xs outline-zinc-200">
                    <div className="outline-[0.5px] rounded-[1px] outline-zinc-200 bg-white">
                    <Image src={card.image} alt={`${card.title}-image`} width={300} height={300}  className="w-70 h-72"/>
                    </div>
                    <p className="text-center mt-4 mb-2">{card.title}</p>
                  </motion.div>
                </Link>
              )
          )}
          </div>

        </div>
    )
}