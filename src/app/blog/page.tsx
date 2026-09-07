"use client";
import React, { useState, useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";
import { Search, Calendar, Clock, ArrowRight, X, BookOpen } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
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

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Concrete Curing: Key Tips for Achieving Maximum Structural Strength",
      category: "Construction Tips",
      date: "May 12, 2026",
      readTime: "5 min read",
      image: "/workers.png",
      excerpt: "Understand the hydration kinetics of cement and explore why moisture retention is the most critical component during the initial 7 days of concrete pouring.",
      content: "Concrete does not dry; it cures through a chemical process called hydration. In this article, our site engineering team explains the thermodynamics of curing. We detail optimal water spraying schedules, the use of curing membranes, and how temperature fluctuations can cause thermal cracking if not regulated. We also discuss why keeping the concrete wet for the first seven days increases compressive strength by up to 50% compared to dry curing.",
      author: "Engr. Gabriel Adebayo",
    },
    {
      id: 2,
      title: "How Value Engineering Protects Your Budget Without Dropping Quality",
      category: "Construction Tips",
      date: "April 28, 2026",
      readTime: "4 min read",
      image: "/design.jpg",
      excerpt: "Value engineering is not about cost-cutting; it's about cost optimization. Learn how we review drawings to save millions on materials.",
      content: "Developers often mistake value engineering for cutting corners. True value engineering analyzes the functional requirements of each system (foundation, framing, finishes) to deliver maximum performance at the lowest life-cycle cost. In this guide, we detail how BENAH redesigned a commercial foundation to save 15% on reinforced steel imports by substituting with modern high-tensile composites, maintaining identical structural safety margins.",
      author: "Ar. Chioma Nwachukwu",
    },
    {
      id: 3,
      title: "The Rise of Green Concrete and Eco-Friendly Infrastructure in Nigeria",
      category: "Industry News",
      date: "March 15, 2026",
      readTime: "6 min read",
      image: "/civileng.jpeg",
      excerpt: "Explore the ecological benefits of fly-ash substitutions and how eco-cements are transforming modern high-rises in Lagos and Abuja.",
      content: "As urbanization accelerates across West Africa, the construction sector is turning to sustainable raw materials. Green concrete, which incorporates recycled industrial aggregates like fly-ash and slag, significantly reduces CO2 emissions. We look at availability, price structures, and load-bearing profiles of green cement, and analyze how building certifications (like LEED) will influence real estate pricing in the coming years.",
      author: "Engr. Yusuf Danjuma",
    },
    {
      id: 4,
      title: "Project Update: Luxair Estate Abuja Enters Exterior Finishing Stage",
      category: "Project Updates",
      date: "February 20, 2026",
      readTime: "3 min read",
      image: "/abj.jpg",
      excerpt: "Our team has completed the structural casting of all 24 duplex units. Read about the upcoming smart cladding and paving works.",
      content: "We are thrilled to share that the Luxair Estate project in Abuja has successfully passed structural inspections. With structural shells cast, our crews are mobilizing for premium exterior cladding, perimeter wall installations, and landscaping. We highlight the integration of smart-grid solar frameworks that will supply 75% of the estate's common-area power demand, setting a new benchmark for off-grid residential comfort.",
      author: "Engr. Gabriel Adebayo",
    },
    {
      id: 5,
      title: "Building Permit Codes: What Private Developers Need to Know",
      category: "Industry News",
      date: "January 8, 2026",
      readTime: "7 min read",
      image: "/conman.png",
      excerpt: "Building compliance laws in Nigeria are evolving. Learn how to navigate approvals and structural integrity audits to prevent site seals.",
      content: "A building code violation can cause costly project suspensions and litigation. This piece breaks down the official approval guidelines, detailing required documentation, soil test validations, and the structural vetting process. We provide a checklist for private developers to streamline administrative steps, focusing on Lagos (LASBCA) and FCT regulations.",
      author: "Mrs. Funmi Alao",
    },
    {
      id: 6,
      title: "Behind the Scenes: Ruel's Place Commercial Glass Facade Installation",
      category: "Project Updates",
      date: "December 12, 2025",
      readTime: "4 min read",
      image: "/Ruel.jpg",
      excerpt: "Discover the engineering and heavy rigging required to safely install 500 square meters of double-glazed facade panels in Lagos.",
      content: "Installing 500 sqm of tempered architectural glass on a commercial tower requires massive planning and crane safety. In this case study, we document the structural calculations, wind load analyses, and structural adhesives utilized at Ruel's Place to ensure complete stability under coastal storm conditions, while optimizing heat retention parameters to reduce HVAC costs.",
      author: "Ar. Chioma Nwachukwu",
    },
  ];

  const categories = ["All", "Construction Tips", "Industry News", "Project Updates"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeFilter === "All" || post.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div ref={container} className="w-full bg-[#F6F4ED] text-black pt-24 pb-16 overflow-hidden">
      
      {/* Blog Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
            Company Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sora tracking-tight">
            Insights, Updates & Industry News
          </h1>
          <p className="text-gray-600 font-dm-sans max-w-xl text-base md:text-lg">
            Stay informed with expert construction advice, project milestones, and engineering trends shaping West Africa's real estate.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center border-b border-black/5 pb-8">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4.5 py-2.5 rounded-full font-sora text-sm font-semibold transition-all cursor-pointer ${
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
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2.5 rounded-full bg-white border-black/5 focus:border-[#f78f36] font-dm-sans text-sm w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={post.id}
                    className="flex flex-col rounded-2xl overflow-hidden bg-white border border-black/5 shadow-lg group hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-w-768px) 100vw, 350px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black/85 backdrop-blur-md text-white font-sora text-xs uppercase px-2 py-0.5 border border-white/10">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4 text-gray-400 font-sora text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#f78f36]" /> {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#f78f36]" /> {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold font-sora text-black group-hover:text-[#f78f36] transition-colors duration-300 leading-snug">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 font-dm-sans text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-black/5 mt-auto">
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="text-sm font-bold font-sora text-[#f78f36] hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent"
                        >
                          Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 font-dm-sans text-lg">No articles found matching your query.</p>
            </div>
          )}
        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 md:p-10 text-black shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black cursor-pointer"
                aria-label="Close article"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-6">
                {/* Meta */}
                <div className="flex flex-col gap-2">
                  <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-xs uppercase tracking-wider py-1 px-3 w-fit">
                    {selectedPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold font-sora leading-tight pr-8">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs font-dm-sans text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#f78f36]" /> {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#f78f36]" /> {selectedPost.readTime}
                    </span>
                    <span className="text-gray-400">|</span>
                    <span>Written by: <strong>{selectedPost.author}</strong></span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-gray-100 border border-black/5">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Body Text */}
                <div className="flex flex-col gap-4 font-dm-sans text-base text-gray-700 leading-relaxed border-t border-black/5 pt-6">
                  <p className="font-semibold text-black text-lg italic bg-gray-50 p-4 rounded-xl border-l-4 border-[#f78f36]">
                    "{selectedPost.excerpt}"
                  </p>
                  <p>{selectedPost.content}</p>
                  <p>Our specialists publish weekly articles analyzing building code changes, structural calculations, and supply chain constraints. Subscribe to our newsletter or connect with our engineering desk for tailored consultations on your designs.</p>
                </div>

                <div className="pt-6 border-t border-black/5 flex justify-end">
                  <Button
                    onClick={() => setSelectedPost(null)}
                    className="bg-black hover:bg-[#f78f36] text-white font-sora font-semibold py-2.5 px-6 rounded-xl cursor-pointer transition-colors"
                  >
                    Done Reading
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Page;
