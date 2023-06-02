import React, { useRef, useState, useEffect } from "react";
import ProfilePic from "../images/profile-pic-notext.jpg";
import SecondaryProfile from "../images/secondary-about-me.jpg";
import ArchBackground from "../images/arch-background-compressed.jpg";
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
        <img
          className="about-me--image primary"
          src={ProfilePic}
          alt="Danny Carmen"
        />
        <div className="about-me--intro about-me--text-wrapper ">
          <div className="about-me--text">
            Hi, I'm Danny.
            <br />
            Architect turned software developer <br />
            based in Lehi, Utah.
          </div>
        </div>
        <div className="about-me--text-wrapper copy">
          <div className="about-me--text">
            After becoming a licensed architect and working in the field for six
            years, I found myself spending all my free time teaching myself how
            to code and working on programming projects. I was drawn to coding
            for many of the same reasons as architecture: design, creative
            problem solving, and working within limitations to meet a goal. So I
            decided to change careers to pursue my passion.
            <br />
            <br />I currently work as a full stack developer, and I am looking
            for my next opportunity. I am excited to bring value to your company
            through my unique experiences as an architect turned developer.
          </div>
        </div>
        <img
          className="about-me--image secondary"
          src={SecondaryProfile}
          alt="Danny Carmen"
        />
      </div>
    </div>
  );
};

export default AboutMe;
