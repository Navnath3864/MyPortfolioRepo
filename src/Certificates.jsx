import React from "react";
import { Link } from "react-router-dom"; 
import javaCertificate from "./assets/javaCertification.pdf";
import problemSolving from "./assets/problemSolving.pdf";
import CDACCertification from "./assets/CDACCertification.pdf";

function Certificates() {
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

    <div className="container" style={{ marginTop: "40px" }}>
      <h2 className="text-center text-white mb-4 fst-italic">My Certificates</h2>
      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Certificate Name</th>
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fst-italic">CDAC Certification Certificate</td>
            <td>
              <a href={CDACCertification} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">View</button>
              </a>
            </td>
            <td>
              <a href={CDACCertification} download>
                <button className="btn btn-success">Download</button>
              </a>
            </td>
          </tr>

          <tr>
            <td className="fst-italic">Java Certificate</td>
            <td>
              <a href={javaCertificate} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">View</button>
              </a>
            </td>
            <td>
              <a href={javaCertificate} download>
                <button className="btn btn-success">Download</button>
              </a>
            </td>
          </tr>

          <tr>
            <td className="fst-italic">Problem Solving Certificate</td>
            <td>
              <a href={problemSolving} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">View</button>
              </a>
            </td>
            <td>
              <a href={problemSolving} download>
                <button className="btn btn-success">Download</button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Certificates;
