"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Luxair Estate",
      location: "Abuja",
      category: "Residential",
      image: "/abj.jpg",
      desc: "A luxury multi-family residential estate constructed with premium sustainable elements and high-end modern amenities.",
    },
    {
      title: "Ruel's Place",
      location: "Lagos",
      category: "Commercial",
      image: "/Ruel.jpg",
      desc: "A state-of-the-art office building featuring glass architecture, green energy systems, and premium commercial workspaces.",
    },
    {
      title: "FGGC Development",
      location: "Owerri",
      category: "Infrastructure",
      image: "/fggc.png",
      desc: "Comprehensive structural upgrades, modern facilities, and road expansions for educational infrastructure.",
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-37 bg-accent text-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6">
          <div className="flex flex-col gap-2 md:gap-4">
            <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-xs uppercase py-1 px-3 w-fit">
              Featured Portfolio
            </Badge>
            <h2 className="text-2xl md:text-4xl font-semibold font-sora tracking-tight">
              Spaces Designed to Inspire
            </h2>
            <p className="text-gray-600 font-sora max-w-2xl text-base">
              A curated selection of our most challenging and satisfying
              developments, completed to perfection.
            </p>
          </div>
          <Link href="/project">
            <Button className="flex items-center gap-2 border border-black/20 text-black hover:bg-black hover:text-white px-6 py-2 rounded font-sora font-medium transition-all duration-300 cursor-pointer bg-transparent">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              variants={cardVariants}
              className="flex flex-col rounded-2xl overflow-hidden bg-white border border-black/5 shadow-lg group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Box */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-black/75 backdrop-blur-md text-white font-semibold font-sora text-xs uppercase px-2.5 py-1 tracking-wider border border-white/10">
                    {proj.category}
                  </Badge>
                </div>
              </div>

              {/* Info Box */}
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 text-gray-500 font-sora text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-xl font-bold font-sora text-black group-hover:text-[#f78f36] transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 font-dm-sans text-sm md:text-base leading-relaxed line-clamp-3">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 ">
                  <Link href={`/project`}>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold font-sora text-[#f78f36] transition-colors border border-[#f78f36] py-1 px-2 rounded-md cursor-pointer">
                      View Project Details{" "}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
