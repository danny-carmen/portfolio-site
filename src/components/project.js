import React from "react";
import Icons from "./icons";

const Project = (props) => {
  return (
    <div className="project">
      <img
        className="project--image"
        src={props.project.image}
        alt={props.project.name}
      />
      <Icons className="project--icons" icons={props.project.icons} />
      <div className="project--info-wrapper">
        <div className="project--name">{props.project.name}</div>
        <div className="project--github">
          Github Repository: {props.project.github}
        </div>
        <div className="project--link">Link to Site: {props.project.link}</div>
        <div className="project--description">{props.project.description}</div>
        <div className="project--languages">
          Languages: {props.project.languages}
        </div>
      </div>
    </div>
  );
};

export default Project;
