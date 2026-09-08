import { div } from "motion/react-client";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ServicesWeRender = () => {
  const service = [
    {
      title: "Design-Build",
      image: "/design.jpg",
      description:
        "With design-build, one team carries your project from first sketch to final handover. Designers, engineers and builders sit at the same table from day one, so ideas are tested against real budgets and real schedules before a single block is laid. You deal with one contract, one point of accountability and far fewer surprises — which usually means a faster programme and a cleaner cost outcome.",
    },
    {
      title: "Interior Design",
      image: "/interior.png",
      description:
        "A building only becomes a place once the inside works. Our interior design team shapes light, materials, colour and flow so every room feels intentional and comfortable to use. From concept boards and finish selections to bespoke joinery and furniture layouts, we design interiors that reflect your brand or your lifestyle — and we detail them so they can actually be built well on site.",
    },
    {
      title: "Value Engineering",
      image: "/value.png",
      description:
        "Value engineering is about protecting quality while removing waste. We review the design, materials, methods and sequencing line by line, then propose alternatives that deliver the same performance for less money or less time. Nothing is cut blindly: every option comes with the cost, lifespan and maintenance implications set out clearly, so you decide with the full picture in front of you.",
    },
    {
      title: "Civil Engineering",
      image: "/civileng.jpeg",
      description:
        "Solid work below and around a building matters as much as the structure itself. Our civil engineering services cover site investigation, earthworks, foundations, drainage, retaining structures, roads, and water and sewer networks. We design and construct infrastructure that handles real loads and real weather, keeping your site stable, well drained and safe for decades.",
    },
    {
      title: "Project Consulting",
      image: "/procon.png",
      description:
        "Sometimes what you need first is clear advice. We act as your independent adviser — testing feasibility, preparing budgets and programmes, reviewing designs and tenders, managing risk and reporting honestly on progress. Whether you are weighing up a site, comparing bids or rescuing a stalled scheme, we give you the information and the options to make confident decisions.",
    },
    {
      title: "General Contracting",
      image: "/generalcon.png",
      description:
        "As your general contractor we take full responsibility for building the works. We resource the site, procure materials, engage and supervise specialist subcontractors, enforce safety and quality standards, and drive the programme to completion. You get one accountable partner, transparent progress reporting and a finished building that matches the drawings and the specification.",
    },
    {
      title: "Pre-construction Services",
      image: "/preserve.png",
      description:
        "The decisions made before mobilisation shape the whole project. In pre-construction we handle site appraisal and surveys, permits and approvals, cost planning and estimating, procurement strategy, programme development and risk assessment. By the time work starts, the budget is realistic, the sequence is agreed and the obstacles have already been identified and priced.",
    },
    {
      title: "Construction Management",
      image: "/conman.png",
      description:
        "Construction management keeps a complex site coordinated and calm. We plan and monitor the programme, manage trades and deliveries, control cost and change, run quality inspections and enforce health and safety on the ground. Clear weekly reporting means you always know where the project stands on time, money and quality — long before problems become expensive.",
    },
    {
      title: "Renovation and Remodeling",
      image: "/workers.png",
      description:
        "Existing buildings often have more potential than people expect. We renovate and remodel homes, offices and commercial spaces — reworking layouts, upgrading structure and services, refreshing finishes and improving energy performance. We work cleanly and in phases where needed, so occupied spaces stay usable while the property is brought back to life.",
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
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="p-0 w-full h-[23rem] rounded-md cursor-pointer transition-transform hover:scale-[1.02]">
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
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-sora text-xl">
                  {item.title}
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm md:text-base text-gray-600 font-sora leading-relaxed">
                {item.description}
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeRender;
