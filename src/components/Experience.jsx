import React from "react";
import html from "../assets/html.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import firebase from "../assets/firebase.png";
import css from "../assets/css.png";

const Experience = () => {
  const assets = [
    {
      id: 1,
      phuto: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      phuto: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      phuto: javascript,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      phuto: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      phuto: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      phuto: bootstrap,
      title: "Bootstrap",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      phuto: firebase,
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    {
      id: 8,
      phuto: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div name="experience" className="w-full h-screen mt-32">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 ">This are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {assets.map(({ id, title, phuto, style }) => (
            <div
              key={id}
              className={
                `shadow-md hover:scale-105 duration-500 py-2 rounded-lg` +
                " " +
                style
              }
            >
              <img src={phuto} alt="images" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
