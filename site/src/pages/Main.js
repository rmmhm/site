import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../containers/Header";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Resume from "../containers/Resume";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";

import "./Main.css";

function Main() {
  const [formatState, setFormat] = useState("navbar");
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      setFormat("navbar");
    } else {
      setFormat("sticky");
    }
  }, [inView]);

  return (
    <div className="app-container">
      <NavBar format={formatState} />
      <div ref={ref}>
        <Header />
      </div>
      <About />
      <Projects />
      <Resume />
      <Footer></Footer>
    </div>
  );
}

export default Main;
