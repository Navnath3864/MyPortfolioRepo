import React from 'react';
import { Link } from 'react-router-dom';

function Info() {
  

  return (
    
      <nav className="d-flex justify-content-center gap-3" >
        <Link className="btn btn-light mt-2" to="/home/info/education">Eduacation</Link>
        <Link className="btn btn-light mt-2" to="/home/info/projects">Projects</Link>
        <Link className="btn btn-light mt-2" to="/home/info/skills">Skills</Link>
        <Link className="btn btn-light mt-2" to="/home/info/certifications">Certificates</Link>
      </nav>
  );
}

export default Info;
