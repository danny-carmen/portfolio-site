import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import AboutMe from "./pages/about-me";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-grid">
          <NavBar />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/projects" component={Projects} />
            <Route exact path="/" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
