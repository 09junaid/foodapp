import React from "react";
import Image from "next/image";
import bgsec from "/public/images/bgsec.svg";
import blurleafbig from "/public/images/blurleafbig.svg";
import leaf from "/public/images/leaf.svg";

const valuesSection = [
  { value: "370", text: "CASES COMPLETED" },
  { value: "97", text: "EXPERTS WORKING" },
  { value: "100%", text: "SATISFIED CLIENTS" },
  { value: "128", text: "AWARDS WINNING" },
];

export default function MeetUsSection() {
  return (
    <section
      className="relative bg-cover h-full sm:h-auto bg-center bg-no-repeat p-8"
      style={{ backgroundImage: `url(${bgsec.src})` }}
    >
      {/* Top left blurred leaf */}
      <div className="absolute -top-20 left-0 sm:-top-30 sm:left-0 z-0 w-[200px] md:w-[400px] max-w-[500px]">
        <Image src={blurleafbig} alt="background leaf" className="w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className="relative mt-20 lg:h-[390px] sm:mt-3 sm:p-4 lg:px-30 z-10 max-w-7xl mx-auto text-white text-center flex flex-col items-center gap-5  sm:gap-12">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-4 px-2 sm:px-0">
          <p className="text-[#8EC63F] text-sm md:text-[18px] font-medium uppercase tracking-wider">
            MEET US BETTER
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight">
            Our Taverna in Numbers
          </h1>
          <div className="h-[3px] w-[94.5px] bg-[#8EC63F] rounded"></div>
          <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-sm md:text-[16px] leading-relaxed">
            Inspired by recipes and creations of world’s best chefs
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-0 w-full">
          {valuesSection.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-0 sm:gap-6">
              <h1 className="text-[64px]  font-bold">
                {item.value}
              </h1>
              <p className="text-[16px] text-[#8EC63F] font-medium uppercase tracking-wide">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom right leaf */}
      <div className="absolute -bottom-15 right-0 sm:-bottom-30 sm:right-0 w-24 sm:w-32 md:w-40 lg:w-52 z-0">
        <Image src={leaf} alt="leaf" className="w-full h-auto" />
      </div>
    </section>
  );
}
