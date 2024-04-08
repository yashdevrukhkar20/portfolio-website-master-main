import React, { useState, useEffect } from "react";

// import data
import { projectsNav } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([
    {
      name: "Quiz App",
      img: "https://user-images.githubusercontent.com/93373467/183861384-57289203-d962-4c0e-87fe-095d3b1645f7.gif",
      feature:
        "Quiz Application made using MERN Stack. Where user can attemp quiz and get result. Also user can access his old quiz result. Tech-stack : [React,NodeJs,ExpressJs,MongoDB] ",
      Link: "",
      Github: "https://github.com/yashdevrukhkar20/Quiz_App",
    },
    {
      name: "ToDo App",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/todogif.fd727e07.gif",
      feature: "Todo Application made with ReactJs. Tech-stack : [React] ",
      Link: "https://todo-app-vab-devv.netlify.app/",
      Github: "https://github.com/yashdevrukhkar20/Todo-app-react-js",
    },
    // {
    //   name: "Portfolio Website",
    //   img: "https://user-images.githubusercontent.com/93373467/183902755-f334ba41-b7d6-4e8a-88a8-ba23e1070914.gif",
    //   feature:
    //     "Portfolio website where user can see my projects and skills. Tech-stack : [React,NodeJs,ExpressJs,MongoDB] ",
    //   Link: "https://vaibhav-dev-portfolio.netlify.app/",
    //   Github: "https://github.com/yashdevrukhkar20/portfolio-website",
    // },
    {
      name: "E-commerce Website",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/bellavitagif.5916a95a.gif",
      feature:
        "Fully functional E-commerce website where user can signin and buy products. Tech-stack : [HTML,CSS,JavaScript,NodeJs,MongoDb,ExpressJs]",
      Link: "https://bellavitaorganic-cloned.herokuapp.com/",
      Github:
        "https://github.com/yashdevrukhkar20/Bella_Vita_Organic_Clone_Backend",
    },
    {
      name: "E-commerce Website",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/plumgoodness.de00e664.png",
      feature:
        "Frontend E-commerce website where user can signin and buy products with dummy payment. Tech-stack : [HTML,CSS,JavaScript]",
      Link: "https://plumgoodness-clone.netlify.app/",
      Github: "https://github.com/yashdevrukhkar20/Clone-of-plumgoodness.com",
    },
    {
      name: "Movie Website",
      img: "https://vaibhav-darvekar-portfolio.netlify.app/static/media/moviegif.72206402.gif",
      feature:
        "Simple movie application where user can search for movie and get details. Teck-stack : [HTML,CSS,JavaScript]",
      Link: "https://nightowl-movie-app.netlify.app/",
      Github: "https://github.com/yashdevrukhkar20/Movie-app",
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
