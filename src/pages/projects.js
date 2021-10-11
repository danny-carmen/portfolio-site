import React, { useEffect, useState, useRef } from "react";
import Project from "../components/project";

import {
  setBuilder,
  tastable,
  bottegaPortfolio,
  measureCalc,
} from "../project-list";

const Projects = () => {
  const backgroundImages = [];

  const [opaque, startFadeIn] = useState(false);
  const projects = [tastable, bottegaPortfolio, setBuilder, measureCalc];
  const projectList = projects.map((project, idx) => {
    backgroundImages.push(project.backgroundImage);
    return <Project key={idx} project={project} />;
  });
  const projectScrollRef = useRef(null);
  const maxImageOpacity = 0.25;
  const [image1Opacity, setImage1Opacity] = useState(maxImageOpacity);
  const [image2Opacity, setImage2Opacity] = useState(0);
  const [image1Index, setImage1Index] = useState(0);
  const [image2Index, setImage2Index] = useState(1);

  useEffect(() => {
    startFadeIn(true);
  }, []);

  const fadeBackground = () => {
    const projectScroll = projectScrollRef.current;
    if (projectScroll.scrollTop > 0) {
      const scrollDivision =
        (projectScroll.scrollHeight - projectScroll.offsetHeight) /
          backgroundImages.length +
        0.5;
      const scrollIndexPosition = Math.floor(
        projectScroll.scrollTop / scrollDivision
      );

      if (
        scrollIndexPosition !== image1Index &&
        scrollIndexPosition < backgroundImages.length - 1
      ) {
        setImage1Index(scrollIndexPosition);
        setImage2Index(scrollIndexPosition + 1);
      }
      if (scrollIndexPosition < backgroundImages.length - 1) {
        setImage1Opacity(
          maxImageOpacity -
            ((projectScroll.scrollTop % scrollDivision) / scrollDivision) *
              maxImageOpacity
        );
        setImage2Opacity(
          ((projectScroll.scrollTop % scrollDivision) / scrollDivision) *
            maxImageOpacity
        );
      }
    }
  };

  return (
    <div
      className={
        opaque ? "projects-page page" : "projects-page page transparent"
      }
    >
      <div className="background-image-wrapper">
        <img
          className="project-background-image"
          src={backgroundImages[image1Index]}
          alt={projects[image1Index].name}
          style={{ opacity: `${image1Opacity}` }}
        />
        <img
          className="project-background-image"
          src={backgroundImages[image2Index]}
          alt={projects[image2Index].name}
          style={{ opacity: `${image2Opacity}` }}
        />
      </div>
      <div
        className="projects-wrapper"
        ref={projectScrollRef}
        onScroll={fadeBackground}
      >
        {projectList}
      </div>
    </div>
  );
};

export default Projects;
