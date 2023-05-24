import '../stylesheets/index.scss';
import Websites from './Websites';

function AboutMe() {
  return (
    <div className="about-me-card">
      <div className="profile-img">
        <img src="/assets/profile.jpeg" alt="Timothy Chapin" />
      </div>
      <div className="profile">
        <div className="profile-info">
          <p>Hello There!</p>
          <p>I'm <b>Tim Chapin</b></p>
          <h4>Full Stack Developer</h4>
        </div>
        <div className="social-links">
          <img src="/assets/linkedin.svg" alt="linkedin link"></img>
          <img src="/assets/github.svg" alt="github link"></img>
          <img src="/assets/facebook.svg" alt="facebook link"></img>
          <img src="/assets/line.svg" alt="line link"></img>
        </div>
        <div className="websites">
          <Websites />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
