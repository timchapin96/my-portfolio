import '../stylesheets/index.scss';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import MyResume from "../assets/TimothyChapinResume.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import anime from 'animejs/lib/anime.es.js';



function AboutMe() {
  const projectsDiv = document.getElementsByClassName("projects-container")
  const backgroundSpin = document.getElementsByClassName("circle-rotate");

  let degree = 0;
  let spin = false;

  const handleClick = () => {
    projectsDiv[0].scrollIntoView({ behavior: 'smooth' });
  }

  const spinAnimation = anime({
    targets: '.circle-rotate',
    rotate: '-180deg',
    easing: 'linear',
    loop: true
  });
  const backgroundSpinClick = () => {
    console.log(spin);
    spin = !spin;
    if (spin) {
      spinAnimation.play();
    }
    else {
      spinAnimation.pause();
    }
  }

  return (
    <div className="about-me-card">
      <div className="profile">
        <div className="profile-main">
          <div className="img-header">
            <div className="profile-img">
              <img onClick={backgroundSpinClick} src="/assets/profile.jpeg" alt="Timothy Chapin" />
            </div>
            <div className="social-links">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/timothy-chapin/"><img id="linkedin" src="/assets/linkedin.svg" alt="linkedin link"></img></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/timchapin96"><img id="github" src="/assets/github.svg" alt="github link"></img></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/timothy.chapin.12/"><img id="facebook" src="/assets/facebook.svg" alt="facebook link"></img></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/timchap96/"><img id="instagram" src="/assets/instagram-logo.svg" alt="instagram link"></img></a>
            </div>
          </div>
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
        </div>
        <div className="profile-footer">
          <div className="resume">
            <a href={MyResume} download="TimChapinResume" alt="Tim's Resume" target="_blank" rel="noreferrer">
              <button>
                <p className="resume-text">Resume</p>
                <div className="download-svg"><AiOutlineDownload /></div>
              </button>
            </a>
          </div>
          <div className="projects-button">
            <p><b>Projects</b></p>
            <div className="down-arrow" onClick={handleClick}><BsFillArrowDownCircleFill /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
