  import React from 'react';
  import Image from 'next/image';
  import food from '/public/images/food.svg';
  import leaf from '/public/images/leaf.svg';
  import rightleaf from '/public/images/rightblurleaf.svg';
  import frame1 from '/public/images/frame1.svg';
  import frame2 from '/public/images/frame2.svg';
  import frame3 from '/public/images/frame3.svg';
  import frame4 from '/public/images/frame4.svg';

  const frames = [
    { icon: frame1, title: 'Great Location', description: 'Turnip greens yarrow ricebean rutabaga' },
    { icon: frame2, title: 'Home Made', description: 'Turnip greens yarrow ricebean rutabaga' },
    { icon: frame3, title: 'Nature First', description: 'Turnip greens yarrow ricebean rutabaga' },
    { icon: frame4, title: 'Healthy Food', description: 'Turnip greens yarrow ricebean rutabaga' },
  ];

export default function OfferSection() {
  return (
    <section
      className="relative px-4 sm:px-6 py-12 md:py-10 bg-[#f8f7f2]"
      style={{
        backgroundImage: `url(${rightleaf.src})`,
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 30%',
      }}
    >
      {/* Top Right Decorative Leaf */}
      <div className="absolute h-[100px] w-[50px] -top-10 right-0 md:w-[150px] md:h-[300px] md:-top-30 lg:w-[200px] lg:h-[400px] lg:-top-40">
        <Image 
          src={leaf} 
          alt="leaf-img" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-y-8 md:gap-y-0 md:gap-x-12 lg:gap-x-0 relative">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center order-last md:order-first">
          <Image
            src={food}
            alt="Delicious Food"
            className="w-[250px] h-[252px] xs:w-[301px] xs:h-[304px] sm:w-[350px] sm:h-[353px] md:w-[400px] md:h-[404px] lg:w-[428px] lg:h-[432px]"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 px-4 sm:px-0 order-first md:order-last text-left md:text-left space-y-4 sm:space-y-10">
          <div >
            <p className="text-xs xs:text-[18px] sm:text-[18px] text-[#8EC63F] font-semibold">WE OFFER</p>
            <h1 className="text-3xl xs:text-[64px] sm:text-[60px] lg:text-[64px] font-bold text-gray-800 mt-1 sm:mt-2">
              <span className="text-[#8EC63F]">Free </span>Delivery!
            </h1>
          </div>
          <p className="text-gray-600 leading-relaxed text-xs xs:text-[16px] sm:text-[16px] max-w-xl md:max-w-[525px] mx-auto md:mx-0">
            Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water
            spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion
            chickpea gram corn nuts salsify bunya pie sprout coriander water.
          </p>
          <div className="flex justify-start md:justify-start">
            <button className="bg-[#8EC63F] shadow-lg cursor-pointer text-white rounded-full px-6 py-2 text-sm  w-[150px] h-[50px] sm:text-[16px] sm:px-2 sm:py-1 font-medium transition duration-300 hover:bg-[#76a831] focus:outline-none focus:ring-2 focus:ring-[#8EC63F] focus:ring-opacity-50">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4  lg:w-[1004px] sm:px-6">
        <div className="bg-white  shadow-lg lg:w-[1004px] lg:h-[164px] rounded-sm p-8 sm:p-6 md:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {frames.map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-[57.536842346191406px] h-[81.99980163574219px] object-contain"
                  />
                </div>
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-[16px] font-bold text-gray-900 ">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-sm text-gray-600 mt-1 sm:mt-2 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





