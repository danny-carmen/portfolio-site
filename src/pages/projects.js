import React, { useEffect, useState } from "react";
import Project from "../components/project";

import {
  setBuilder,
  tastable,
  bottegaPortfolio,
  measureCalc,
} from "../project-list";

const Projects = () => {
  const [opaque, startFadeIn] = useState(false);
  const projects = [measureCalc, setBuilder, bottegaPortfolio, tastable];
  const projectList = projects.map((project, idx) => {
    return <Project key={idx} project={project} />;
  });

  useEffect(() => {
    startFadeIn(true);
  }, []);

  return (
    <div
      className={
        opaque ? "projects-page page" : "projects-page page transparent"
      }
    >
      <div className="projects-wrapper">{projectList}</div>
    </div>
  );
};

export default Projects;
