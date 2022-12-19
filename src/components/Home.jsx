import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/img.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 h-screen pt-12 sm:pt-0"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto items-center justify-center h-full px-4 md:flex-row  ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am Full stack Developer
          </h2>
          <p className="text-gray-500 max-w-md py-4">
            A self-motivated and enthusiastic web developer with a deep interest
            in JavaScript.
          </p>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white px-6 py-3  my-2 w-fit flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Let's Connect
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
