import { motion } from "motion/react";
import { Button } from "../ui/button";
import AnimatedCounter from "../AnimatedCounter";
import Link from "next/link";

const AboutUs = () => {
  const MotionButton = motion.create(Button);

  const stats = [
    { from: 0, to: 142, label: "Projects Completed" },
    { from: 0, to: 9, label: "Years Experience" },
    { from: 0, to: 120, label: "Happy Clients" },
    { from: 0, to: 85, label: "Expert Workers" },
  ];

  return (
    <div
      className="relative flex w-full bg-cover bg-fixed bg-center h-full justify-center"
      style={{ backgroundImage: "url('/whp.jpg')" }}
    >
      <div className="absolute h-full inset-0 bg-black/80" />

      <div className="relative flex flex-col items-center justify-center gap-5 md:gap-12 py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-[#f78f36] font-bold font-sora tracking-widest text-xs uppercase">
            WHO WE ARE
          </span>
          <h1 className="text-2xl md:text-3xl text-[#f1f1f1] font-semibold text-center font-sora max-w-3xl">
            A Transformative World of Infrastructure & Engineering Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-dm-sans max-w-4xl text-center leading-relaxed">
            We’re redefining the built environment through integrated
            infrastructure and engineering expertise. From concept to
            completion, we deliver innovative, high-quality solutions tailored
            to the evolving needs of modern projects. With a seamless
            approach—where vision meets precision—we create spaces that inspire
            and endure the test of time.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 w-full pt-6 border-t border-white/10"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center gap-2">
              <p className="text-3xl md:text-4xl text-[#f78f36] font-extrabold font-sora">
                <AnimatedCounter from={stat.from} to={stat.to} />+
              </p>
              <p className="text-gray-300 text-sm md:text-base font-semibold font-sora capitalize">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/about">
            <MotionButton
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-base font-semibold font-sora bg-[#F78F36] hover:bg-white hover:text-[#F78F36] cursor-pointer border border-[#F78F36] px-8 py-3 rounded transition-all duration-300"
            >
              Read Full Story
            </MotionButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
