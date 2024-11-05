// src/components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative bg-blue-600 text-white p-4 text-center bg-cover bg-center h-80 md:h-96 lg:h-[500px]"
      style={{ backgroundImage: "url('/images/fabian-kuhne-eksdFRXS28s-unsplash.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between h-full p-4"> 
        <div className="flex flex-col justify-center flex-grow"> 
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">Welcome to My E-commerce!</h1>
          <p className="mb-4 text-xs sm:text-sm md:text-lg text-center">Find the best products at unbeatable prices.</p>
        </div>


        <div className="flex justify-end mb-4"> 
        <div  style={{ backgroundColor: '#FFF3E3' }}  className=" text-black p-4 shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl duration-300"> {/* Reduzido para max-w-xs */}
        <h2 style={{ color: '#B88E2F' }} className="text-base sm:text-lg md:text-xl font-bold text-left pb-1">
      Featured Product
    </h2>
            <p className="text-xs sm:text-sm md:text-base text-black text-left mb-4">Check out the latest trends and exclusive offers available in our store.</p>
            <div className="flex justify-start">
              <button style={{ backgroundColor: '#B88E2F' }}  className=" text-white text-sm py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
