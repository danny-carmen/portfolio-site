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
  date: "Published January 2018",
  description: `MeasureCalc was my first full coding project. It is currently published on the Google Play Store. 
  I needed a better length and dimension calculator for some of my tasks at work, so I decided to teach myself how 
  to code and try to make one. MeasureCalc is similar to a graphing calculator in that it allows you to input an entire equation. 
  You can use both metric and imperial units. I learned a lot about algorithms and parsing equations in order to get this to work.`,
  image: measureCalcImage,
  link: "https://play.google.com/store/apps/details?id=com.measurecalc.android.measurecalc",
  linkName: "MeasureCalc",
  languages: ["Java", "XML", "Equation Parsing (Dijkstra's Shunting Yard)"],
  backgroundImage: measureCalcBackground,
};

export const setBuilder = {
  name: "SetBuilder - Revit Plugin",
  date: "Published October 2020",
  description: `As an architect, I used a program called Revit to create construction documents. I built SetBuilder to expedite 
  and automate the creation of drawing sheets and the views on those sheets. I enjoyed creating an application that saved time 
  for my coworkers and saved money for the project as well. It was my first experience developing a full application in C#. I 
  also had to work with the Revit API and the Autodesk Entitlement API. Set Builder is currently published on the Autodesk App Store.`,
  image: setbuilderImage,
  link: "https://apps.autodesk.com/RVT/en/Detail/Index?id=8008846412788643778&appLang=en&os=Win64",
  linkName: "SetBuilder",
  languages: ["C#", "WPF", "Autodesk Revit API"],
  backgroundImage: setBuilderBackground,
};

export const bottegaPortfolio = {
  name: "Bootcamp React Portfolio",
  date: "Completed August 2021",
  description: `A sample portfolio site that I created as part of my bootcamp course. It connects to a pre-built backend where 
  it retrieves the stored content for the projects. This was my first experience building a full application with React. Note: 
  The projects shown on the sample site are not ones that I built. The images and information were provided by the bootcamp.`,
  image: bottegaportfolioImage,
  github: "https://github.com/danny-carmen/react-portfolio",
  link: "https://ddc-bottega-react-portfolio.herokuapp.com/",
  linkName: "React Portfolio",
  languages: ["React", "JS", "SCSS", "API Requests"],
  backgroundImage: bottegaPortfolioBackground,
};

export const tastable = {
  name: "Tastable - Capstone Project",
  date: "Completed September 2021",
  description: `After completing the bootcamp coursework, I was required to create a full stack project to demonstrate what I had 
  learned and apply a technique or feature that was not taught in the course. I chose to make Tastable, a recipe site where users 
  can upload their recipes and view recipes created by others. The front-end was created in React. I taught myself how to use Node.js 
  to build the backend. I also learned how implement user authentification and host images on AWS S3, which were also not taught in the course.`,
  image: tastableImage,
  github: "https://github.com/danny-carmen/capstone-recipe-site",
  link: "https://ddc-tastable.herokuapp.com/",
  linkName: "Tastable",
  languages: ["React", "JS", "SCSS", "Node", "User Authentication, AWS S3"],
  backgroundImage: tastableBackground,
};
