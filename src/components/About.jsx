import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen mt-56 md:mt-0">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-12">About</p>
        </div>

        <p className="text-xl mt-20 text-justify">
        Hello, I'm <span className="text-red-500">Aayush Poudel</span>, a passionate frontend developer ready to make my mark in the digital landscape. With a keen eye for design and a hunger for knowledge, I'm on an exciting journey to bring captivating web experiences to life. Through a blend of creativity and technical skills, I strive to create visually stunning and user-friendly websites that leave a lasting impression. I believe in the power of clean code and pixel-perfect precision to deliver seamless interactions and delightful user journeys. My journey as a frontend developer is fueled by continuous learning and staying up-to-date with the latest industry trends. I'm eager to collaborate, grow, and create meaningful digital solutions that make a difference. Let's embark on this exciting adventure together and shape the future of web development.
        </p>

        <br />

        <p className="text-xl text-justify">
        I believe that effective collaboration and communication are vital in delivering successful projects. I thrive in dynamic team environments where ideas are shared and innovation is fostered. By working closely with clients, designers, and fellow developers, I strive to create solutions that not only meet the objectives but also exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
