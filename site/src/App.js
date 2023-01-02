import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path = '/site' element = {<Home />}></Route>
        <Route path = '/site/projects' element ={<Projects />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
