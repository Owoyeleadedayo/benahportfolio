import React from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { CircleCheckBig } from "lucide-react";

const WhatWeDo = () => {
    const services = [
        {name: "Construction management", icon: CircleCheckBig},
        {name: "Design-build services", icon: CircleCheckBig},
        {name: "General contracting", icon: CircleCheckBig},
    ]
  return (
    <div className="flex flex-col w-full py-10 md:py-20 px-6 md:px-20 lg:px-35 gap-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <Badge className="bg-[#E6EAF1] text-[#497CAB] font-semibold font-sora uppercase text-xs mb-3">
          What We Do
        </Badge>
        <h2 className="font-semibold capitalize text-base md:text-lg lg:text-3xl text-center font-sora mb-2">
          Our distinctive approach to engineering and construction
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex rounded-3xl overflow-hidden h-full">
            <video autoPlay muted loop playsInline>
              <source src="/video/construct.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 md:gap-6 justify-start items-start"
        >
          <div>
            <p className="max-w-[30rem] text-base md:text-xl font-medium text-center md:text-start">
              We pride ourselves in bringing originality and attention to detail
              to every project. We prioritize clarity and quality, avoiding the
              conventional shortcuts, to deliver results that are not only
              visually stunning but also genuinely effective.
            </p>
          </div>
          <Card
            className="relative flex h-full w-full md:w-[32rem] md:h-[9rem] justify-center items-center overflow-hidden"
            style={{ backgroundImage: "url('/caa.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative flex flex-col md:flex-row w-full justify-start items-center md:justify-between py-2 px-2 md:px-10 gap-2">
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-3xl md:text-4xl text-white font-semibold">
                  15+
                </p>
                <p className="text-base text-white font-medium">
                  Years of Experience
                </p>
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                {services.map((service) => (
                  <div
                    className="flex justify-center items-center gap-2"
                    key={service.name}
                  >
                    <service.icon color="white" />
                    <p className="text-base md:text-lg text-teal-50 font-medium">
                      {service.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
