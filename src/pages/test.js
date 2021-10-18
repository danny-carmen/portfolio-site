import React from "react";
import HamburgerIcon from "../components/hamburger-icon";

const Test = () => {
  const handleHamburgerClick = () => {
    console.log("Clicked it");
  };
  return (
    <div>
      <HamburgerIcon handleHamburgerClick={handleHamburgerClick} />
    </div>
  );
};

export default Test;
