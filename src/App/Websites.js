function Projects() {


  return (
    <div id="projects-container">
      <div className="project-card">
        <img alt="Teach Tokyo" src="/assets/teach_tokyo.png"></img>
        <div className="project-content">
          <title>TeachTokyo</title>
          <div className="description">A fun, interactive map game to help teach your students!</div>
          <div className="tech-stack">
            <h4>Tech Stack</h4>
          </div>
        </div>
      </div>
      <div className="project-card">
        <img alt="Tokyo Maps" src="assets/tokyo_maps.png"></img>
        <div className="project-content">
          <title></title>
          <div className="description">An informative website to help expats discover Tokyo.</div>
          <div className="tech-stack"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
