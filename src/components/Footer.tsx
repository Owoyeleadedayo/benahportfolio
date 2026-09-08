import React from "react";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";


const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#F6F4ED] justify-between items-start md:items-center px-6 md:px-22 lg:px-35 py-8 border-t-1 gap-4">
        <div className="max-w-md">
          <p className="text-sm md:text-md text-black font-normal">
            People who are looking for Extraordinary projects need vision &
            precision to be exceptional. They need Benah World Wide Services.
          </p>
        </div>
        <div>
          <p className="text-sm md:text-md text-black font-normal">
            All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <p className="text-sm md:text-md text-black font-normal capitalize">
            Follow us on social media:
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="bg-white p-2 rounded-sm">
              <Facebook fill="#1877F2" color="#1877F2" />
            </div>
            <div className="bg-white p-2 rounded-sm">
              <Instagram color="#FD1D1D" />
            </div>
            <div className="bg-white p-2 rounded-sm">
              <div className="p-[1px] bg-black rounded-full">
                <X color="white" />
              </div>
            </div>
            <div className="bg-white p-2 rounded-sm">
              <Linkedin fill="#1877F2" color="#1877F2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
