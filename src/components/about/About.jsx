import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import pdf from '../../assets/pdf/MUhammed savad - cv.pdf'
const About = () => {
  
  return (
    <div id="about">
      <div className="image_abt">
        <div className="img_me">
          <img
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="aboutMe" id="about">
        <h1>About me</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          accusantium alias inventore explicabo animi ipsa odit nemo quaerat
          itaque repellat eligendi at placeat sit expedita, nihil voluptatum
          culpa sint aspernatur dicta voluptatibus impedit architecto ratione.
          Am dele incidunt autem perferendis laboriosam recusandae praesentium
          rerum!
        </p>
        <a
          href={pdf}
          target="_blank"
          Download="git-cheets"
          className="downloadCvBtn"
        >
          <button color="transparent">download cv</button>
        </a>
      </div>
    </div>
  );
}

export default About
