import { div } from "motion/react-client";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

const ServicesWeRender = () => {
  const service = [
    {
      title: "Design-Build",
      image: "/design.jpg",
    },
    {
      title: "Interior Design",
      image: "/interior.png",
    },
    {
      title: "Value Engineering",
      image: "/value.png",
    },
    {
      title: "Civil Engineering",
      image: "/civileng.jpeg",
    },
    {
      title: "Project Consulting",
      image: "/procon.png",
    },
    {
      title: "General Contracting",
      image: "/generalcon.png",
    },
    {
      title: "Pre-construction Services",
      image: "/preserve.png",
    },
    {
      title: "Construction Management",
      image: "/conman.png",
    },
    {
      title: "Renovation and Remodeling",
      image: "/workers.png",
    },
  ];
  return (
    <div className="flex flex-col w-full  px-6 md:px-25 lg:px-37 py-10 md:py-20 gap-5 md:gap-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <Badge className="bg-[#E6EAF1] text-[#497CAB] font-bold uppercase font-sora text-xs">
          Services We Render
        </Badge>
        <p className="text-base md:text-lg text-black font-medium font-sora text-center max-w-full md:max-w-2xl">
          We offer end-to-end construction solutions designed to bring your
          vision to life with precision and excellence. Our services encompass
          every phase of construction, from initial planning and design to
          project management and final execution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {service.map((item, index) => (
          <Card key={index} className="p-0 w-full h-[23rem] rounded-md">
            <CardContent className="flex flex-col p-0 gap-2">
              <div className="relative w-full h-[20rem]">
                <Image
                  src={item.image}
                  alt="workers"
                  fill
                  className="rounded-t-md object-cover"
                />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-lg text-black font-sora font-medium">
                  {item.title}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeRender;
