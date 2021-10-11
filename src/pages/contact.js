import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const [opaque, startFadeIn] = useState(false);

  useEffect(() => {
    startFadeIn(true);
  }, []);
  return (
    <div
      className={
        opaque
          ? "contact-page-wrapper page"
          : "contact-page-wrapper page transparent"
      }
    >
      <div className="contact-page">
        <div className>Danny Carmen</div>
        <a href="mailto: danny.carmen@outlook.com">danny.carmen@outlook.com</a>
        <div className="contact-page--links">
          <a href="https://www.linkedin.com/in/danny-carmen-62b87a84/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/danny-carmen">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <Link
          className="contact-page--resume"
          to="./DannyCarmenResume.pdf"
          download
          target="_blank"
        >
          View Resume
        </Link>
      </div>
    </div>
  );
};

export default Contact;
