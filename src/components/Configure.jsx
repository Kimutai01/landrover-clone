import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import range from "../assets/range.jpg";
import { RiSteering2Fill } from "react-icons/ri";
import sport from "../assets/sport.jpg";

const Configure = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse pt-40 md:pt-0">
        <div className="md:p-20 p-4 md:w-[40%] bg-[#e9ecec]">
          <h2 className="uppercase p-4 font-bold text-2xl">
            Configure your finance offer
          </h2>
          <p className="p-4">
            Find the perfect offer or finance package to help you purchase your
            Land Rover vehicle.
          </p>
          <button className="bg-[#000] flex text-[#fff] items-center ml-4 py-6 mt-6 uppercase hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-[#000]">
            <AiOutlineArrowRight size={25} className=" mr-2" />
            <p className="mr-2">Explore current financial offers</p>
          </button>
        </div>
        <div className="md:w-[60%] md:h-[70%]">
          <img className="w-full" src={range} alt="range" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse md:pt-0">
        <div className="md:p-20 p-4 md:w-[40%] bg-[#e9ecec]">
          <h2 className="uppercase p-4 font-bold text-2xl">
            BOOK A TEST DRIVE
          </h2>
          <p className="p-4">
            Arrange an on-road test drive through your nearest retailer
          </p>
          <button className="bg-[#000] flex text-[#fff] items-center ml-4 py-6 mt-6 uppercase hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-[#000]">
            <AiOutlineArrowRight size={25} className="ml-3 mr-2" />
            <p className="mr-4">Book a test drive</p>
          </button>
        </div>
        <div className="md:w-[60%] md:h-[70%]">
          <img className="w-full" src={sport} alt="range" />
        </div>
      </div>
    </>
  );
};

export default Configure;
