function Projects ({ projectRefs }) {
  return (
    <div className='projects-container'>
      <div className='project'>
        <div className='project-header'>
          <div className='project-img'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.teachtokyo.com/'
              alt='teach tokyo website'
            >
              <img src='/assets/TeachTokyo.png' alt='thumbnail'></img>
            </a>
          </div>
          <div className='project-title'>
            <h2>Teach Tokyo</h2>
          </div>
        </div>
        <div className='project-body'>
          <p>
            Teach Tokyo is a quiz based strategy game to be used in the
            classroom as a warmup activity before lessons. It uses an
            interactive SVG map of Japan which students can conquer for their
            teams.
          </p>
        </div>
        <div className='tech-stack'>
          <ul>
            <li>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/rails/rails-plain.svg'
                alt='rails icon'
              ></img>
            </li>
            <li>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/postgresql/postgresql-plain.svg'
                alt='postgres icon'
              ></img>
            </li>
            <li>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/heroku/heroku-plain.svg'
                alt='heroku icon'
              ></img>
            </li>
            <li>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-plain.svg'
                alt='javascript icon'
              ></img>
            </li>
            <li>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/html5/html5-plain.svg'
                alt='html5 icon'
              ></img>
            </li>
            <li>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/css3/css3-plain.svg'
                alt='css3 icon'
              ></img>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className='construction'>
        <div id='teach-tokyo' className='project'>
          <div className="maintenance">
            <h1>Under Maintenance</h1>
          </div>
          <div className='project-header'>
            <div className='project-img'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.tokyomaps.net/'
                alt='teach tokyo website'
              >
                <img src='/assets/TokyoMaps.png' alt='thumbnail'></img>
              </a>
            </div>
            <div className='project-title'>
              <h2>Tokyo Maps</h2>
            </div>
          </div>
          <div className='project-body'>
            <p>
              Tokyo Maps is a MapBox based application made to assist expats
              looking to relocate to Tokyo.{' '}
            </p>
          </div>
          <div className='tech-stack'>
            <ul>
              <li>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/rails/rails-plain.svg'
                  alt='rails icon'
                ></img>
              </li>
              <li>
                <img src='/assets/mapbox.svg' alt='mapbox icon'></img>
              </li>
              <li>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/postgresql/postgresql-plain.svg'
                  alt='postgres icon'
                ></img>
              </li>
              <li>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/heroku/heroku-plain.svg'
                  alt='heroku icon'
                ></img>
              </li>
              <li>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-plain.svg'
                  alt='javascript icon'
                ></img>
              </li>
              <li>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/html5/html5-plain.svg'
                  alt='html5 icon'
                ></img>
              </li>
              <li>
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/css3/css3-plain.svg'
                  alt='css3 icon'
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Projects
