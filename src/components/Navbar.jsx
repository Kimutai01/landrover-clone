import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 text-[#000] z-40 ">
      <div className="flex flex-start items-center w-full h-full 2xl:px-16">
        <div className="md:hidden ml-4">
          {nav ? (
            <AiOutlineClose
              size={25}
              onClick={handleNav}
              className="z-10 text-{#000} mt-4"
            />
          ) : (
            <BiMenuAltRight size={25} onClick={handleNav} className="mt-4" />
          )}
        </div>
        <div className="bg-[#fff] h-[100%] px-2">
          <Link to="/">
            <h1 className="py-4 text-2xl px-10 font-extrabold cursor-pointer">
              Land
            </h1>
          </Link>
        </div>
        <div className="bg-[#fff] md:bg-[#fff]  h-[100%]  px-6 flex justify-end text-[#000]">
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
              Explore sv
            </li>
            <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
              Vehicles
            </li>
            <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
              Purchase
            </li>
            <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
              Range rover family
            </li>

            <li className="ml-10 text-sm uppercase py-6 hover:text-[#75fbfd]">
              Owners
            </li>

            <li className="ml-10 text-sm uppercase text-[#000] py-6 px-10">
              Explore
            </li>
          </ul>
          <div className="flex ml-20  md:ml-56">
            <AiOutlineSearch size={25} className="z-10 text-{#000} mt-4 mr-8" />
            <CiLocationOn size={25} onClick={handleNav} className="mt-4" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed  top-20 w-full h-screen bg-black/70" : "hidden"
        }
      >
        <div
          className={
            nav
              ? "fixed w-[100%] sm:w-[60%] top-20 md-[45%] h-[55%] bg-[#fff]  ease-in duration-500"
              : "fixed left-[-100%] h-[55%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="text-[#000]">
            <ul className="py-4 flex flex-col">
              <Link
                to="/"
                className=" w-[100%]"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-1xl">Explore sv</li>
              </Link>
              <Link
                to="#about"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">VEHICLES</li>
              </Link>
              <Link
                to="#skills"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">PURCHASE</li>
              </Link>
              <Link
                to="#projects"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">RANGE ROVER FAMILY</li>
              </Link>
              <Link
                to="#mentorship"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">OWNERS</li>
              </Link>
              <Link
                to="#contact"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">EXPLORE</li>
              </Link>
            </ul>
            <div className="flex items-center justify-between sm:w-[60%] px-10">
              <Link to="https://www.linkedin.com/in/kimutai01">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaLinkedinIn />
                </div>
              </Link>

              <Link to="https://github.com/Kimutai01">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaGithub />
                </div>
              </Link>
              <Link to="mailto:kiprotichkimutai01@gmail.com">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <AiOutlineMail />
                </div>
              </Link>

              <Link to="tel: +254790841979">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <BsPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
