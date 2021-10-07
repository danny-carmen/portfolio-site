import tastableImage from "./images/tastable.jpg";
import bottegaportfolioImage from "./images/bottega-portfolio.jpg";
import setbuilderImage from "./images/setbuilder.jpg";
import measureCalcImage from "./images/measure_calc.jpg";
import measureCalcBackground from "./images/measure-calc-background-final.jpg";
import setBuilderBackground from "./images/set-builder-background-final.jpg";
import bottegaPortfolioBackground from "./images/bottega-portfolio-background-final.jpg";
import tastableBackground from "./images/tastable-background-final.jpg";

export const measureCalc = {
  name: "MeasureCalc - Android App",
  description: `MeasureCalc was my first full coding project. I needed a better length and dimension 
  calculator for some of my tasks at work and I decided to try and make one. MeasureCalc allows you 
  to put in an entire equation, similar to a graphing calculator. I learned a lot about algorithms 
  and parsing equations in order to get this to work. It was my first experience working in Java.`,
  image: measureCalcImage,
  link: "https://play.google.com/store/apps/details?id=com.measurecalc.android.measurecalc",
  linkName: "MeasureCalc",
  languages: ["Java", "XML", "Equation Parsing (Dijkstra's Shunting Yard)"],
  backgroundImage: measureCalcBackground,
};

export const setBuilder = {
  name: "SetBuilder",
  description: `In my previous career as an architect, I used a program called Revit for the creation of 
  construction documents. I created SetBuilder to expedite and automate the creation of drawing sheets and 
  the views on those sheets. I enjoyed creating an application that my coworkers could use to save time, 
  and save projects money. It was my first experience developing a full application in C#. I also had to 
  work with the Revit API and the Autodesk Entitlement API.`,
  image: setbuilderImage,
  link: "https://apps.autodesk.com/RVT/en/Detail/Index?id=8008846412788643778&appLang=en&os=Win64",
  linkName: "SetBuilder",
  languages: ["C#", "WPF", "Autodesk Revit API"],
  backgroundImage: setBuilderBackground,
};

export const bottegaPortfolio = {
  name: "Bootcamp React Portfolio",
  description: `A sample portfolio site that was created as part of my bootcamp course.
       Connects to a pre-built backend where it retrieves the stored content for the projects. This was my first
        experience building a full application with React, and I really grew to love using the React library. 
        Please note that the projects shown on this sample site are not ones that I built, the
        images and information were provided by the bootcamp`,
  image: bottegaportfolioImage,
  github: "https://github.com/danny-carmen/react-portfolio",
  link: "https://ddc-tastable.herokuapp.com/",
  linkName: "React Portfolio",
  languages: ["React", "JS", "SCSS", "API Requests"],
  backgroundImage: bottegaPortfolioBackground,
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
  languages: ["React", "JS", "SCSS", "Node", "User Authentication"],
  backgroundImage: tastableBackground,
};
