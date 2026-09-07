import { Hotel } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "motion/react"


const OurServices = () => {
    const services = [
      {
        id: 1,
        icon: Hotel,
        image: "/comcons.jpg",
        title: "Commercial Construction",
        desc: "Expert construction services for office buildings, retail spaces, and mixed-use developments with focus on efficiency and quality",
      },
      {
        id: 2,
        icon: Hotel,
        image: "/induscons.jpg",
        title: "Industrial Projects",
        desc: "Specialized engineering for manufacturing facilities, warehouses, and industrial complexes with advanced technical requirements.",
      },
      {
        id: 3,
        icon: Hotel,
        image: "/infras.jpg",
        title: "Infrastructure Development",
        desc: "Comprehensive infrastructure solutions including roads, bridges, utilities, and transportation systems for communities.",
      },
    ];
  return (
    <>
      <div className="flex flex-col gap-10 py-10 md:py-20 px-6 md:px-25 lg:px-35 bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center"
        >
          <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold font-sora text-xs uppercase mb-2">
            Our Services
          </Badge>
          <h2 className="font-semibold text-base md:text-3xl text-center font-sora mb-2">
            Comprehensive Engineering Solutions
          </h2>
          <p className="max-w-2xl font-normal text-sm md:text-base text-gray-600 font-sora text-center">
            From concept to completion, we deliver exceptional construction
            engineering services tailored to your needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-6 md:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg min-h-[250px] p-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 scale-110 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-4">
                    <div>
                      <Icon
                        size={35}
                        className="bg-[#ECEEF4] p-1 rounded-md transition-all duration-300 group-hover:bg-white"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="font-semibold font-sora text-lg transition-colors duration-300 group-hover:text-white">
                        {service.title}
                      </p>

                      <p className="font-normal font-sora text-base text-gray-600 transition-colors duration-300 group-hover:text-white/90 group-hover:font-medium">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurServices;
