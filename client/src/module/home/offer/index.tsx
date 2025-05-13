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
        className="relative px-4 py-20 bg-[#f8f7f2]"
        style={{
          backgroundImage: `url(${rightleaf.src})`,
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Top Left Decorative Leaf */}
        <div className="absolute h-[200px] -top-15 right-0 w-[100px] md:w-[200px] md:h-[400px] md:-top-30  md:right-0">
          <Image src={leaf} alt="leaf-img"/>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 relative ">
          {/* Left Image Section */}
          <div className="w-full order-last md:order-first md:w-1/2 flex justify-center">
            <Image src={food} alt="Delicious Food" className="max-w-full h-auto" />
          </div>

          {/* Right Content Section */}
          <div className="w-full order-first md:order-last md:w-1/3 text-start md:text-left space-y-12">
            <div>
              <p className="text-[14px] sm:text-[18px] text-[#8EC63F] font-semibold">WE OFFER</p>
              <h1 className="text-[42px] sm:text-[64px] font-bold text-gray-800 mt-2">
                <span className="text-[#8EC63F]">Free  </span>Delivery!</h1>
            </div>
            <p className="text-gray-600 leading-relaxed text-[14px] sm:text-[16px]">
              Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water
              spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion
              chickpea gram corn nuts salsify bunya pie sprout coriander water.
            </p>
            <button className="bg-[#8EC63F] cursor-pointer text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 hover:bg-[#76a831]">
              Order Now
            </button>
          </div>
        </div>

        {/* Features / Frames Section */}
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:mt-0">
    <div className="bg-white shadow-lg rounded-sm p-8 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {frames.map((item, index) => (
          <div key={index} className="flex items-center gap-6 py-4"> {/* Added py-6 */}
            <div className="w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
              <Image 
                src={item.icon} 
                alt={`${item.title} icon`} 
                width={60} 
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex-1 ">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mt-2 leading-normal">
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
