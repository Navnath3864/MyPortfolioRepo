import React from 'react';
import { Link } from 'react-router-dom';

function MySkills() {
  
  const cardStyle = {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    background: 'linear-gradient(135deg, rgb(23, 22, 23), rgb(145, 143, 143))',
    color: 'white',
    minHeight: '180px',
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
      {/* Navigation Bar */}
      <nav className="d-flex justify-content-center gap-2 mt-4" aria-label="Skills section navigation">
        <Link className="btn btn-outline-light" to="/home/info/education">Education</Link>
        <Link className="btn btn-outline-light" to="/home/info/projects">Projects</Link>
        <Link className="btn btn-outline-light active" to="/home/info/skills" aria-current="page">Skills</Link>
        <Link className="btn btn-outline-light" to="/home/info/certifications">Certificates</Link>
      </nav>

      {/* Skills Cards */}
      <div className="container py-5">
        <h2 className="text-center text-white mb-4">My Skills</h2>
        <div className="row g-4">
          {skillsData.map((category, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card" style={cardStyle}>
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <ul className="mt-2">
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
    </>
  );
}

export default MySkills;
