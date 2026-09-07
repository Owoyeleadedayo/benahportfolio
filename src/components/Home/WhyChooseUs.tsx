"use client";
import React from "react";
import { motion } from "motion/react";
import { Users, Award, Clock, ShieldCheck, HeartHandshake } from "lucide-react";
import { Badge } from "../ui/badge";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Team",
      desc: "Our highly trained professionals bring decade-long industry expertise, engineering craftsmanship, and a visionary approach to every site.",
      icon: Users,
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-500",
    },
    {
      title: "Quality Materials",
      desc: "We partner with trusted global suppliers to source sustainable, long-lasting, premium-grade materials that ensure absolute structural integrity.",
      icon: Award,
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500",
    },
    {
      title: "On-Time Delivery",
      desc: "Precision scheduling and advanced project management ensure projects progress smoothly and reach handover exactly when promised.",
      icon: Clock,
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
    },
    {
      title: "Safety First",
      desc: "We enforce zero-compromise safety protocols, continuous risk assessment, and rigorous site regulations to protect our teams and the community.",
      icon: ShieldCheck,
      color: "from-rose-500/20 to-red-500/20",
      iconColor: "text-rose-500",
    },
    {
      title: "Customer Satisfaction",
      desc: "We place clients at the center of the design-build lifecycle, maintaining transparent communication and exceeding expectations at every phase.",
      icon: HeartHandshake,
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-37 bg-accent text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora uppercase text-xs py-1 px-3">
            Why Choose Us
          </Badge>
          <h2 className="text-xl md:text-4xl font-semibold text-black font-sora tracking-tight">
            Setting the Benchmark in Construction Engineering
          </h2>
          <p className="text-gray-600 font-sora max-w-2xl text-base md:text-lg">
            We merge innovation, structural precision, and uncompromising
            craftsmanship to deliver extraordinary built spaces.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {features.map((feat, index) => {
            const Icon = feat.icon;
            // Center the last item if it's on desktop 3-col layout
            const isLast = index === features.length - 1;
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group flex flex-col gap-6 p-8 rounded-2xl bg-white/80 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 shadow-xl ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Icon Wrapper */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${feat.color} transition-all duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-7 h-7 ${feat.iconColor}`} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold font-sora text-gray-900  transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-gray-500 font-sora text-sm md:text-base">
                    {feat.desc}
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

export default WhyChooseUs;
