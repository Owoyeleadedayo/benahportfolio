"use client";
import React, { useState, useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, User, MapPin, Check, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
  desc: string;
  specs: string[];
  date: string;
  client: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
}

const Page = () => {
  const container = useRef(null);
  const { timeline } = useContext(TransitionContext);

  useGSAP(
    () => {
      gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1, duration: 0.6 });
      timeline.add(gsap.to(container.current, { opacity: 0, duration: 0.6 }));
    },
    { scope: container }
  );

  const categories = ["All", "Residential", "Commercial", "Infrastructure", "Renovation"];

  const projects: Project[] = [
    {
      title: "Luxair Estate",
      location: "Abuja",
      category: "Residential",
      image: "/abj.jpg",
      desc: "A premium residential housing development featuring luxury apartments and modern duplex structures with energy-efficient systems.",
      specs: ["24 Luxury Duplex Units", "Solar Smart-Grid Integration", "Fully Asphalted Private Access Roads"],
      date: "September 2024",
      client: "Luxair Properties Group",
      gallery: ["/abj.jpg", "/building4.jpg", "/building5.jpg"],
      beforeImage: "/building.jpg",
      afterImage: "/abj.jpg",
    },
    {
      title: "Ruel's Place",
      location: "Lagos",
      category: "Commercial",
      image: "/Ruel.jpg",
      desc: "An eco-friendly commercial tower with architectural glass panels, customized modern offices, and smart elevator systems.",
      specs: ["5-Story Commercial Tower", "Structural Double-Glazed Facade", "Underground Parking for 60 Cars"],
      date: "March 2025",
      client: "Ruel Group Nigeria",
      gallery: ["/Ruel.jpg", "/building5.jpg", "/building7.jpg"],
      beforeImage: "/building7.jpg",
      afterImage: "/Ruel.jpg",
    },
    {
      title: "Fidelity Sapele Hub",
      location: "Sapele",
      category: "Renovation",
      image: "/fidelity.jpg",
      desc: "Complete restructuring and spatial optimization of a commercial banking center to improve workspace performance and customer service layouts.",
      specs: ["Structural Facade Upgrades", "Advanced Cash Vault System", "Low-Energy HVAC Installations"],
      date: "June 2023",
      client: "Fidelity Bank Plc",
      gallery: ["/fidelity.jpg", "/FID.jpg"],
      beforeImage: "/building.jpg",
      afterImage: "/fidelity.jpg",
    },
    {
      title: "FGGC Campus Upgrades",
      location: "Owerri",
      category: "Infrastructure",
      image: "/fggc.png",
      desc: "Massive campus expansion project delivering modern student hostels, security gates, drainage grids, and access roads.",
      specs: ["Two 500-Student Hostel Blocks", "2.5km Reinforced Asphalt Road Network", "Solar Security Lighting System"],
      date: "November 2024",
      client: "Federal Ministry of Education",
      gallery: ["/fggc.png", "/ltt.jpg"],
      beforeImage: "/firstbanner.jpg",
      afterImage: "/fggc.png",
    },
    {
      title: "PSSDC Center",
      location: "Magodo, Lagos",
      category: "Infrastructure",
      image: "/ltt.jpg",
      desc: "Modernization of training conference rooms, perimeter walls, high-security gatehouses, and central drainage channels.",
      specs: ["State-of-the-Art Conference Auditorium", "1.2km Security Boundary Wall", "Heavy-Duty Channel Drainage Grid"],
      date: "February 2024",
      client: "Lagos State Government",
      gallery: ["/ltt.jpg", "/whp.jpg"],
      beforeImage: "/building.jpg",
      afterImage: "/ltt.jpg",
    },
    {
      title: "Fidelity Asaba Branch",
      location: "Asaba",
      category: "Commercial",
      image: "/FID.jpg",
      desc: "A smart banking branch project built from design concepts, using durable structural composites and modern security structures.",
      specs: ["Premium External Alucobond Cladding", "Biometric Vault Security Cells", "250KVA Smart Diesel Back-up Grid"],
      date: "April 2023",
      client: "Fidelity Bank Plc",
      gallery: ["/FID.jpg", "/fidelity.jpg"],
      beforeImage: "/building.jpg",
      afterImage: "/FID.jpg",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  const [beforeAfterView, setBeforeAfterView] = useState<"before" | "after">("after");

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div ref={container} className="w-full bg-[#F6F4ED] text-black pt-24 pb-16 overflow-hidden">
      
      {/* Page Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3 w-fit">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-sora tracking-tight">
              Our Completed Projects
            </h1>
            <p className="text-gray-600 font-dm-sans max-w-xl text-base">
              Explore our record of engineering excellence across residential high-rises, commercial offices, civil works, and full renovations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 lg:px-24 mb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2.5 border-b border-black/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-sora text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#f78f36] text-white shadow-md"
                  : "bg-white border border-black/5 hover:bg-[#f78f36]/10 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={proj.title}
                  onClick={() => {
                    setSelectedProj(proj);
                    setBeforeAfterView("after");
                  }}
                  className="flex flex-col rounded-2xl overflow-hidden bg-white border border-black/5 shadow-lg group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="(max-w-768px) 100vw, 350px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-black/80 backdrop-blur-md text-white font-sora text-xs uppercase px-2 py-0.5 border border-white/10">
                        {proj.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 text-gray-400 font-sora text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{proj.location}</span>
                      </div>
                      <h3 className="text-xl font-bold font-sora text-black group-hover:text-[#f78f36] transition-colors duration-300">
                        {proj.title}
                      </h3>
                      <p className="text-gray-600 font-dm-sans text-sm leading-relaxed line-clamp-2">
                        {proj.desc}
                      </p>
                    </div>
                    
                    <span className="text-sm font-bold font-sora text-[#f78f36] inline-flex items-center gap-1">
                      View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProj && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProj(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white text-black p-6 md:p-10 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProj(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-8">
                {/* Titles */}
                <div className="flex flex-col gap-2">
                  <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-sm py-1 px-3 w-fit">
                    {selectedProj.category}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold font-sora">
                    {selectedProj.title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-gray-500 font-sora text-sm">
                    <MapPin className="w-4 h-4 text-[#f78f36]" />
                    <span>{selectedProj.location}</span>
                  </div>
                </div>

                {/* Grid Info & Before/After */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column - Details */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-2xl border border-black/5">
                      <h4 className="font-bold font-sora text-lg border-b border-black/5 pb-2">
                        Specifications
                      </h4>
                      <div className="flex items-center gap-3 font-dm-sans text-sm text-gray-700">
                        <Calendar className="w-4.5 h-4.5 text-[#f78f36]" />
                        <span><strong>Date:</strong> {selectedProj.date}</span>
                      </div>
                      <div className="flex items-center gap-3 font-dm-sans text-sm text-gray-700">
                        <User className="w-4.5 h-4.5 text-[#f78f36]" />
                        <span><strong>Client:</strong> {selectedProj.client}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h4 className="font-bold font-sora text-lg">Project Highlights</h4>
                      <ul className="flex flex-col gap-2">
                        {selectedProj.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-dm-sans">
                            <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h4 className="font-bold font-sora text-lg">Project Overview</h4>
                      <p className="text-sm md:text-base text-gray-600 font-dm-sans leading-relaxed">
                        {selectedProj.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Media / Before-After Comparison */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    {/* Toggle Selector */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold font-sora text-lg">Before & After</h4>
                        <div className="flex bg-gray-100 rounded-lg p-1 text-xs">
                          <button
                            onClick={() => setBeforeAfterView("before")}
                            className={`px-3 py-1.5 rounded-md font-semibold font-sora cursor-pointer transition-all ${
                              beforeAfterView === "before" ? "bg-white text-black shadow" : "text-gray-500"
                            }`}
                          >
                            Before
                          </button>
                          <button
                            onClick={() => setBeforeAfterView("after")}
                            className={`px-3 py-1.5 rounded-md font-semibold font-sora cursor-pointer transition-all ${
                              beforeAfterView === "after" ? "bg-white text-[#f78f36] shadow" : "text-gray-500"
                            }`}
                          >
                            After
                          </button>
                        </div>
                      </div>

                      {/* Display Window */}
                      <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-black/5 bg-gray-100 shadow-inner">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={beforeAfterView}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={
                                beforeAfterView === "before"
                                  ? selectedProj.beforeImage
                                  : selectedProj.afterImage
                              }
                              alt="Before and after progress comparison"
                              fill
                              className="object-cover"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur text-white text-xs font-bold font-sora px-3 py-1.5 rounded uppercase">
                              {beforeAfterView === "before" ? "Before Structure" : "After Handover"}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Mini Gallery */}
                    <div className="flex flex-col gap-3">
                      <h4 className="font-bold font-sora text-lg">Project Gallery</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProj.gallery.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative h-20 md:h-24 rounded-xl overflow-hidden border border-black/5 bg-gray-50"
                          >
                            <Image
                              src={img}
                              alt="gallery image"
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mid Page Statement banner */}
      <section className="mx-6 md:mx-12 lg:mx-24 bg-black rounded-3xl overflow-hidden py-16 px-8 flex flex-col justify-center items-center text-center gap-6">
        <p className="text-white text-2xl md:text-3xl font-sora font-medium max-w-2xl leading-relaxed">
          Have an ambitious project in mind? We'd love to build with you.
        </p>
        <Link href="/contact">
          <Button className="bg-[#f78f36] hover:bg-white hover:text-black text-white text-lg font-bold font-sora px-8 py-5 rounded-xl border border-[#f78f36] cursor-pointer transition-colors duration-300 flex items-center gap-2">
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </section>

    </div>
  );
};

export default Page;
