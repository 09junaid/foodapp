import React from "react";
import Image from "next/image";
import food1 from "/public/images/food1.svg";
import food2 from "/public/images/food2.svg";
import food3 from "/public/images/food3.svg";
import food4 from "/public/images/food4.svg";

const foodList = [
  {
    icon: food1,
    title: "Gorgeous Appetizers",
    description: "Inspired by recipes and creations of world’s best chefs",
    link: "VIEW FULL MENU",
  },
  {
    icon: food2,
    title: "Gorgeous Appetizers",
    description: "Inspired by recipes and creations of world’s best chefs",
    link: "BOOK YOUR TABLE",
  },
  {
    icon: food3,
    title: "Gorgeous Appetizers",
    description: "Inspired by recipes and creations of world’s best chefs",
    link: "CONTACT US",
  },
  {
    icon: food4,
    title: "Gorgeous Appetizers",
    description: "Inspired by recipes and creations of world’s best chefs",
    link: "MORE DETAILS",
  },
];

export default function ChoosingSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="flex flex-col justify-center items-center gap-10 text-center">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8 max-w-2xl">
          <p className="text-[16px] md:text-[18px] text-[#8EC63F] font-semibold">
            TASTY & CRUNCHY
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-[64px] font-bold leading-tight">
            Choose & Enjoy
          </h1>
          <p className="text-gray-600 text-sm lg:mt-2 sm:text-base">
            Inspired by recipes and creations of world’s best chefs
          </p>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 w-full max-w-6xl">
          {foodList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4"
            >
              <Image
                src={item.icon}
                alt="icon"
                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]"
              />

              <div className="max-w-[170px] md:max-w-[180px] lg:max-w-[190px] w-full flex flex-col items-center sm:items-start text-center md:text-left">
                <h3 className="font-semibold text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-justify text-gray-600 mt-1 w-[150px] md:w-full">
                  {item.description}
                </p>
              </div>

              <div className="w-full flex justify-center">
                <button className="relative cursor-pointer text-[12px] font-semibold hover:text-[#8EC63F] transition-all group">
                  {item.link}
                  <div className="mt-2 h-[2px] bg-[#8EC63F] w-full mx-auto transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
