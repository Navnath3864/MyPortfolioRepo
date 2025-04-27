import React from 'react'
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <>
    <div>
    <nav className="d-flex justify-content-center gap-2 mt-4">
        <Link className="btn btn-outline-light" to="/home/info/education">Eduacation</Link>
        <Link className="btn btn-outline-light" to="/home/info/projects">Projects</Link>
        <Link className="btn btn-outline-light" to="/home/info/skills">Skills</Link>
        <Link className="btn btn-outline-light" to="/home/info/certifications">Certificates</Link>
    </nav> 
    </div>

    <div className='mt-5 fst-italic text-white'>
      <h3  className='bg-secondary mt-2'>Salon Services</h3>
      <h6> Developed Salon management system using Spring Boot and MySQL.
          It helps Salon owner to manage customer details, products and offered services. 
          Billing service to manage customer bill generation and offered discounts. 
          Project is developed using Spring Boot framework with MySQL as database.
    </h6>
    </div>
    <div className='mt-5 fst-italic text-white'>
      <h3 className='text-white bg-secondary mt-2'> Book Management System</h3>
      <h6>
      Book Management System is maven project developed using Spring Boot. Built using Java and JPA web service uses 
      embedded Tomcat Server to run the application.
      </h6>
    </div>
    <div className='mt-5 fst-italic text-white'>
      <h3 className='text-white bg-secondary mt-2'> Bank Service Management</h3>
      <h6>
      The Bank Management Application is a simple console-based Java application designed to manage basic banking 
operations. It allows users to create accounts, perform transactions like deposits and withdrawals, and view account 
details. This project demonstrates core Java concepts like classes, objects, collections, and user input handling.
 </h6>
    </div>
    </>
  )
}

export default Projects