import React from "react";

const Image = (props) => {
  return (
    <div className="project--image-container">
      <img
        className="project--image"
        src={props.project.image}
        alt={props.project.name}
      />
      <img
        className="project--image-top-left"
        src={props.project.image}
        alt={props.project.name}
      />
      <img
        className="project--image-bottom-right"
        src={props.project.image}
        alt={props.project.name}
      />
    </div>
  );
};

export default Image;
