import "./Resources.css";
import RetroWindow from "../RetroWindow/RetroWindow";

function Resources() {
  const resources = [
    {
      title: "Stellarium Web",
      description: "Explore the night sky in your browser.",
      icon: "fa-solid fa-earth-americas",
      link: "https://stellarium-web.org/",
    },
    {
      title: "NASA APOD",
      description: "NASA's Astronomy Picture of the Day.",
      icon: "fa-solid fa-camera-retro",
      link: "https://apod.nasa.gov/apod/",
    },
    {
      title: "Astronomy Basics",
      description: "Learn the fundamentals of astronomy.",
      icon: "fa-solid fa-book-open",
      link: "https://science.nasa.gov/universe/",
    },
  ];

  return (
    <RetroWindow title="learning_archives.txt">
      <div className="resources">

        <h2>
          <i className="fa-solid fa-book-open"></i> LEARNING RESOURCES
        </h2>

        <div className="resource-grid">

          {resources.map((resource, index) => (
            <div className="resource-card" key={index}>

              <i className={`${resource.icon} resource-icon`}></i>

              <h3>{resource.title}</h3>

              <p>{resource.description}</p>

              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-btn"
              >
                Open Resource
              </a>

            </div>
          ))}

        </div>

      </div>
    </RetroWindow>
  );
}

export default Resources;