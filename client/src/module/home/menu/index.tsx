import React from "react";
const menuItems1 = [
  {
    title: "TOMATO CAPRESE",
    price: "$ 4.00",
    description: "Heirloom cherry tomatoes, high-quality extra-virgin olive oil",
  },
  {
    title: "TOMATO CAPRESE",
    price: "$ 4.00",
    description: "Heirloom cherry tomatoes, high-quality extra-virgin olive oil",
  },
  {
    title: "TOMATO CAPRESE",
    price: "$ 4.00",
    description: "Heirloom cherry tomatoes, high-quality extra-virgin olive oil",
  },
];

const menuItems2 = [
  {
    title: "TOMATO CAPRESE",
    price: "$ 4.00",
    description: "Heirloom cherry tomatoes, high-quality extra-virgin olive oil",
  },
  {
    title: "TOMATO CAPRESE",
    price: "$ 4.00",
    description: "Heirloom cherry tomatoes, high-quality extra-virgin olive oil",
  },
  {
    title: "TOMATO CAPRESE",
    price: "$ 4.00",
    description: "Heirloom cherry tomatoes, high-quality extra-virgin olive oil",
  },
];



export default function MenuSection() {
  return (
    <section className="bg-[#f8f7f2] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center flex flex-col gap-4">
          <p className="text-[#8EC63F] text-[16px] md:text-[18px] font-medium">TASTY & CRUNCHY</p>
          <h1 className="text-3xl md:text-[64px] font-bold">Our Menu</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Inspired by recipes and creations of world’s best chefs
          </p>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col md:flex-row gap-5 sm:gap-20 w-full justify-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {menuItems1.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 border-b border-gray-300 pb-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <h1>{item.title}</h1>
                  <p>{item.price}</p>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {menuItems2.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 border-b border-gray-300 pb-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <h1>{item.title}</h1>
                  <p>{item.price}</p>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#8EC63F] text-white text-sm md:text-base font-medium py-3 px-6 cursor-pointer rounded-full hover:bg-[#7bb52d] transition">
          VIEW FULL MENU
        </button>
      </div>
      

     



    </section>
  );
}
