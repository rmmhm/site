import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../containers/Header";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Resume from "../containers/Resume";
import "./Main.css";

function Main() {
  const [formatState, setFormat] = useState("navbar");
  function scrollHandler() {
    console.log(window.scrollY);
    if (window.scrollY >= 20) {
      setFormat("sticky");
    } else {
      setFormat("navbar");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
  }, []);

  return (
    <div className="app-container">
      <NavBar format={formatState} />
      <Header />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default Main;
