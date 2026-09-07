"use client";
import React, { useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail, Award, ShieldCheck, Compass, Users } from "lucide-react";
import OurCoreValues from "@/components/About/OurCoreValues";
import OurMandV from "@/components/About/OurMandV";

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

  const team = [
    {
      name: "Engr. Gabriel Adebayo",
      role: "Founder & Chief Executive Officer",
      image: "/uncgabe.png",
      linkedin: "#",
      twitter: "#",
      email: "gabriel@benahworld.com",
    },
    {
      name: "Ar. Chioma Nwachukwu",
      role: "Principal Architect",
      image: "/uncgabe.png",
      linkedin: "#",
      twitter: "#",
      email: "chioma@benahworld.com",
    },
    {
      name: "Engr. Yusuf Danjuma",
      role: "Director of Civil Projects",
      image: "/uncgabe.png",
      linkedin: "#",
      twitter: "#",
      email: "yusuf@benahworld.com",
    },
    {
      name: "Mrs. Funmi Alao",
      role: "Head of Project Finance",
      image: "/uncgabe.png",
      linkedin: "#",
      twitter: "#",
      email: "funmi@benahworld.com",
    },
  ];

  const milestones = [
    { year: "2016", title: "Company Founded", desc: "Incorporated with CAC (RC No. 1376432) starting with residential works." },
    { year: "2018", title: "Commercial Breakthrough", desc: "Awarded our first corporate headquarters contract, demonstrating robust engineering standards." },
    { year: "2021", title: "Infrastructure Expansion", desc: "Contracted for major educational and civil engineering tasks across Nigeria." },
    { year: "2024", title: "ISO Certification", desc: "Attained ISO certifications for outstanding safety performance and structural quality control." },
  ];

  const valueFeatures = [
    {
      title: "Zero-Compromise Safety",
      desc: "Our safety-first protocols guard every worker, site visitor, and neighboring community member, keeping incidents at zero.",
      icon: ShieldCheck,
    },
    {
      title: "Advanced Value Engineering",
      desc: "We analyze building plans to reduce costs without compromising material safety, lifetime durability, or visual appeal.",
      icon: Compass,
    },
    {
      title: "Sustainable Green Building",
      desc: "We utilize eco-friendly, durable local and global materials to minimize structural environmental footprints.",
      icon: Award,
    },
    {
      title: "End-to-End Project Care",
      desc: "We orchestrate the complete design-build cycle, taking responsibility for site clearance, building structures, and interior finishing.",
      icon: Users,
    },
  ];

  return (
    <div ref={container} className="w-full bg-[#F6F4ED] text-black pt-24 pb-16 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/firstbanner.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-6">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3 self-center">
            Who We Are
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sora text-white tracking-tight leading-tight">
            Designing Future-Proof Environments
          </h1>
          <p className="text-gray-200 font-dm-sans text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            BENAH Worldwide Services Limited delivers architectural, structural, and civil engineering brilliance.
          </p>
        </div>
      </section>

      {/* Company Story & CEO Statement */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Story Content */}
          <div className="flex flex-col gap-6">
            <span className="text-[#f78f36] font-bold font-sora text-xs md:text-sm uppercase tracking-wider">
              OUR FOUNDATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight leading-tight">
              A Legacy of Quality, Trusted Across Regions
            </h2>
            <p className="text-gray-700 font-dm-sans text-base md:text-lg leading-relaxed">
              With incorporation by the Corporate Affairs Commission (RC No. 1376432) in 2016, BENAH Worldwide Services Limited is a dynamic construction and engineering company that delivers excellence in residential, commercial, and industrial developments.
            </p>
            <p className="text-gray-600 font-dm-sans text-base leading-relaxed">
              We blend innovation, sustainability, and uncompromising craftsmanship to create projects that not only meet the demands of today but also support future generations. With over 9 years of continuous growth, BENAH has made itself a trusted partner for private clients, corporates, and institutions across Nigeria.
            </p>
          </div>

          {/* CEO Card & Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-black/5 bg-white p-4">
              <div className="relative w-full h-[85%] rounded-2xl overflow-hidden">
                <Image
                  src="/uncgabe.png"
                  alt="Engr. Gabriel Adebayo - CEO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="h-[15%] flex flex-col justify-center items-start px-2">
                <p className="font-bold font-sora text-lg text-black">Engr. Gabriel Adebayo</p>
                <p className="text-sm font-semibold text-[#f78f36]">Founder & CEO</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <OurMandV />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <OurCoreValues />
        </div>
      </section>

      {/* Achievements / Milestones */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#1C1917] text-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <Badge className="bg-white/10 text-[#f78f36] border border-white/15 font-bold font-sora text-md py-1 px-3">
              Milestones
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold font-sora tracking-tight">
              Our Path to Excellence
            </h2>
            <p className="text-gray-400 font-dm-sans max-w-xl text-base">
              A historical timeline mapping out how BENAH evolved into a leading engineering firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <span className="text-[#f78f36] text-4xl font-extrabold font-sora">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold font-sora text-white">
                  {milestone.title}
                </h3>
                <p className="text-gray-400 font-dm-sans text-sm md:text-base leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F6F4ED]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold font-sora tracking-tight">
              Meet the Expert Team
            </h2>
            <p className="text-gray-600 font-dm-sans max-w-xl text-base">
              The skilled professionals directing site works, structural designs, and corporate operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col rounded-2xl overflow-hidden bg-white border border-black/5 shadow-lg group hover:shadow-2xl transition-all duration-300"
              >
                {/* Avatar */}
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-w-768px) 100vw, 250px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Details */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div>
                    <h3 className="text-lg font-bold font-sora text-black group-hover:text-[#f78f36] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-dm-sans font-medium mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-3 pt-3 border-t border-black/5">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-full bg-gray-50 hover:bg-[#f78f36] hover:text-white text-gray-500 flex items-center justify-center transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-9 h-9 rounded-full bg-gray-50 hover:bg-[#f78f36] hover:text-white text-gray-500 flex items-center justify-center transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full bg-gray-50 hover:bg-[#f78f36] hover:text-white text-gray-500 flex items-center justify-center transition-colors"
                      aria-label={`${member.name} Email`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-28">
            <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3 w-fit">
              Our Strengths
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold font-sora tracking-tight">
              Why Partner with BENAH?
            </h2>
            <p className="text-gray-600 font-dm-sans text-base">
              We leverage premium engineering technologies, robust security processes, and absolute compliance to ensure total project satisfaction.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valueFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-black/5 hover:bg-gray-100/70 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f78f36]/10 text-[#f78f36] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold font-sora text-black">
                      {feat.title}
                    </h3>
                    <p className="text-gray-600 font-dm-sans text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Page;
