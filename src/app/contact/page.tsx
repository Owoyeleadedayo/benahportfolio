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
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FAQItem {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Residential Construction",
    budget: "10M - 50M NGN",
    message: "",
  });

  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your project inquiry has been received. Our sales engineer will call you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Residential Construction",
      budget: "10M - 50M NGN",
      message: "",
    });
  };

  const faqs: FAQItem[] = [
    {
      q: "What is your typical timeline for a standard duplex build?",
      a: "A standard residential duplex usually takes 6 to 9 months from site preparation to keys handover. This depends on building layout complexity, structural parameters, and weather circumstances.",
    },
    {
      q: "Do you handle regulatory government building permits?",
      a: "Yes, BENAH handles all municipal, state, and Federal planning approvals. Our team compiles drawings, submits dossiers to authorities (like LASBCA in Lagos), and coordinates inspections.",
    },
    {
      q: "How does the payment schedule work for engineering contracts?",
      a: "We operate on a milestones-based valuation structure. Following a mobilization deposit, subsequent payments are tied to verified site completions (e.g. sub-structure, framing, finishing).",
    },
    {
      q: "What regions in Nigeria do you actively serve?",
      a: "We are headquartered in Ikeja, Lagos and actively deploy project teams to worksites in Abuja, Delta State (Sapele/Asaba), Imo State (Owerri), and neighboring Southern regions.",
    },
    {
      q: "Can we bring our own architectural drawings for project construction?",
      a: "Yes. Our structural and mechanical engineers will review your pre-existing drawings for site compliance, execute structural calculations, make recommendations, and proceed with contracting.",
    },
  ];

  return (
    <div ref={container} className="w-full bg-[#F6F4ED] text-black pt-24 pb-16 overflow-hidden">

      {/* Contact Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sora tracking-tight">
            Connect With Our Team
          </h1>
          <p className="text-gray-600 font-dm-sans max-w-xl text-base md:text-lg">
            Have questions about a project, tenders, or pricing estimates? Let's discuss how we can build it together.
          </p>
        </div>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-lg flex flex-col gap-6">
              <h2 className="text-2xl font-bold font-sora text-black mb-2">
                Office Information
              </h2>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f78f36]/10 text-[#f78f36] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-sora text-sm text-gray-500 uppercase">Head Office</h4>
                  <p className="text-gray-800 font-dm-sans text-base mt-1">
                    43, Oritshe Street, Awolowo Way, Ikeja, Lagos, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f78f36]/10 text-[#f78f36] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-sora text-sm text-gray-500 uppercase">Telephone</h4>
                  <p className="text-gray-800 font-dm-sans text-base mt-1 hover:text-[#f78f36] transition-colors">
                    <a href="tel:+2348111511103">+234 (0) 811 151 1103</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f78f36]/10 text-[#f78f36] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-sora text-sm text-gray-500 uppercase">Email Address</h4>
                  <p className="text-gray-800 font-dm-sans text-base mt-1 hover:text-[#f78f36] transition-colors">
                    <a href="mailto:benahworld@gmail.com">benahworld@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f78f36]/10 text-[#f78f36] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-sora text-sm text-gray-500 uppercase">Working Hours</h4>
                  <p className="text-gray-800 font-dm-sans text-base mt-1">
                    Monday – Friday: 8:00 AM – 5:00 PM <br />
                    Saturday: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl font-bold font-sora text-black mb-6">
                Inquire About a Project
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="fullname" className="text-sm font-semibold font-sora text-gray-700">Full Name</Label>
                    <Input
                      id="fullname"
                      required
                      type="text"
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
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
                    <Label htmlFor="service" className="text-sm font-semibold font-sora text-gray-700">Service Needed</Label>
                    <select
                      id="service"
                      className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4 text-sm font-dm-sans text-gray-700 h-[46px] focus:outline-none"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Civil Engineering</option>
                      <option>Architectural Design</option>
                      <option>Project Management</option>
                      <option>Renovation & Maintenance</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="budget" className="text-sm font-semibold font-sora text-gray-700">Estimated Project Budget</Label>
                  <select
                    id="budget"
                    className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4 text-sm font-dm-sans text-gray-700 h-[46px] focus:outline-none"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option>Under 10 Million NGN</option>
                    <option>10 Million - 50 Million NGN</option>
                    <option>50 Million - 200 Million NGN</option>
                    <option>Above 200 Million NGN</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="msg" className="text-sm font-semibold font-sora text-gray-700">Project Description & Details</Label>
                  <Textarea
                    id="msg"
                    required
                    placeholder="Describe your project, material expectations, location specificities..."
                    className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 min-h-[120px] py-3 px-4 font-dm-sans"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#f78f36] hover:bg-black hover:text-white border border-[#f78f36] text-white font-sora font-semibold py-4 rounded-xl cursor-pointer transition-all duration-300 flex justify-center items-center gap-2">
                  Send Inquiries <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-4 border border-black/5 rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.469412297753!2d3.3254885554199256!3d6.601187599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a9d31d7803%3A0xb8abce960c50fe64!2sOritshe%20Street!5e0!3m2!1sen!2sng!4v1715768951955!5m2!1sen!2sng"
              className="w-full h-[400px] md:h-[480px] rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Common FAQ Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">

          <div className="flex flex-col items-center text-center gap-4">
            <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
              FAQ Section
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold font-sora tracking-tight">
              Common Questions
            </h2>
            <p className="text-gray-600 font-dm-sans text-base max-w-lg">
              Frequently asked inquiries regarding pricing estimation, safety compliance, and governmental approvals.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 border border-black/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                  >
                    <span className="font-bold font-sora text-base md:text-lg text-black group-hover:text-[#f78f36] transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 shadow flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 text-[#f78f36]" /> : <Plus className="w-4 h-4 text-black" />}
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
                        <div className="px-6 pb-6 pt-1 font-dm-sans text-sm md:text-base text-gray-600 border-t border-black/5 leading-relaxed bg-white/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* consultation banner */}
      <section className="mx-6 md:mx-12 lg:mx-24 bg-[#1C1917] rounded-3xl overflow-hidden py-16 px-8 flex flex-col justify-center items-center text-center gap-6 shadow-2xl relative mt-20">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <p className="text-white text-3xl font-sora font-semibold max-w-2xl leading-relaxed">
          Need a site assessment or design review?
        </p>
        <p className="text-gray-400 font-dm-sans text-base max-w-lg -mt-3">
          Our senior structural engineers are available for phone or physical site consultations.
        </p>
        <Link href="/quote">
          <Button className="bg-[#f78f36] hover:bg-white hover:text-black text-white text-lg font-bold font-sora px-8 py-5 rounded-xl border border-[#f78f36] cursor-pointer transition-colors duration-300 flex items-center gap-2">
            Schedule Site Consultation <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </section>

    </div>
  );
};

export default Page;
