import React from 'react';
import Image from 'next/image';
import img1 from '/public/images/img1.svg';
import img2 from '/public/images/img2.svg';
import img3 from '/public/images/img3.svg';
import img4 from '/public/images/img4.svg';
import img5 from '/public/images/img5.svg';
import img6 from '/public/images/img6.svg';

const images1 = [img1, img2, img3];
const images2 = [img4, img5, img6];

export default function GallerySection() {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="flex justify-center items-center flex-col gap-6 text-center">
          <p className="text-[#8EC63F] font-medium text-[18px]">TASTY & CRUNCHY</p>
          <h1 className="text-4xl md:text-[64px] font-bold">Our Gallery</h1>
          <p className="text-gray-600 text-[14px] md:text-[16px] max-w-xl mx-auto">
            Inspired by recipes and creations of the world’s best chefs
          </p>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          {[images1, images2].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full"
            >
              {row.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden shadow-md"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    width={220}         // desktop size
                    height={220}
                    className="object-cover w-[334px] h-full sm:w-full sm:h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
