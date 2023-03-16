import React from "react";
import { BsFillCarFrontFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { RiSteering2Fill } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";

import "./Details.css";

const Details = () => {
  return (
    <div className=" pt-24 flex md:flex-row flex-col md:items-center md:px-6">
      <div
        className="p-6 border-2 border-[#000] border-b-0 border-l-0 md:border-0"
        style={{ borderRight: "1px solid #000" }}
      >
        <BsFillCarFrontFill size={50} className="hidden md:block" />
        <div className="flex items-center mt-3">
          <AiOutlineRight />
          <h1 className="uppercase">Build your own</h1>
        </div>
        <p className="para hidden md:block mt-3">
          Use the configurator to design your perfect Land Rover
        </p>
      </div>

      <div
        className="p-6 border-2 border-[#000] border-b-0 border-l-0 md:border-0"
        style={{ borderRight: "1px solid #000" }}
      >
        <RiSteering2Fill size={50} className="hidden md:block" />
        <div className="flex items-center mt-3">
          <AiOutlineRight />
          <h1 className="uppercase">Book a test drive</h1>
        </div>
        <p className="para hidden md:block mt-3">
          Arrange an on-road test drive through your nearest retailer
        </p>
      </div>

      <div
        className="p-6 border-2 border-[#000] border-b-0 border-l-0 md:border-0"
        style={{ borderRight: "1px solid #000" }}
      >
        <BiMessage size={50} className="hidden md:block" />
        <div className="flex items-center mt-3">
          <AiOutlineRight />
          <h1 className="uppercase">Request a call back</h1>
        </div>
        <p className="para hidden md:block mt-3">
          Fill in your details and we’ll be in touch.
        </p>
      </div>

      <div className="p-6 border-2 border-[#000] border-b-0 border-l-0 md:border-0">
        <GrLocationPin size={50} className="hidden md:block" />
        <div className="flex items-center mt-3">
          <AiOutlineRight />
          <h1 className="uppercase">Locate us now</h1>
        </div>
        <p className="para hidden md:block mt-3">
          Search for a Land Rover Retailer near You
        </p>
      </div>
    </div>
  );
};

export default Details;
