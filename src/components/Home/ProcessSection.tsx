"use client";
import React from "react";
import { motion } from "motion/react";
import { MessageSquare, ClipboardList, HardHat, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      desc: "We discuss your vision, evaluate spatial parameters, outline budget boundaries, and conduct preliminary feasibility analysis to align on project objectives.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Planning & Design",
      desc: "Our architectural and engineering departments draft 3D plans, secure regulatory building approvals, perform value engineering, and lock schedules.",
      icon: ClipboardList,
    },
    {
      step: "03",
      title: "Construction",
      desc: "Our site teams break ground, mobilizing modern equipment and specialized contractors. We execute structures with strict quality control and safety reviews.",
      icon: HardHat,
    },
    {
      step: "04",
      title: "Handover & Delivery",
      desc: "Following comprehensive structural assessments and interior detailing, we execute final cleanups and happily hand over key controls to you.",
      icon: CheckCircle2,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-37 bg-[rgb(255,255,255)] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 md:gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-xs uppercase py-1 px-3">
            Our Method
          </Badge>
          <h2 className="text-xl md:text-4xl font-semibold font-sora tracking-tight">
            How We Bring Plans to Life
          </h2>
          <p className="text-gray-600 font-dm-sans max-w-xl text-base md:text-base">
            A transparent, organized, and highly-engineered four-step workflow driving project success.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-black/10 z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={stepVariants}
                className="flex flex-col items-center text-center gap-4 relative z-10 group"
              >
                {/* Step Circle */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-black/5 flex items-center justify-center shadow-lg group-hover:border-[#f78f36] transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-8 h-8 text-[#f78f36]" />
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-black text-white text-xs font-bold font-sora flex items-center justify-center border border-white">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-xl font-bold font-sora text-black group-hover:text-[#f78f36] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed px-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;
