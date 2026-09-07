"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Badge } from "../ui/badge";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Engr. Olanrewaju K.",
      position: "Managing Director",
      company: "Luxair Properties",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      text: "Benah World Wide delivered our Luxair Estate project within budget and strictly ahead of timeline. Their engineering standards are second to none in Nigeria. Highly professional team!",
    },
    {
      id: 2,
      name: "Mrs. Amara N.",
      position: "Chief Operating Officer",
      company: "Fidelity Holdings",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      text: "The remodeling of our commercial hubs in Sapele and Asaba was a huge success. Their architectural designs optimize both aesthetic beauty and natural ventilation.",
    },
    {
      id: 3,
      name: "Dr. Babajide A.",
      position: "Founder & CEO",
      company: "Ruel Group",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      text: "Partnering with Benah on Ruel's Place was one of our best decisions. Their attention to minor finishing details, green materials, and project compliance was stellar.",
    },
  ];

  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#1C1917] text-white overflow-hidden relative">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
            Client Success
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold font-sora tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-gray-400 font-dm-sans max-w-lg text-sm md:text-base">
            What industry leaders and clients say about our construction services.
          </p>
        </div>

        {/* Testimonial Slider Box */}
        <div className="w-full relative min-h-[350px] md:min-h-[280px] bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-xl backdrop-blur-md">
          <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 text-white/5" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(reviews[active].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl font-dm-sans text-gray-200 leading-relaxed font-light italic max-w-2xl">
                {reviews[active].text}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-2">
                <img
                  src={reviews[active].avatar}
                  alt={reviews[active].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#f78f36]"
                />
                <div className="text-left font-sora">
                  <h4 className="font-bold text-white text-base">
                    {reviews[active].name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {reviews[active].position}, <span className="text-[#f78f36]">{reviews[active].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Navigation Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2.5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === idx ? "w-8 bg-[#f78f36]" : "w-2.5 bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
