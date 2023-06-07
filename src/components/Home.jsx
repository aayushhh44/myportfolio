import React from "react";
import myImage from "../assets/myImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name= "home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="mt-52 md:flex flex-col justify-center h-full">
          <h2 className="font-bold text-3xl sm:text-4xl sm:pt-64 md:pt-0 ">I'm a Frontend Developer</h2>
          <p className="py-4 max-w-md text-justify mr-8">
          Welcome to <span className="text-red-500">Aayush Poudel's</span> digital playground! I'm a passionate beginner frontend developer on a mission to create stunning web experiences. Through clean code and captivating design, I strive to bring ideas to life. Join me on this exciting journey as we explore the realm of frontend development together!
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group w-fit px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-gray-500 to-black text-white">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

    {/* IMG */}
        <div>
        <img src={myImage} alt="My profile" className="rounded-2xl w-3/3 h-60 md:w-full mb-20 md:mt-56" />
        </div>

      </div>
    </div>
  );
};

export default Home;
