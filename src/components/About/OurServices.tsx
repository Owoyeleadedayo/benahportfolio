import React from "react";
import { Badge } from "../ui/badge";

const OurServices = () => {
  const badgeContent = [
    {title: ""},
    {title: ""},
    {title: ""},
    {title: ""},
    {title: ""},
    {title: ""},
    {title: ""},
    {title: ""},
    {title: ""},
  ]
  return (
    <>
      <div className="grid grid-cols-[30%_70%] pt-16">
        <div>
          <p className="text-5xl text-black font-sora font-medium">
            Our
            <br /> Services
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {badgeContent.map((item, index) => (
            <Badge key={index} className="bg-transparent w-[220px] border-1 border-black text-md text-black font-dm-sans">{item.title}</Badge>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
