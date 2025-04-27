import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Home from './Home';
import Info from './Info';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certificates from './Certificates';
import About from './About';
import Contact from './Contact';

function App() {

  return (
    <>
      <div className="app-container">
        <video autoPlay muted loop id="background-video">
          <source src="src\assets\backImage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/*" element={<Home />} />
            <Route path='/about/*' element={<About />} />
            <Route path='/contact/*' element={<Contact />} />
            <Route path="/home/info" element={<Info />} />
            <Route path="/home/info/education" element={<Education />} />
            <Route path="/home/info/projects" element={<Projects />} />
            <Route path="/home/info/skills" element={<Skills />} />
            <Route path="/home/info/certifications" element={<Certificates />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
