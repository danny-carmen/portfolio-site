import tastableImage from "./images/tastable.jpg";
import bottegaportfolioImage from "./images/bottega-portfolio.jpg";
import setbuilderImage from "./images/setbuilder.jpg";
import measureCalcImage from "./images/measure_calc.jpg";

export const measureCalc = {
  name: "MeasureCalc",
  description: "An app I built for work",
  image: measureCalcImage,
  link: "https://play.google.com/store/apps/details?id=com.measurecalc.android.measurecalc",
  linkName: "MeasureCalc",
  languages: ["Java", "XML"],
};

export const setBuilder = {
  name: "SetBuilder",
  description: "A plugin I built for an architectural program at work",
  image: setbuilderImage,
  link: "https://apps.autodesk.com/RVT/en/Detail/Index?id=8008846412788643778&appLang=en&os=Win64",
  linkName: "SetBuilder",
  languages: ["C#", "WPF"],
};

export const bottegaPortfolio = {
  name: "Bootcamp React Portfolio",
  description: `A sample portfolio site that was created as part of my bootcamp course.
       Connects to a pre-built backend where it retrieves the stored content for the projects. 
       Please note that the projects shown on this sample site are not ones that I built, the
        images and information were provided by the bootcamp`,
  image: bottegaportfolioImage,
  github: "https://github.com/danny-carmen/react-portfolio",
  link: "https://ddc-tastable.herokuapp.com/",
  linkName: "React Portfolio",
  languages: ["React", "JS", "SCSS"],
};

export const tastable = {
  name: "Capstone Project - Tastable",
  description: `After completing the coursework for the bootcamp I attended, I was required to make a complete full stack project
    to demonstrate what I had learned. I chose to make Tastable, a recipe site where users can upload their recipes and view recipes created by others.
    The front-end was created in React and the backend was built in Node.js. I was required to apply a technique or feature that was not taught in my bootcamp. 
    I ended up doing several, as building of backends was taught in Python, and user authentication was not taught in my bootcamp.`,
  image: tastableImage,
  github: "https://github.com/danny-carmen/capstone-recipe-site",
  link: "https://ddc-tastable.herokuapp.com/",
  linkName: "Tastable",
  languages: ["React", "JS", "SCSS", "Node"],
};
