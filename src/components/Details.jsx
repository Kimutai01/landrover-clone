import React from "react";
import { BsFillCarFrontFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { RiSteering2Fill } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { GrLocationPin } from "react-icons/gr";

import "./Details.css";

const Details = () => {
  return (
    <div className=" pt-24 flex items-center">
      <div className="p-6" style={{ borderRight: "1px solid #000" }}>
        <BsFillCarFrontFill size={30} />
        <div className="flex items-center">
          <AiOutlineRight />
          <h1>Build your own</h1>
        </div>
        <p className="para">
          Use the configurator to design your perfect Land Rover
        </p>
      </div>

      <div className="p-6" style={{ borderRight: "1px solid #000" }}>
        <RiSteering2Fill size={30} />
        <div className="flex items-center">
          <AiOutlineRight />
          <h1>Book a test drive</h1>
        </div>
        <p className="para">
          Arrange an on-road test drive through your nearest retailer
        </p>
      </div>

      <div className="p-6" style={{ borderRight: "1px solid #000" }}>
        <BiMessage size={30} />
        <div className="flex items-center">
          <AiOutlineRight />
          <h1>Request a call back</h1>
        </div>
        <p className="para">Fill in your details and we’ll be in touch.</p>
      </div>

      <div className="p-6">
        <GrLocationPin size={30} />
        <div className="flex items-center">
          <AiOutlineRight />
          <h1>Locate us now</h1>
        </div>
        <p className="para">Search for a Land Rover Retailer near You</p>
      </div>
    </div>
  );
};

export default Details;
