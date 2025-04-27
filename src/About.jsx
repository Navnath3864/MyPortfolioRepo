import React from "react";

function About() {
  return (
    <div className="container text-white" style={{ marginTop: "40px" }}>
      <h2 className="text-center mb-4 fst-italic">About Me</h2>
      
      <div className="mb-4">
        <h4 className="text-decoration-underline">Personal Introduction</h4>
        <p>
          Hello! I'm a passionate and detail-oriented <strong>Java Developer</strong> with a strong foundation in
          building robust, scalable, and efficient backend systems. I enjoy solving complex problems and constantly learning
          new technologies to improve my skills. I believe in writing clean, maintainable code and following industry best practices.
        </p>
      </div>

      <div className="mb-4">
        <h4 className="text-decoration-underline">Technical Skills</h4>
        <ul>
          <li><strong>Languages:</strong> Java, SQL, JavaScript</li>
          <li><strong>Frameworks:</strong> Spring Boot, Hibernate, JPA, React.js</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Tools:</strong> Git, Maven, Postman, Docker (basic)</li>
          <li><strong>Concepts:</strong> OOPs, Data Structures & Algorithms, Microservices Architecture, REST APIs</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-decoration-underline">Education</h4>
        <p>
          <strong>Bachelor of Engineering in Computer Engineering</strong><br />
          [Savitribai Phule Pune University] — [2021]
        </p>
      </div>

      <div className="mb-4">
  <h4 className="text-decoration-underline">Certifications</h4>
  <ul>
    <li>
      Java Programming Certificate - 
      <a href="http://localhost:5173/src/assets/javaCertification.pdf" target="_blank" rel="noopener noreferrer" className="text-info mx-1">
        View Certificate
      </a>
    </li>

    <li>
    Problem Solving Certificate - 
      <a href="http://localhost:5173/src/assets/problemSolving.pdf" target="_blank" rel="noopener noreferrer" className="text-info mx-1">
        View Certificate
      </a>
    </li>

    <li>
      Cdac Certificate - 
      <a href="http://localhost:5173/src/assets/CDACCertification.pdf" target="_blank" rel="noopener noreferrer" className="text-info mx-1">
        View Certificate
      </a>
    </li>
  </ul>
</div>

      <div className="mb-4">
        <h4 className="text-decoration-underline">Projects</h4>
        <ul>
          <li><strong>Loan Management System:</strong> Developed a microservices-based system for loan applications, customer verification, and approvals.</li>
          <li><strong>Inventory Management Application:</strong> Built a full-stack web app to manage stock inventory with Spring Boot and React.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-decoration-underline">Professional Goals</h4>
        <p>
          My short-term goal is to contribute to a dynamic team where I can continue to enhance my backend development skills, especially in 
          microservices and cloud technologies. Long-term, I aspire to become a full-stack architect and lead complex enterprise-level projects.
        </p>
      </div>

      
    </div>
  );
}

export default About;
