"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "../ui/button";

const HomeCTA = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
        style={{ backgroundImage: "url('/cons1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-[#f78f36]/20" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 text-left"
          >
            <span className="text-[#f78f36] font-bold font-sora tracking-widest text-xs md:text-sm uppercase border-l-2 border-[#f78f36] pl-3">
              Start Your Journey
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-sora text-white leading-tight tracking-tight">
              Ready to Build Your Next Masterpiece?
            </h2>
            <p className="text-gray-300 font-dm-sans text-base md:text-lg leading-relaxed max-w-2xl">
              From residential high-rises to massive infrastructure works, Benah World Wide combines structural safety, architectural beauty, and on-schedule execution to bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Link href="/quote" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#f78f36] hover:bg-white hover:text-[#f78f36] border border-[#f78f36] text-white text-base font-semibold font-sora py-4 px-8 rounded-lg shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center gap-2">
                Request a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-base font-semibold font-sora py-4 px-8 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Contact Sales Office
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
