import './Roadmap.css';
import RetroWindow from '../RetroWindow/RetroWindow';

const roadmapData = [
  {
    year: '2023',
    title: 'The Beginning',
    text: 'Sky For All started with a mission to make astronomy accessible to everyone.',
  },
  {
    year: '2024',
    title: 'Community Growth',
    text: 'Hosted online events, workshops and reached hundreds of students.',
  },
  {
    year: '2025',
    title: 'Learning Platform',
    text: 'Created educational resources, quizzes and volunteer opportunities.',
  },
  {
    year: 'Future',
    title: 'Beyond the Stars',
    text: 'Building a worldwide astronomy community for every curious mind.',
  },
];

function Roadmap() {
  return (
    <RetroWindow title="our_journey.exe">
      <div className="roadmap">
        <h2>OUR JOURNEY</h2>

        <div className="timeline">
          {roadmapData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="circle">🚀</div>

              <div className="card">
                <span className="year">{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RetroWindow>
  );
}

export default Roadmap;
