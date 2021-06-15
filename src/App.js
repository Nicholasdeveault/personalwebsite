import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <section id="home">
          <Homepage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </Router>
    </>
  );
}

export default App;
