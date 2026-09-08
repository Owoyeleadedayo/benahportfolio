"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import gsap from "gsap";
import OurServices from "@/components/OurServices";
import WhatWeDo from "@/components/Home/WhatWeDo";
import AboutUs from "@/components/Home/AboutUs";
import ServicesWeRender from "@/components/Home/ServicesWeRender";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import ProcessSection from "@/components/Home/ProcessSection";
import Testimonials from "@/components/Home/Testimonials";
import HomeCTA from "@/components/Home/HomeCTA";

export default function Home() {
  const MotionButton = motion.create(Button);
  const container = useRef(null);
  const { timeline } = useContext(TransitionContext);

  useGSAP(
    () => {
      gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1, duration: 0.6 });
      timeline.add(gsap.to(container.current, { opacity: 0, duration: 0.6 }));
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex w-full h-[600px] md:h-screen items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/caa1.jpg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="max-w-xl md:max-w-6xl text-3xl md:text-5xl lg:text-6xl text-white font-semibold font-sora leading-tight tracking-tight text-start">
              Benah World Wide is an innovative firm designing life-enhancing, sustainable architecture.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/project">
              <MotionButton
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                className="text-white text-base font-semibold font-sora bg-[#F78F36] hover:bg-white hover:text-[#F78F36] cursor-pointer border border-[#F78F36] px-8 py-3.5 rounded transition-all duration-300"
              >
                View Projects
              </MotionButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <OurServices />

      <WhatWeDo />

      <AboutUs />

      <WhyChooseUs />

      <ServicesWeRender />

      <FeaturedProjects />

      <ProcessSection />

      {/* Mid-page Statement banner */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-35">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-2xl md:text-3xl text-white font-sora font-medium leading-none md:leading-relaxed">
              At Benah World Wide, we are driven to change lives for the better by creating places and spaces that positively impact the people who use them and the environment that surrounds them.
            </p>
            <div className="flex justify-start">
              <Link href="/project">
                <Button className="flex items-center gap-2 text-base text-white font-medium font-dm-sans border border-white/20 hover:bg-white hover:text-black py-3 px-6 rounded-none cursor-pointer transition-all duration-300">
                  View More Projects <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full lg:w-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/gabe.jpg"
              alt="Benah Site Operations"
              fill
              sizes="(max-w-768px) 100vw, 450px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <Testimonials />

      <HomeCTA />
    </div>
  );
}
