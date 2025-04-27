import React from 'react';
import { Link } from 'react-router-dom';

function Skills() {
  
  const cardStyle = {
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    minHeight: '250px',
    background: 'linear-gradient(135deg, rgb(23, 22, 23), rgb(145, 143, 143))',
  };

  const skillsData = [
    {
      title: 'Core Java',
      skills: ['Java', 'MultiThreading', 'Collections', 'DSA'],
    },
    {
      title: 'Spring Ecosystem',
      skills: ['Spring', 'Spring Boot', 'Spring Security', 'JDBC', 'Hibernate', 'Web Service', 'Restful APIs'],
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MySQL Workbench'],
    },
    {
      title: 'Microservices',
      skills: ['Microservices', 'Restful APIs'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'Postman'],
    },
  ];

  return (
    <>
    <div className='mt-3'>
      <nav className="d-flex justify-content-center gap-3 mb-4">
              <Link className="btn btn-outline-light" to="/home/info/education">Eduacation</Link>
              <Link className="btn btn-outline-light" to="/home/info/projects">Projects</Link>
              <Link className="btn btn-outline-light" to="/home/info/skills">Skills</Link>
              <Link className="btn btn-outline-light" to="/home/info/certifications">Certificates</Link>
            </nav>

      <div className="container py-5">
        <h2 className="text-center mb-5 text-white">My Skills</h2>
        <div className="row g-4">
          {skillsData.map((category, index) => (
            <div className="col-md-4" key={index}>
              <div className="card text-white" style={cardStyle}>
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <ul className="mt-3">
                    {category.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

    </>
  );
}

export default Skills;
