import React from "react";
import Project from "../components/project";

const Projects = () => {
  const projects = [
    { name: "MeasureCalc", description: "An app I built for work" },
    {
      name: "SetBuilder",
      description: "A plugin I built for an architectural program at work",
    },
    {
      name: "Bootcamp Sample Portfolio",
      description: `A sample portfolio site that was created as part of my bootcamp course.
         Connects to a pre-built backend where it retrieves the stored content for the projects. 
         Please note that the projects shown on this sample site are not ones that I built, the
          images and information were provided by the bootcamp`,
    },
    {
      name: "Capstone Project - Tastable",
      description: `After completing the coursework for the bootcamp I attended, I was required to make a complete full stack project
      to demonstrate what I had learned. I chose to make Tastable, a recipe site where users can upload their recipes and view recipes created by others.
      The front-end was created in React and the backend was built in Node.js. I was required to apply a technique or feature that was not taught in my bootcamp. 
      I ended up doing several, as building of backends was taught in Python, and user authentication was not taught in my bootcamp.`,
    },
  ];
  const projectList = projects.map((project, idx) => {
    return <Project key={idx} project={project} />;
  });
  return (
    <div className="projects-page">
      Projects<div className="projects-wrapper">{projectList}</div>
    </div>
  );
};

export default Projects;
