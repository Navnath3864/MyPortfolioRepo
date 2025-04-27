import React from 'react';

function Contact() {
  return (
    <div className='d-flex justify-content-center mt-5 align-items-center'>
      <div className="card shadow-lg" style={{ width: "30rem" }}>
        <div className="card-body">
          <h4 className="card-title text-center text-decoration-underline mb-4">Contact Information</h4>
          <p className="card-text">
            <strong>Email:</strong> 
            <a href="mailto:navnathgutte20@gmail.com" className="text-info mx-2">navnathgutte20@gmail.com</a>
            <br />

            <strong>Secondary Email:</strong> 
            <a href="mailto:nagutte0@gmail.com" className="text-info mx-2">nagutte0@gmail.com</a>
            <br />

            <strong>Phone:</strong> +91-9665653864
            <br />

            <strong>LinkedIn:</strong> 
            <a href="https://www.linkedin.com/in/navnath-gutte/" target="_blank" rel="noopener noreferrer" className="text-info mx-2">View LinkedIn Profile</a>
            <br />

            <strong>LeetCode:</strong> 
            <a href="https://leetcode.com/u/NavnathGutte/" target="_blank" rel="noopener noreferrer" className="text-info mx-2">LeetCode Profile</a>
            <br />


            <strong>GitHub:</strong> 
            <a href="https://github.com/Navnath3864" target="_blank" rel="noopener noreferrer" className="text-info mx-2">GitHub Profile</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
