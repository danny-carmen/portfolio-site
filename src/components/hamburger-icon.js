import React from "react";

const HamburgerIcon = (props) => {
  return (
    <div className="hamburger-icon">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke-width="100"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M350,50L50,50 M350,350L50,350 M350,200L50,200"
          onClick={props.handleHamburgerClick}
        >
          <animate
            dur="1s"
            repeatCount="once"
            attributeName="d"
            values="M350,50L50,50 M350,350L50,350 M350,200L50,200;
                 M350,200L50,200 M350,200L50,200 M350,200L50,200;
                 M350,50	L50,350 M350,350L50,50 M350,350L50,50
            ;M350,200L50,200 M350,200L50,200 M350,200L50,200;M350,50L50,50 M350,350L50,350 M350,200L50,200;"
            fill="freeze"
            calcMode="spline"
            keySplines="1 1 1 1; 1 1 1 1;1 1 1 1;1 1 1 1"
          />
        </path>
      </svg>
    </div>
  );
};

export default HamburgerIcon;
