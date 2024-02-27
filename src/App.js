import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    document.title = "Ryan Ma";
    document.body.style = "background: #344966";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/site" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
