import React, { useState, useEffect } from "react";

// import data
import { projectsNav } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects] = useState([
    {
      name: "ToDo App",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/todogif.fd727e07.gif",
      feature: "Todo Application made with ReactJs. Tech-stack : [React] ",
      Link: "https://todo-app-amber-six.vercel.app/",
      Github: "https://github.com/yashdevrukhkar20/todo-app",
    },
    {
      name: "MI Store Clone App",
      img: "https://github.com/vaibhav123-dev/vaibhav123-dev/assets/81352701/1ad6aac5-1c59-4120-9190-5bd96638853b",
      feature: "MI Store Clone App made with ReactJs. Tech-stack : [React] ",
      Link: "https://mi-store-clone-delta.vercel.app/",
      Github: "https://github.com/yashdevrukhkar20/mi-store-clone",
    },
    {
      name: "Zomato Clone App",
      img: "https://github.com/vaibhav123-dev/vaibhav123-dev/assets/81352701/3f8bd979-76a8-4abd-abf8-2e5e0de65771",
      feature: "Zomato made with ReactJs. Tech-stack : [React] ",
      Link: "https://zomato-clone-gold-pi.vercel.app//",
      Github: "https://github.com/yashdevrukhkar20/mi-store-clone",
    },
    {
      name: "Portfolio Website",
      img: "https://github.com/vaibhav123-dev/vaibhav123-dev/assets/81352701/13e4d4eb-5454-44e4-ab1c-addaf89d63c0",
      feature:
        "Portfolio website where user can see my projects and skills. Tech-stack : [React,NodeJs,ExpressJs,MongoDB] ",
      Link: "https://portfolio-delta-rouge-20.vercel.app//",
      Github: "https://github.com/yashdevrukhkar20/portfolio-website-master-main",
    },
  ]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      // setProjects(projectsData);
    } else {
      // setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? "active" : ""
                  } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
