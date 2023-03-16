import React from "react";
import "./Build.css";
import { BsFillCarFrontFill } from "react-icons/bs";
const Build = () => {
  return (
    <div className="main-build">
      <div className="bg-[#fff] absolute top-[110%] md:top-[50%] w-[100%] md:w-[25%] md:ml-16 p-4 items-center">
        <h1 className="md:text-6xl text-4xl">Build your own </h1>
        <p>Use the configurator to design your perfect Land Rover</p>
        <button className="bg-[#000] flex text-[#fff] items-center p-4 mt-6 uppercase hover:bg-[#fff] hover:text-[#000] hover:border-2 hover:border-[#000]">
          <BsFillCarFrontFill size={25} className="mr-4" />
          Build your own
        </button>
      </div>
    </div>
  );
};

export default Build;
