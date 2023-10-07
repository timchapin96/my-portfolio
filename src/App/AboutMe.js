import '../stylesheets/index.scss';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import MyResume from "../assets/TimothyChapinResume.pdf"
import { useRef } from 'react';



function AboutMe() {
  const projectsDiv = document.getElementsByClassName("projects-container")
  const handleClick = () => {
    projectsDiv[0].scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="about-me-card">
      <div className="profile">
        <div className="img-header">
          <div className="profile-img">
            <img src="/assets/profile.jpeg" alt="Timothy Chapin" />
          </div>
          <div className="social-links">
            <img id="linkedin" src="/assets/linkedin.svg" alt="linkedin link"></img>
            <img id="github" src="/assets/github.svg" alt="github link"></img>
            <img id="facebook" src="/assets/facebook.svg" alt="facebook link"></img>
            <img id="line" src="/assets/line.svg" alt="line link"></img>
          </div>
        </div>

        <div className="main-body">
          <div className="profile-body">
            <div className="profile-info">
              <h1>Tim Chapin</h1>
              <h3>Full Stack Developer</h3>
            </div>
            <div className="summary">
              <p>
                Full Stack Web Developer located in Tokyo. I am currently an English Teacher in the central Tokyo area using my coding to make fun, interactive games for my students!
              </p>
            </div>
          </div>
          <div className="profile-footer">
            <div className="resume">
              <a href= { MyResume } download="TimChapinResume" alt="Tim's Resume" target= "_blank" rel="noreferrer">
                <button>Resume</button>
              </a>
            </div>
            <div className="projects-button">
              <p><b>Projects</b></p>
              <div className="down-arrow" onClick = {handleClick}><BsFillArrowDownCircleFill /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
