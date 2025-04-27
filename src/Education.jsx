import React from 'react'
import { Link } from 'react-router-dom';

function Education() {
    
      const educationData = [

        { id: 1, college: 'C-DAC Centre Hyderabad', branch: 'PG-DASSD', percentage: '60.00%' },
        { id: 2, college: 'JSPM Imperial College of Engineering and Research', branch: 'Computer Engineering', percentage: '62.10%' },
        { id: 3, college: 'Kai. T. B. Girwalkar Polytechnic College', branch: 'Computer Engineering', percentage: '62.88%' },
        { id: 4, college: 'Shri Kedareshwer Vidhya Mandir', branch: 'SSC', percentage: '76.18%' },
      ];

  return (
    <div className='mt-3'>
      <nav className="d-flex justify-content-center gap-3 mb-4">
        <Link className="btn btn-outline-light" to="/home/info/education">Eduacation</Link>
        <Link className="btn btn-outline-light" to="/home/info/projects">Projects</Link>
        <Link className="btn btn-outline-light" to="/home/info/skills">Skills</Link>
        <Link className="btn btn-outline-light" to="/home/info/certifications">Certificates</Link>
      </nav>

      <div className="container">
        <h4 className="text-center text-white mb-4">Educational Details</h4>
        <table className="table table-bordered table-striped table-hover text-white">
          <thead className="table-light text-dark">
            <tr>
              <th>Sr. No</th>
              <th>College Name</th>
              <th>Branch</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu) => (
              <tr key={edu.id}>
                <td>{edu.id}</td>
                <td>{edu.college}</td>
                <td>{edu.branch}</td>
                <td>{edu.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Education