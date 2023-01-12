import React from "react";
import NavBar from "../components/NavBar";
import Header from "../containers/Header";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Resume from "../containers/Resume";
import "./Main.css";

function Main() {
  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default Main;
