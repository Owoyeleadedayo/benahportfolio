"use client";
import React, { useState, useContext, useRef } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, MapPin, Heart, ShieldAlert, Award, ArrowRight, X } from "lucide-react";

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
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

  const jobs: Job[] = [
    {
      title: "Senior Project Manager",
      department: "Construction Management",
      location: "Lagos Office / Site Deploy",
      type: "Full-Time",
      description: "Direct massive structural works from initial mobilization to handover. Oversee budget, subcontractors, and timelines.",
      requirements: [
        "Bachelor's in Civil Engineering or Building Technology",
        "8+ years managing commercial or large residential site works",
        "COREN certification or equivalent project management credentials",
      ],
    },
    {
      title: "BIM & CAD Coordinator",
      department: "Architectural & Planning",
      location: "Ikeja, Lagos",
      type: "Full-Time",
      description: "Produce, review, and synchronize complex 3D Revit models and structural blueprints for engineering teams.",
      requirements: [
        "Advanced proficiency in Autodesk Revit, AutoCAD, and Navisworks",
        "3+ years active building modeling experience",
        "Outstanding layout planning and team coordination skills",
      ],
    },
    {
      title: "Site Health & Safety Officer",
      department: "Safety & Compliance",
      location: "Abuja Site",
      type: "Contract-Based",
      description: "Audit work conditions, implement risk assessments, enforce PPE compliance, and direct safety education modules.",
      requirements: [
        "Recognized Health & Safety certification (e.g. ISPON, NEBOSH)",
        "4+ years active construction site safety auditing",
        "Zero-compromise attitude towards protocol compliance",
      ],
    },
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      desc: "We offer attractive monthly pay packages, project performance bonuses, and travel allowances for site postings.",
      icon: Award,
    },
    {
      title: "Zero-Incident Safety",
      desc: "Our core workplace value is returning everyone home safely. We invest heavily in premium gear and safety education.",
      icon: ShieldAlert,
    },
    {
      title: "Health & Well-being",
      desc: "Full comprehensive medical HMO cover for employees and direct family dependants, plus mental health support.",
      icon: Heart,
    },
    {
      title: "Growth & Training",
      desc: "Paid training seminars, professional subscription sponsorships (COREN, NIA), and rapid leadership promotion tracks.",
      icon: Briefcase,
    },
  ];

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Senior Project Manager",
    resume: "",
    coverLetter: "",
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application successfully submitted! Thank you, ${formData.name}. Our HR department will review your profile shortly.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "Senior Project Manager",
      resume: "",
      coverLetter: "",
    });
    setSelectedJob(null);
  };

  return (
    <div ref={container} className="w-full bg-[#F6F4ED] text-black pt-24 pb-16 overflow-hidden">
      
      {/* Page Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
            Careers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sora tracking-tight">
            Build the Future With Us
          </h1>
          <p className="text-gray-600 font-dm-sans max-w-xl text-base md:text-lg">
            We are looking for passionate architects, structural engineers, and project leaders to help construct landmark developments.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 bg-white border border-black/5 rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold font-sora text-center">
            Employee Benefits & Perks
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#f78f36]/10 text-[#f78f36] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-sora text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-dm-sans leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className="text-2xl md:text-4xl font-bold font-sora">
            Available Positions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <Card
                key={job.title}
                className="bg-white border border-black/5 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold font-sora text-[#f78f36] uppercase tracking-wider bg-[#f78f36]/10 px-2 py-1 rounded">
                      {job.type}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-dm-sans">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-sora text-black">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-dm-sans leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5">
                  <Button
                    onClick={() => {
                      setSelectedJob(job);
                      setFormData((prev) => ({ ...prev, position: job.title }));
                    }}
                    className="w-full bg-transparent hover:bg-[#f78f36] hover:text-white text-[#f78f36] border border-[#f78f36] font-semibold py-2.5 rounded-lg cursor-pointer transition-colors"
                  >
                    View Details & Apply
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Drawer / Section */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-lg">
          <h2 className="text-2xl font-bold font-sora text-black mb-2">
            Submit Open Application
          </h2>
          <p className="text-sm text-gray-500 font-dm-sans mb-6">
            If your desired position is not listed, apply using this form, and our recruitment team will log your profile for future openings.
          </p>

          <form onSubmit={handleApply} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="fullname" className="text-sm font-semibold font-sora text-gray-700">Full Name</Label>
                <Input
                  id="fullname"
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-sm font-semibold font-sora text-gray-700">Email Address</Label>
                <Input
                  id="email"
                  required
                  type="email"
                  placeholder="jane@example.com"
                  className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-sm font-semibold font-sora text-gray-700">Phone Number</Label>
                <Input
                  id="phone"
                  required
                  type="tel"
                  placeholder="+234 800 000 0000"
                  className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="position" className="text-sm font-semibold font-sora text-gray-700">Position of Interest</Label>
                <select
                  id="position"
                  className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4 text-sm font-dm-sans text-gray-700 h-[46px] focus:outline-none"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                >
                  <option>Senior Project Manager</option>
                  <option>BIM & CAD Coordinator</option>
                  <option>Site Health & Safety Officer</option>
                  <option>General Engineering (Civil/Structural)</option>
                  <option>Other / Administration</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="resume" className="text-sm font-semibold font-sora text-gray-700">Resume Link (e.g. Google Drive/Dropbox)</Label>
              <Input
                id="resume"
                required
                type="url"
                placeholder="https://drive.google.com/..."
                className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                value={formData.resume}
                onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="cover" className="text-sm font-semibold font-sora text-gray-700">Short Cover Letter / Personal Statement</Label>
              <Textarea
                id="cover"
                required
                placeholder="Tell us about your structural credentials, safety records, or architectural portfolio achievements..."
                className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 min-h-[120px] py-3 px-4 font-dm-sans"
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full bg-[#f78f36] hover:bg-black hover:text-white border border-[#f78f36] text-white font-sora font-semibold py-4 rounded-xl cursor-pointer transition-all duration-300 flex justify-center items-center gap-2">
              Submit Application <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-8 text-black shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold font-sora text-[#f78f36] uppercase tracking-wider bg-[#f78f36]/10 px-2.5 py-1 rounded w-fit">
                    {selectedJob.type}
                  </span>
                  <h2 className="text-2xl font-bold font-sora">{selectedJob.title}</h2>
                  <div className="flex items-center gap-4 text-xs font-dm-sans text-gray-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#f78f36]" /> {selectedJob.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#f78f36]" /> {selectedJob.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-bold font-sora text-base">Job Description</h4>
                  <p className="text-sm text-gray-600 font-dm-sans leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h4 className="font-bold font-sora text-base">Key Requirements</h4>
                  <ul className="flex flex-col gap-2">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-dm-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f78f36] mt-2 mr-1 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <Button
                    onClick={() => {
                      setSelectedJob(null);
                      // Scroll to apply form
                      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                    }}
                    className="w-full bg-[#f78f36] hover:bg-black hover:text-white border border-[#f78f36] text-white font-semibold py-3 rounded-xl cursor-pointer"
                  >
                    Apply Now
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
