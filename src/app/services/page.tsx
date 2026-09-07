"use client";
import React, { useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  HardHat,
  Compass,
  ClipboardCheck,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

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

  const services = [
    {
      title: "Residential Construction",
      icon: Home,
      image: "/workers.png",
      description: "We design and build bespoke custom homes, luxury multi-family estates, and perform high-end structural conversions tailored to modern family living.",
      features: [
        "New home construction & layouts",
        "Full-scale residential renovations",
        "Premium interior finishes & spatial remodeling",
      ],
    },
    {
      title: "Commercial Construction",
      icon: Building2,
      image: "/conman.png",
      description: "Delivering state-of-the-art office buildings, retail spaces, warehouses, and hotel architectures with high safety specifications.",
      features: [
        "Corporate offices & high-rises",
        "Shopping plazas & commercial layouts",
        "Hotel & hospitality construction engineering",
      ],
    },
    {
      title: "Civil Engineering",
      icon: HardHat,
      image: "/civileng.jpeg",
      description: "Specialized infrastructure works including community road networks, culverts, bridge developments, and municipal utilities.",
      features: [
        "Municipal road networks & grading",
        "Reinforced concrete bridges & culverts",
        "Drainage systems & community layout works",
      ],
    },
    {
      title: "Architectural Design",
      icon: Compass,
      image: "/design.jpg",
      description: "Creative concepts merged with structural viability. We compile complete blueprint plans, mechanical schematics, and 3D architectural renders.",
      features: [
        "Photorealistic 3D visualization renders",
        "Detailed structural & electrical framing planning",
        "Urban space allocation & landscaping designs",
      ],
    },
    {
      title: "Project Management",
      icon: ClipboardCheck,
      image: "/procon.png",
      description: "Ensuring site compliance, safety protocols, and budget tracking. We direct material logistics and manage subcontractor teams.",
      features: [
        "Strict budget planning & expense auditing",
        "Critical path scheduling & timeline monitoring",
        "Continuous on-site quality & compliance checks",
      ],
    },
    {
      title: "Renovation & Maintenance",
      icon: Wrench,
      image: "/interior.png",
      description: "Enhance the life cycle and market value of existing buildings. We repair concrete cracks, re-pipe plumbing systems, and modernise layouts.",
      features: [
        "Structural repairs & reinforcement works",
        "Fibre optic, HVAC & electrical upgrades",
        "Preventative building maintenance contracts",
      ],
    },
  ];

  return (
    <div ref={container} className="w-full bg-[#F6F4ED] text-black pt-24 pb-16 overflow-hidden">
      
      {/* Services Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
            Core Expertise
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sora tracking-tight">
            Our Professional Services
          </h1>
          <p className="text-gray-600 font-dm-sans max-w-xl text-base md:text-lg">
            We provide full-spectrum construction and engineering services using the highest standards of safety, quality control, and advanced design technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="bg-white border border-black/5 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg group hover:shadow-2xl hover:border-black/10 transition-all duration-300"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-w-768px) 100vw, 350px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[#f78f36] text-white flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold font-sora text-black group-hover:text-[#f78f36] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-dm-sans text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Checklist */}
                    <ul className="flex flex-col gap-2 mt-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700 font-dm-sans">
                          <CheckCircle className="w-4.5 h-4.5 text-[#f78f36] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0 mt-auto">
                  <Link href={`/quote?service=${encodeURIComponent(service.title)}`}>
                    <Button className="w-full bg-[#f78f36] hover:bg-black hover:text-white border border-[#f78f36] text-white font-sora font-semibold py-3.5 rounded-xl cursor-pointer transition-all duration-300 flex justify-center items-center gap-2">
                      Request Consultation <ArrowRight className="w-4.5 h-4.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Request a Quote CTA Section */}
      <section className="mx-6 md:mx-12 lg:mx-24 bg-[#1C1917] rounded-3xl overflow-hidden shadow-2xl relative">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="text-[#f78f36] font-bold font-sora text-sm uppercase tracking-wider">
              GET A QUOTE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-sora text-white leading-tight">
              Have a Custom Project? Let’s Build It.
            </h2>
            <p className="text-gray-400 font-dm-sans text-base max-w-xl">
              Tell us your structural requirements, budget boundaries, and timeline, and we’ll compile a comprehensive pricing plan.
            </p>
          </div>
          <Link href="/quote" className="flex-shrink-0">
            <Button className="bg-white hover:bg-[#f78f36] hover:text-white text-black text-lg font-bold font-sora px-8 py-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center gap-2 shadow-xl border-none">
              Start Free Estimate <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Page;
