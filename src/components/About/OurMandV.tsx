import React from "react";

const OurMandV = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-[30%_70%] ">
          <div>
            <p className="text-5xl text-black font-sora font-medium">
              Our
              <br /> Vision
            </p>
          </div>
          <div>
            <p className="text-2xl text-black font-sora font-normal">
              To be a trusted leader in shaping the future by delivering
              sustainable, innovative, and high-quality construction solutions
              that strengthen communities, enrich lives, and inspire lasting
              progress.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[30%_70%] ">
          <div>
            <p className="text-5xl text-black font-sora font-medium">
              Our
              <br /> Mission
            </p>
          </div>
          <div>
            <p className="text-2xl text-black font-sora font-normal">
              Our mission is to deliver innovative, high-quality, and
              sustainable construction solutions that exceed client
              expectations, uphold safety and integrity, contribute to stronger
              communities, and set new industry standards for lasting progress.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMandV;
