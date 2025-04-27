
import profilePhoto from "./assets/profile.jpg";
import './Home.css'; // Custom CSS file for animation
import { useNavigate } from 'react-router-dom';


function Home() {
  
  const navigate = useNavigate()
  const personalInfo = () => {
    
      navigate('/home/info'); // Navigate to the Info route
    
  };

  return (
    <>
      <div className='d-flex justify-content-center mt-5'>
        <img
          className="rounded-circle img-fluid shadow"
          src={profilePhoto}
          alt="Profile"
          width="200"
          height="200"
        />
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <h5 className='fst-italic colored-shadow' style={{ color: 'white' }}>
          "The function of good software is to make the complex appear to be simple."
        </h5>
      </div>

      <div className='d-flex justify-content-center mt-3 '>
        <button className='btn btn-primary zoom-animation' onClick={personalInfo}>Explore More</button>
      </div>
    </>
  );
}

export default Home;
