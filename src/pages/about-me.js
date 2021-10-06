import React, { useRef, useState, useEffect } from "react";
import ProfilePic from "../images/profile-pic-transparency.png";
import ArchBackground from "../images/arch-background.jpg";
import CodeBackground from "../images/code-background.jpg";

const AboutMe = () => {
  const [initialImageOpacity, setInitialImageOpacity] = useState(0.25);
  const [finalImageOpacity, setFinalImageOpacity] = useState(0);
  const [opaque, startFadeIn] = useState(false);

  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scroll = scrollRef.current;

    setInitialImageOpacity(
      0.25 -
        (scroll.scrollTop / (scroll.scrollHeight - scroll.offsetHeight)) * 0.25
    );
    setFinalImageOpacity(
      (scroll.scrollTop / (scroll.scrollHeight - scroll.offsetHeight)) * 0.25
    );
  };

  useEffect(() => {
    startFadeIn(true);
  }, []);

  return (
    <div
      className={
        opaque ? "about-me-page page" : "about-me-page page transparent"
      }
    >
      <img
        className="background-image initial-image"
        style={{ opacity: `${initialImageOpacity}` }}
        src={ArchBackground}
        alt="Architecture Background"
      />
      <img
        className="background-image final-image"
        style={{ opacity: `${finalImageOpacity}` }}
        src={CodeBackground}
        alt="Coding Background"
      />
      <div className="about-me" ref={scrollRef} onScroll={handleScroll}>
        <div className="about-me--image-wrapper">
          <img
            className="about-me--image"
            src={ProfilePic}
            alt="Danny Carmen"
          />
        </div>
        <div className="about-me--text-wrapper">
          <h2 className="about-me--text">
            I am a new software developer, previously an architect. In my career
            as an architect, I have worked on and managed projects ranging from
            multifamily housing, historic preservation, government and municipal
            buildings, religious and even an arena. While in the architecture
            field I rose up from basic drafting to project management to being
            in charge of production technology and documenting and enforcing
            standards for the company.I am good at jumping into a project and
            coming up to speed. Time management, communication skills, and
            office culture. I love learning, putting pieces together, love
            working within constraints, clean coding, learning what that means.
          </h2>
          <h2 className="about-me--text">
            I am a new software developer, previously an architect. In my career
            as an architect, I have worked on and managed projects ranging from
            multifamily housing, historic preservation, government and municipal
            buildings, religious and even an arena. While in the architecture
            field I rose up from basic drafting to project management to being
            in charge of production technology and documenting and enforcing
            standards for the company.I am good at jumping into a project and
            coming up to speed. Time management, communication skills, and
            office culture. I love learning, putting pieces together, love
            working within constraints, clean coding, learning what that means.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
