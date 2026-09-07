import React from "react";

const OurCoreValues = () => {
  return (
    <>
      <div className="grid grid-cols-[30%_70%] pt-0">
        <div>
          <p className="text-5xl text-black font-sora font-medium">
            Our
            <br /> Core Values
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-2xl text-black font-sora font-normal">
            Our core values serve as the guiding principles that drive our
            organization forward. With a focus on excellence, integrity,
            innovation, safety, sustainability and customer-centric focus. We
            are committed to delivering exceptional results while making a
            positive impact on the world around us.
          </p>
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col px-6 py-3 justify-center items-center border rounded-lg shadow-md gap-3">
              <p className="text-xl text-black font-dm-sans font-semibold">
                Excellence
              </p>
              <p className="text-base text-black font-sora font-light">
                Our focus on quality manifests at every stage of our working
                process, from proper planning of activities through to
                immaculate execution. This consistent emphasis towards increased
                quality and expertise makes us an exceptional representative of
                the profession.
              </p>
            </div>
            <div className="flex flex-col px-6 py-3 justify-center items-center border rounded-lg shadow-md gap-3">
              <p className="text-xl text-center text-black font-dm-sans font-semibold">
                Integrity
              </p>
              <p className="text-base text-black font-sora font-light">
                We uphold the highest standards of integrity, conducting our
                business with unwavering honesty, transparency, and
                accountability. By fostering trust and long-term relationships
                with clients, partners, and stakeholders, we build a solid
                foundation for success.
              </p>
            </div>
            <div className="flex flex-col px-6 py-3 justify-center items-center border rounded-lg shadow-md gap-3">
              <p className="text-xl text-black font-dm-sans font-semibold">
                Innovation
              </p>
              <p className="text-base text-black font-sora font-light">
                Innovation is central to our organization. We seek cutting-edge
                technologies and practices to optimize efficiency, enhance
                productivity, and drive continuous improvement. By staying
                ahead, we ensure our clients benefit from the most advanced
                solutions available.
              </p>
            </div>
            <div className="flex flex-col px-6 py-3 justify-center items-center border rounded-lg shadow-md gap-3">
              <p className="text-xl text-black font-dm-sans font-semibold">
                Safety
              </p>
              <p className="text-base text-black font-sora font-light">
                Worker, subcontractor, and community safety matters a great
                deal. We follow best practice and regulations for the purposes
                of safe operations and creating a safe environment.
              </p>
            </div>
            <div className="flex flex-col px-6 py-3 justify-center items-center border rounded-lg shadow-md gap-3">
              <p className="text-xl text-black font-dm-sans font-semibold">
                Sustainability
              </p>
              <p className="text-base text-black font-sora font-light">
                We aim to reduce our environmental impact and call for
                sustainable construction. Our commitment goes beyond compliance
                as we construct more resilient, healthy environments. Through
                sustainability, we aim for a positive legacy.
              </p>
            </div>
            <div className="flex flex-col px-6 py-3 justify-center items-center border rounded-lg shadow-md gap-3">
              <p className="text-xl text-black text-center font-dm-sans font-semibold">
                Customer-Centric Focus
              </p>
              <p className="text-base text-black font-sora font-light">
                We place our customers at the center of everything we do. By
                understanding their unique needs and exceeding their
                expectations, we build strong, lasting relationships that drive
                mutual success. Our dedication to providing exceptional service
                ensures our clients achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCoreValues;
