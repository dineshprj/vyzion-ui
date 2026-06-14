import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <div className="py-28 px-30">
        <div className="absolute inset-0 h-8 w-8 bg-grid" />
      <div className="">

        <div className="inline-flex items-center gap-3 px-2 py-1 rounded-full border border-purple-400 text-sm bg-purple-100">
          <span className="w-2 h-2 rounded-full bg-purple-600"></span>
          <span>Now accepting Q3 2025 projects</span>
        </div>
        <h1 className="text-center">
          we build  
          <span>software</span>
          that scales
        </h1>
        <p className="text-center">
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
        </div>
      </div>

      <div>image</div>
      <div>data</div>
    </div>
  );
}
