import React from "react";
import NavBar from "../components/NavBar";
import { Header, About, Projects, Resume } from "../container";
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
