import React, { useEffect, useRef } from "react";

const HamburgerIcon = (props) => {
  const toCloseAnimationRef = useRef();
  const toHamburgerAnimationRef = useRef();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) {
      if (!props.navBarOpen) {
        toHamburgerAnimationRef.current.beginElement();
      } else {
        toCloseAnimationRef.current.beginElement();
      }
    } else {
      isInitialized.current = true;
    }
  }, [props.navBarOpen]);

  return (
    <div
      className={
        props.navBarOpen
          ? "hamburger-icon hamburger-icon--open"
          : "hamburger-icon"
      }
      onClick={() => {
        props.handleHamburgerClick();
      }}
    >
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke-width="100"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M350,50L50,50 M350,350L50,350 M350,200L50,200"
        >
          <animate
            ref={toCloseAnimationRef}
            dur=".3s"
            begin="indefinite"
            repeatCount="once"
            attributeName="d"
            values="M350,50 L50,50 M350,350L50,350 M350,200L50,200;
                    M350,200L50,200 M350,200L50,200 M350,200L50,200;
                    M350,50	L50,350 M350,350L50,50 M350,350L50,50;"
            fill="freeze"
            calcMode="spline"
            keySplines="1 1 1 1; 1 1 1 1;"
          />
          <animate
            ref={toHamburgerAnimationRef}
            dur=".3s"
            begin="indefinite"
            repeatCount="once"
            attributeName="d"
            values="M350,50	L50,350 M350,350L50,50 M350,350L50,50
            ;M350,200L50,200 M350,200L50,200 M350,200L50,200;M350,50L50,50 M350,350L50,350 M350,200L50,200;"
            fill="freeze"
            calcMode="spline"
            keySplines="1 1 1 1; 1 1 1 1;"
          />
        </path>
      </svg>
    </div>
  );
};

export default HamburgerIcon;
