import React from "react";

const Project = (props) => {
  return (
    <div className="project neumorphic">
      <img
        className="project--image"
        src={props.project.image}
        alt={props.project.name}
      />
      {/* <Icons className="project--icons" icons={props.project.icons} /> */}
      <div className="project--info-wrapper">
        <div className="project--name">{props.project.name}</div>
        <div className="project--links">
          {props.project.github ? (
            <a
              className="project--link"
              href={props.project.github}
              target="_blank"
            >
              Github Repository
            </a>
          ) : null}
          {props.project.github ? (
            <div className="link-divider-line"> </div>
          ) : null}
          <a
            className="project--link"
            href={props.project.link}
            target="_blank"
          >
            {`Visit ${props.project.linkName}`}
          </a>
        </div>
        <div className="project--description">{props.project.description}</div>
        <div className="project--languages">
          Utilizes:{" "}
          {props.project.languages.map((language, idx) => {
            return (
              <span key={idx}>
                {language}
                {idx !== props.project.languages.length - 1 ? ", " : null}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
