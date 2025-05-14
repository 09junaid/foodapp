import React from 'react'
import Image from 'next/image'
import clock from "/public/images/clock.svg"
import location from "/public/images/location.svg"
import facebook from "/public/images/facebook.svg"
import linkedin from "/public/images/linkedin.svg"
import pinterest from "/public/images/pinterest.svg"
import twitter from "/public/images/twitter.svg"
import map from "/public/images/map.svg"

const icons = [facebook, linkedin, pinterest, twitter];

export default function FooterSection() {
  return (
    <footer className="bg-white ">
      <div className="flex flex-col ">

        {/* Top Section */}
        <div className="flex w-full flex-col lg:flex-row lg:h-[445px]">
          
          {/* Left Info */}
          <div className="flex flex-col lg:flex-row w-full bg-black">
            <div className="flex text-white flex-col gap-4 lg:gap-6 px-4 lg:px-6 py-6 lg:py-8 w-full lg:w-1/2 justify-center lg:justify-center lg:pl-[15%]">
              <h1 className="text-[11.53px] sm:text-[16px] font-semibold bg-[#8EC63F] px-2  sm:py-1 rounded-md w-max h-[20.890670776367188px] sm:h-[29px]">CALL US</h1>
              <h2 className="text-[23px] sm:text-[32px] font-medium">+0123254568589</h2>
              
              {/* Clock Info */}
              <div className="flex gap-4 lg:gap-8 items-center">
                <Image 
                  src={clock} 
                  alt="clock" 
                  className="w-[40.3px] h-[40.3px] sm:w-[56px] sm:h-[56px] mt-1" 
                  width={56}
                  height={56}
                />
                <div className="text-[10.09px] sm:text-[14px] flex flex-col justify-center gap-1">
                  <p>Mon–Thu: 11.00 – 23.00</p>
                  <p>Sat: 12.00 – 23.00</p>
                  <p>Sun: 12.00 – 21.00</p>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex gap-4 lg:gap-8 items-center">
                <Image 
                  src={location} 
                  alt="location" 
                  className="w-[40.3px] h-[40.3px] lg:w-[56px] lg:h-[56px] mt-1" 
                  width={80}
                  height={80}
                />
                <div className="text-[10.09px] sm:text-[14px] flex flex-col justify-center gap-1">
                  <p>60 East 65th Street</p>
                  <p>New York City</p>
                  <p>NY 10065</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 lg:gap-10 mt-2">
                {icons.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon}
                    alt={`social-${index}`}
                    className="w-[8.2px] h-[16.6px] sm:w-[23.0px] sm:h-[24.4px] hover:opacity-80 cursor-pointer"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center  lg:p-0 lg:h-[445px]">
              <Image
                src={map}
                alt="map"
                className="w-full lg:h-[445px] lg:max-h-none object-cover"
                width={800}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-around items-center gap-2 sm:gap-6 bg-[#7ab733] p-6 sm:p-8 lg:p-16 w-full lg:h-[151px] text-center">
          <h1 className="text-[22px]  sm:text-[40px] text-white font-medium">
            DOWNLOAD OUR MENU
          </h1>
          <button className="px-4 sm:px-10 py-2 sm:py-4 border-2 border-white text-white cursor-pointer text-[10.27px] sm:text-[14px] font-semibold rounded-full hover:bg-white hover:text-[#7ab733] transition-all whitespace-nowrap">
            DOWNLOAD
          </button>
        </div>
      </div>
    </footer>
  );
}