import './Resources.css';
import RetroWindow from '../RetroWindow/RetroWindow';

function Resources() {
  const resources = [
    {
      title: 'Stellarium Web',
      description: 'Explore the night sky in your browser.',
      icon: 'fa-solid fa-earth-americas',
      link: 'https://stellarium-web.org/',
    },
    {
      title: 'NASA APOD',
      description: "NASA's Astronomy Picture of the Day.",
      icon: 'fa-solid fa-camera-retro',
      link: 'https://apod.nasa.gov/apod/',
    },
    {
      title: 'Astronomy Basics',
      description: 'Learn the fundamentals of astronomy.',
      icon: 'fa-solid fa-book-open',
      link: 'https://science.nasa.gov/universe/',
    },
  ];

  return (
    <RetroWindow title="learning_archives.txt">
      <div className="resources">
        <div className="title">
          <i className="fa-solid fa-book-open"></i> LEARNING RESOURCES
          <hr />
        </div>

        <div className="resource-grid">
          {resources.map((resource, index) => (
            <div className="resource-card" key={index}>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-btn"
              >
                <i className={`${resource.icon} resource-icon`}></i>
                <h3>
                  <div className="resource-title">{resource.title}</div>
                  <p className="resource-description">{resource.description}</p>
                </h3>
                <i className="link fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </RetroWindow>
  );
}

export default Resources;
