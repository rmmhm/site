import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import "./Main.css";

function Main() {
  return (
    <div>
      <NavBar />
      <div id="home" className="app__container">
        <Header />
      </div>
      <div id="about" className="app__container">
        <About />
      </div>
    </div>
  );
}

export default Main;
