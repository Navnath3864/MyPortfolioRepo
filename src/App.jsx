import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Home from './Home';
import Info from './Info';
import Education from './Education';
import Projects from './Projects';
import Certificates from './Certificates';
import About from './About';
import Contact from './Contact';
import backImage from '../src/assets/backImage.jpg'
import MySkills from './MySkills';

function App() {
  return (
    <>
      <div
       style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',             // Scales the image to cover entire container
        backgroundPosition: 'center',        // Centers the image
        backgroundRepeat: 'no-repeat',       // Prevents tiling
        minHeight: '100vh',                  // Minimum height: full viewport height
        width: '100vw',                      // Full viewport width
        display: 'flex',                     // (Optional) to layout children with flex
        flexDirection: 'column',             // (Optional) vertical stacking
      }}
      >
        <BrowserRouter>
        
          <Header/>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/contact/*" element={<Contact />} />
            <Route path="/home/info" element={<Info />} />
            <Route path="/home/info/education" element={<Education />} />
            <Route path="/home/info/projects" element={<Projects />} />
            <Route path="/home/info/skills" element={<MySkills />} />
            <Route path="/home/info/certifications" element={<Certificates />} />
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
