import React from "react";
import javaCert from "./assets/javaCertification.pdf";
import problemSolvingCert from "./assets/problemSolving.pdf";
import cdacCert from "./assets/CDACCertification.pdf";

function About() {
  return (
    <>
     <div className="container text-white mt-2" >
        <h2 className="text-center mb-2 fst-italic">About Me</h2>

        <section className="mb-2">
          <h4 className="text-decoration-underline mb-3">Personal Introduction</h4>
          <p>
            Hello! I'm a passionate and detail-oriented <strong>Java Developer</strong> with a strong foundation in
            building robust, scalable, and efficient backend systems. I enjoy solving complex problems and constantly learning
            new technologies to improve my skills. I believe in writing clean, maintainable code and following industry best practices.
          </p>
        </section>

        <section className="mb-2">
          <h4 className="text-decoration-underline mb-3">Technical Skills</h4>
          <ul>
            <li><strong>Languages:</strong> Java, SQL, JavaScript</li>
            <li><strong>Frameworks:</strong> Spring Boot, Hibernate, JPA, React.js</li>
            <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
            <li><strong>Tools:</strong> Git, Maven, Postman, Docker (basic)</li>
            <li><strong>Concepts:</strong> OOPs, Data Structures & Algorithms, Microservices Architecture, REST APIs</li>
          </ul>
        </section>

        <section className="mb-2">
          <h4 className="text-decoration-underline mb-3">Education</h4>
          <p>
            <strong>Bachelor of Engineering in Computer Engineering</strong><br />
            Savitribai Phule Pune University — 2021
          </p>
        </section>

        <section className="mb-2">
          <h4 className="text-decoration-underline mb-3">Certifications</h4>
          <ul>
            <li>
              Java Programming Certificate —{" "}
              <a
                href={javaCert}
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
              >
                View Certificate
              </a>
            </li>
            <li>
              Problem Solving Certificate —{" "}
              <a
                href={problemSolvingCert}
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
              >
                View Certificate
              </a>
            </li>
            <li>
              CDAC Certificate —{" "}
              <a
                href={cdacCert}
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
              >
                View Certificate
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-2">
          <h4 className="text-decoration-underline mb-3">Projects</h4>
          <ul>
            <li><strong>Loan Management System:</strong> Developed a microservices-based system for loan applications, customer verification, and approvals.</li>
            <li><strong>Inventory Management Application:</strong> Built a full-stack web app to manage stock inventory with Spring Boot and React.</li>
          </ul>
        </section>

        <section className="mb-2">
          <h4 className="text-decoration-underline mb-3">Professional Goals</h4>
          <p>
            My short-term goal is to contribute to a dynamic team where I can continue to enhance my backend development skills, especially in
            microservices and cloud technologies. Long-term, I aspire to become a full-stack architect and lead complex enterprise-level projects.
          </p>
        </section>
      </div>

    </>
  );
}

export default About;
