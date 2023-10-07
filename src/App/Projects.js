function Projects( {projectRefs} ) {
  return (
    <div className="projects-container">
      <div className="project">
        <div className="project-header">
          <div className="project-img">
            <a href="https://www.teachtokyo.com/" alt="teach tokyo website">
              <img src="/assets/TeachTokyo.png"></img>
            </a>
          </div>
          <div className="project-title">
            <h2>Teach Tokyo</h2>
          </div>
        </div>
        <div className="project-body">
          <p>Teach Tokyo is a quiz based strategy game to be used in the classroom as a warmup activity before lessons. It uses an interactive SVG map of Tokyo which students can conquer for their teams. Users can create as many games as they want as well.</p>
        </div>
        <div className="tech-stack">
          <ul>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/rails/rails-plain.svg" alt="rails icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/postgresql/postgresql-plain.svg" alt="postgres icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/heroku/heroku-plain.svg" alt="heroku icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-plain.svg" alt="javascript icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/html5/html5-plain.svg" alt="html5 icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/css3/css3-plain.svg" alt="css3 icon"></img></li>
          </ul>
        </div>
      </div>
      <div className="project">
        <div className="project-header">
          <div className="project-img">
            <a href="https://www.teachtokyo.com/" alt="teach tokyo website">
              <img src="/assets/TokyoMaps.png"></img>
            </a>
          </div>
          <div className="project-title">
            <h2>Tokyo Maps</h2>
          </div>
        </div>
        <div className="project-body">
          <p>Tokyo Maps is a MapBox based application made to assist expats looking to relocate to Tokyo. My team gathered rental, safety, international schools, and pet friendliness data for each ward, normalized it, and display that information to the user through a filter system on an interactive map of Toyko. </p>
        </div>
        <div className="tech-stack">
          <ul>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/rails/rails-plain.svg" alt="rails icon"></img></li>
            <li><img src="/assets/mapbox.svg" alt="mapbox icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/postgresql/postgresql-plain.svg" alt="postgres icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/heroku/heroku-plain.svg" alt="heroku icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-plain.svg" alt="javascript icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/html5/html5-plain.svg" alt="html5 icon"></img></li>
            <li><img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/css3/css3-plain.svg" alt="css3 icon"></img></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects;
