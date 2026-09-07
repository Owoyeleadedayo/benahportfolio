"use client";
import React, { useState, useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";
import { Search, Plus, Minus, ArrowRight, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: number;
  category: string;
  q: string;
  a: string;
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

  const faqs: FAQItem[] = [
    {
      id: 1,
      category: "General",
      q: "Where is Benah World Wide headquartered and what states do you cover?",
      a: "Our corporate headquarters is located at 43, Oritshe Street, Awolowo Way, Ikeja, Lagos. We actively deploy site crews to execute residential and commercial works in Lagos, Abuja, Delta State (Asaba, Sapele), Imo State (Owerri), and throughout Nigeria's Southern and North-Central regions.",
    },
    {
      id: 2,
      category: "General",
      q: "Is BENAH registered with official regulatory bodies in Nigeria?",
      a: "Yes. BENAH Worldwide Services Limited was incorporated by the Corporate Affairs Commission (RC No. 1376432) in 2016. Our structural and civil engineers are fully registered with COREN (Council for the Regulation of Engineering in Nigeria) and NIA (Nigerian Institute of Architects).",
    },
    {
      id: 3,
      category: "Services",
      q: "Do you handle mechanical, electrical, and plumbing (MEP) installations?",
      a: "Yes, we provide end-to-end design-build services. This includes complete structural shell construction, interior detailing, and advanced MEP engineering (HVAC, solar backup grids, smart-home automation routing, water piping, and fire defense grids).",
    },
    {
      id: 4,
      category: "Services",
      q: "Can you remodel commercial spaces without shutting down business operations?",
      a: "Yes. For our retail, banking, and corporate clients, we draft phased night-shift execution schedules. This isolates construction debris and noise, ensuring your branch, office, or storefront continues serving clients during normal daytime working hours.",
    },
    {
      id: 5,
      category: "Construction Process",
      q: "How do you enforce safety and quality controls on-site?",
      a: "Safety is our core foundation. We enforce complete PPE compliance, secure boundary lines, and carry out mandatory daily hazard briefings. Material safety is audited by checking steel tensile indexes and conducting concrete crush tests at third-party certified laboratories.",
    },
    {
      id: 6,
      category: "Construction Process",
      q: "How are rainy season weather delays managed during groundwork?",
      a: "During planning, we factor in seasonal weather shifts. Heavy foundation excavations and concrete pours are scheduled for dry cycles. In rainy phases, teams focus on indoor finishes, structural framing, and utility routing to keep handovers on schedule.",
    },
    {
      id: 7,
      category: "Pricing & Quotes",
      q: "How can I request a pricing estimate and is it free?",
      a: "You can request a detailed cost breakdown via our online Quotation Form, email, or telephone. Initial project consultations and preliminary bill-of-quantities assessments are completely free of charge.",
    },
    {
      id: 8,
      category: "Pricing & Quotes",
      q: "What materials do you specify for structural reinforcement?",
      a: "We only source high-tensile hot-rolled steel rebar, high-grade local sand-portland cement composites, and safety-audited glass assemblies. All material specifications are documented in our construction contract dossiers before site mobilization.",
    },
  ];

  const categories = ["All", "General", "Services", "Construction Process", "Pricing & Quotes"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setFaqOpen(faqOpen === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeFilter === "All" || faq.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      ref={container}
      className="w-full bg-[#F6F4ED] text-black pt-24 pb-16 overflow-hidden"
    >
      {/* FAQ Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
            Help Desk
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sora tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 font-dm-sans max-w-xl text-base md:text-lg">
            Find immediate answers regarding building regulations, permit
            administration, pricing structures, and engineering parameters.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center border-b border-black/5 pb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full font-sora text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#f78f36] text-white shadow-md"
                    : "bg-white border border-black/5 hover:bg-[#f78f36]/10 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search questions..."
              className="pl-10 pr-4 py-2.5 rounded-full bg-white border-black/5 focus:border-[#f78f36] font-dm-sans text-sm w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Expandable Accordions Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredFaqs.map((faq) => {
                const isOpen = faqOpen === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                    >
                      <span className="font-bold font-sora text-base md:text-lg text-black group-hover:text-[#f78f36] transition-colors pr-4">
                        {faq.q}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[#f78f36]/10 flex items-center justify-center text-gray-500 shadow flex-shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#f78f36]" />
                        ) : (
                          <Plus className="w-4 h-4 text-black" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 font-dm-sans text-sm md:text-base text-gray-600 border-t border-black/5 leading-relaxed bg-gray-50/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 font-dm-sans text-lg">
                No questions match your query.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Support desk trigger */}
      <section className="mx-6 md:mx-12 lg:mx-24 bg-[#1C1917] rounded-3xl overflow-hidden py-16 px-8 flex flex-col justify-center items-center text-center gap-6 shadow-2xl relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <HelpCircle className="w-12 h-12 text-[#f78f36]" />
        <h2 className="text-3xl font-sora font-semibold text-white max-w-2xl">
          Still Have Questions?
        </h2>
        <p className="text-gray-400 font-dm-sans text-base max-w-lg -mt-3">
          If you didn&lsquo;t find the answers you need, direct your inquiries
          to our operations desk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button className="bg-[#f78f36] hover:bg-white hover:text-black text-white text-base font-bold font-sora px-6 py-4.5 rounded-xl border border-[#f78f36] cursor-pointer transition-colors duration-300 flex items-center gap-2">
              Contact Support Office <ArrowRight className="w-4.5 h-4.5" />
            </Button>
          </Link>
          <a href="tel:+2348111511103">
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black text-base font-bold font-sora px-6 py-4.5 rounded-xl cursor-pointer transition-colors duration-300 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Speak with Engineer
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Page;
