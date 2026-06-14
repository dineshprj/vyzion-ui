import { ArrowRight, Calendar, PlayIcon } from "lucide-react";
import styles from "@/layout/style/Navbar.module.css";
import { Play } from "next/font/google";
export default function Hero() {
  return (
    <div className="py-28 px-30">
        <div className="absolute inset-0 h-8 w-8 bg-grid" />
      <div className=" flex flex-col items-center justify-center bg-amber-600">

        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-purple-400  bg-purple-100">
          <span className="w-1 h-1 rounded-full bg-pink-400"></span>
          <span className={`text-center ${styles.logot} text-purple-600 text-xs `}>Now accepting Q3 2025 projects</span>
        </div>
    <h1 className={`text-center flex flex-col text-7xl py-4 font-medium uppercase ${styles.logo} 
    tracking-[1.3]
   
    `}>
          we build  
          <span className=" bg-linear-to-r from-fuchsia-500 via-purple-600 to-purple-500 bg-clip-text text-transparent ">software</span>
          that scales
        </h1>
        <p className={`text-center ${styles.fontFirst} `}>
          Vyzion Innovations crafts premium web, mobile, and SaaS products for
          ambitious founders and enterprises. From MVP to IPO-ready.
        </p>

        <div>
          <button
            className="flex 
            cursor-pointer
            text-white
            px-4 py-1.5
            bg-linear-to-r
            from-fuchsia-500
            via-fuchsia-600
            to-purple-500
            rounded-xl
            hover:-translate-y-1
            transition-all
            hover:s
            duration-300hadow-xl
            hover:shadow-fuchsia-700/30
            "
          >
            <Calendar />
            Book a Free call
            <ArrowRight />
          </button>

          <button>
         <PlayIcon />
            View Our Work
          </button>
        </div>
      </div>

      <div>image</div>
      <div>data</div>
    </div>
  );
}
