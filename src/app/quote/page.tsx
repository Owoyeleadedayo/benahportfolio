"use client";
import React, { useState, useContext, useRef, useEffect } from "react";
import { TransitionContext } from "@/context/TransitionContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Check, ClipboardList, ShieldAlert, Award, FileText } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const container = useRef(null);
  const { timeline } = useContext(TransitionContext);
  const searchParams = useSearchParams();

  useGSAP(
    () => {
      gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1, duration: 0.6 });
      timeline.add(gsap.to(container.current, { opacity: 0, duration: 0.6 }));
    },
    { scope: container }
  );

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Residential Construction",
    budget: "10M - 50M NGN",
    timeline: "1-3 Months",
    location: "",
    description: "",
    drawingLink: "",
  });

  // Pre-fill service if provided in URL params
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: decodeURIComponent(serviceParam) }));
    }
  }, [searchParams]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateStep = (currentStep: number) => {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Full name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    } else if (currentStep === 2) {
      if (!formData.location.trim()) newErrors.location = "Project location state is required";
    } else if (currentStep === 3) {
      if (!formData.description.trim()) newErrors.description = "Project description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      setStep(4); // Show success screen
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "Residential Construction",
      budget: "10M - 50M NGN",
      timeline: "1-3 Months",
      location: "",
      description: "",
      drawingLink: "",
    });
    setStep(1);
    setErrors({});
  };

  return (
    <div ref={container} className="w-full bg-[#F6F4ED] text-black pt-24 pb-16 overflow-hidden">
      
      {/* Page Header */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-md py-1 px-3">
            Get Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sora tracking-tight">
            Request an Estimate
          </h1>
          <p className="text-gray-600 font-dm-sans max-w-xl text-base md:text-lg">
            Submit your project specifications through our structured application form, and our engineering desk will compile a draft bill-of-quantities.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto bg-white border border-black/5 rounded-3xl p-8 md:p-10 shadow-lg relative">
          
          {/* Progress Bar (Only show if not on success screen) */}
          {step < 4 && (
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex justify-between items-center text-xs font-sora font-semibold text-gray-400">
                <span>STEP {step} OF 3</span>
                <span className="text-[#f78f36]">
                  {step === 1 && "CONTACT INFORMATION"}
                  {step === 2 && "PROJECT SPECIFICATIONS"}
                  {step === 3 && "DETAILS & SUBMIT"}
                </span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#f78f36]"
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Steps Display */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl font-bold font-sora border-b border-black/5 pb-2">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-semibold font-sora text-gray-700">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span className="text-xs text-rose-600 font-dm-sans">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-semibold font-sora text-gray-700">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="text-xs text-rose-600 font-dm-sans">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-sm font-semibold font-sora text-gray-700">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <span className="text-xs text-rose-600 font-dm-sans">{errors.phone}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="company" className="text-sm font-semibold font-sora text-gray-700">Company Name (Optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="e.g. Luxair Ltd"
                      className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button
                    onClick={handleNext}
                    className="bg-[#f78f36] hover:bg-black hover:text-white border border-[#f78f36] text-white font-sora font-semibold py-3.5 px-8 rounded-xl cursor-pointer transition-all flex items-center gap-2"
                  >
                    Next Step <ArrowRight className="w-4.5 h-4.5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl font-bold font-sora border-b border-black/5 pb-2">
                  Project Specifications
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service" className="text-sm font-semibold font-sora text-gray-700">Type of Service Needed</Label>
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

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="budget" className="text-sm font-semibold font-sora text-gray-700">Project Budget Range</Label>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="timeline" className="text-sm font-semibold font-sora text-gray-700">Desired Project Timeline</Label>
                    <select
                      id="timeline"
                      className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4 text-sm font-dm-sans text-gray-700 h-[46px] focus:outline-none"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option>Start Immediately</option>
                      <option>1 - 3 Months</option>
                      <option>3 - 6 Months</option>
                      <option>Planning / Bid Only</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="location" className="text-sm font-semibold font-sora text-gray-700">Project Location State (Nigeria) *</Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="e.g. Lagos, FCT Abuja"
                      className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                    {errors.location && <span className="text-xs text-rose-600 font-dm-sans">{errors.location}</span>}
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <Button
                    onClick={handlePrev}
                    className="bg-transparent border border-black/10 text-gray-700 font-sora font-semibold py-3.5 px-6 rounded-xl cursor-pointer hover:bg-gray-50 flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4.5 h-4.5" /> Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="bg-[#f78f36] hover:bg-black hover:text-white border border-[#f78f36] text-white font-sora font-semibold py-3.5 px-8 rounded-xl cursor-pointer transition-all flex items-center gap-2"
                  >
                    Next Step <ArrowRight className="w-4.5 h-4.5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-xl font-bold font-sora border-b border-black/5 pb-2">
                  Project Details
                </h3>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="desc" className="text-sm font-semibold font-sora text-gray-700">Project Description & Materials Scope *</Label>
                  <Textarea
                    id="desc"
                    placeholder="Describe building parameters, layout designs, specific structural reinforcement items, site conditions..."
                    className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 min-h-[140px] py-3.5 px-4 font-dm-sans text-sm"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                  {errors.description && <span className="text-xs text-rose-600 font-dm-sans">{errors.description}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="drawing" className="text-sm font-semibold font-sora text-gray-700">Design Link (e.g. PDF drawings / CAD files / Revit links)</Label>
                  <Input
                    id="drawing"
                    type="url"
                    placeholder="https://drive.google.com/..."
                    className="rounded-xl border border-black/10 focus:border-[#f78f36] bg-gray-50/50 py-3.5 px-4"
                    value={formData.drawingLink}
                    onChange={(e) => setFormData({ ...formData, drawingLink: e.target.value })}
                  />
                </div>

                <div className="flex justify-between mt-4">
                  <Button
                    onClick={handlePrev}
                    className="bg-transparent border border-black/10 text-gray-700 font-sora font-semibold py-3.5 px-6 rounded-xl cursor-pointer hover:bg-gray-50 flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4.5 h-4.5" /> Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="bg-[#f78f36] hover:bg-black hover:text-white border border-[#f78f36] text-white font-sora font-semibold py-3.5 px-10 rounded-xl cursor-pointer transition-all flex items-center gap-2 shadow-lg"
                  >
                    Submit Quotation Request <ArrowRight className="w-4.5 h-4.5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center shadow-lg animate-bounce">
                  <Check size={40} />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold font-sora text-black">
                    Inquiry Successfully Logged!
                  </h3>
                  <p className="text-gray-500 font-dm-sans text-base max-w-md">
                    Thank you, <strong>{formData.name}</strong>. Our senior cost estimators and structural planning engineers are reviewing your specifications. We will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                  <Button
                    onClick={handleReset}
                    className="bg-[#f78f36] hover:bg-black text-white font-sora font-semibold py-3 px-8 rounded-xl cursor-pointer border border-[#f78f36]"
                  >
                    Submit Another Estimate
                  </Button>
                  <Button
                    onClick={() => window.location.href = "/"}
                    className="bg-transparent border border-black/10 text-black hover:bg-black hover:text-white font-sora font-semibold py-3 px-8 rounded-xl cursor-pointer"
                  >
                    Return Home
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Safety Compliance Statement */}
      <section className="py-12 px-6 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 text-center md:text-left mt-8 opacity-75">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-[#f78f36]">
          <FileText className="w-5 h-5" />
        </div>
        <p className="text-xs text-gray-500 font-dm-sans leading-relaxed">
          * Information submitted through this portal is safeguarded by BENAH's strict corporate privacy protocols and NDAs. Data is only accessed by structural engineers and cost estimators in charge of constructing your project budget.
        </p>
      </section>

    </div>
  );
};

export default Page;
