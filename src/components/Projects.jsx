import React from "react";
import music from "../assets/portfolio/music.jpg";
import crm from "../assets/portfolio/crm.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: music,
      href: "https://online-music-app.netlify.app",
      hrefs: "https://github.com/MDhanesh/music-app-frontend",
    },
    {
      id: 2,
      src: crm,
      href: "https://crm-app-node.netlify.app/",
      hrefs: "https://github.com/MDhanesh/crm-app-react",
    },
    {
      id: 3,
      src: reactWeather,
      href: "",
      hrefs: "",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b  from-gray-800 to-black w-full text-white sm:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, href, hrefs }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a
                    href={href}
                    className="flex justify-between  w-full items-center text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a
                    href={hrefs}
                    className="flex justify-between  w-full items-center text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
