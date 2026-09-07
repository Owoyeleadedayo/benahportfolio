"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 lg:px-24 py-4 ${
          scrolled
            ? "bg-[#1C1917]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              <div className="relative w-28 h-8 md:w-36 md:h-10">
                <Image
                  src="/logo.png"
                  alt="Benah World Wide Logo"
                  fill
                  sizes="(max-w-768px) 112px, 144px"
                  className="object-contain cursor-pointer"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link key={link.name} href={link.href}>
                  <span
                    className={`relative text-sm font-medium font-sora capitalize cursor-pointer py-1 transition-colors duration-300
                                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                                after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#f78f36] 
                                after:transition-all after:duration-300 
                                hover:after:w-full hover:text-[#f78f36] ${
                                  isActive
                                    ? "text-[#f78f36] after:w-full"
                                    : scrolled
                                      ? "text-white"
                                      : "text-white"
                                }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/quote" className="hidden md:block">
              <Button className="text-white text-xs md:text-sm font-semibold font-sora bg-[#F78F36] hover:bg-white hover:text-[#F78F36] border border-[#F78F36] cursor-pointer rounded px-4 py-2 transition-all duration-300">
                Request Quote <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-[#f78f36] transition-colors p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-full w-full bg-[#1C1917] border-b border-white/10 shadow-2xl overflow-hidden md:hidden"
            >
              <div className="flex flex-col px-6 py-8 gap-6">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium font-sora block py-1 transition-colors ${
                          isActive ? "text-[#f78f36]" : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4 border-t border-white/10"
                >
                  <Link href="/quote" onClick={() => setIsOpen(false)}>
                    <Button className="w-full text-white text-base font-semibold font-sora bg-[#F78F36] hover:bg-white hover:text-[#F78F36] border border-[#F78F36] py-3 rounded cursor-pointer transition-all duration-300 flex justify-center items-center">
                      Request Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
