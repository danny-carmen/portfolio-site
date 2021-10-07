import React, { useRef, useState, useEffect } from "react";
import ProfilePic from "../images/profile-pic-notext.jpg";
import SecondaryProfile from "../images/secondary-about-me.jpg";
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
            based in Salt Lake City, Utah
          </div>
        </div>
        <div className="about-me--text-wrapper copy">
          <div className="about-me--text">
            I completed my undergraduate and graducate degrees and licensing in
            architecture and worked in that field for half a decade before
            coming to a realization. Rather than pondering on buildings, I found
            myself spending all my free time teaching myself how to code and
            working on programming projects. I was drawn to coding for many of
            the same reasons as architecture, design, creative problem solving,
            working within limitations. I decided it was time to make a change
            and pursue my passion.
            <br />
            <br />I recently completed a boot camp through Bottega University,
            and I am currently looking for a junior position. I am excited to
            bring value through my unique experiences as an architect turned
            developer.
            {/* realizing that all my side projects were
            all coding related. I realized that my true passion was coding and I
            needed to make a change. projects I realized that my true passion is
            coding. As a licensed architect, instead of thinking about
            buildings, I found myself spending all my free time teaching myself
            how to code. On the bus, late into the night, and early in the
            mornings, I loved … After building an app and a plugin, I realized
            my passion was in coding, and so I decided to leave architecture and
            pursue a career in software development. I recently completed a boot
            camp through Bottega University, and I am currently looking for a
            junior position. I am excited to bring value through my unique
            experiences as an architect turned coder. I am a new software
            developer, previously an architect. In my career as an architect, I
            have worked on and managed projects ranging from multifamily
            housing, historic preservation, government and municipal buildings,
            religious and even an arena. While in the architecture field I rose
            up from basic drafting to project management to being in charge of
            production technology and documenting and enforcing standards for
            the company.I am good at jumping into a project and coming up to
            speed. Time management, communication skills, and office culture. I
            love learning, putting pieces together, love working within
            constraints, clean coding, learning what that means. */}
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
