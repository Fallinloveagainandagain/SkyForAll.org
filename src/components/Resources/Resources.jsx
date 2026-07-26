import './Resources.css';
import RetroWindow from '../RetroWindow/RetroWindow';

function Resources() {
  const resources = [
    'Beginner Astronomy',
    'Constellation Guide',
    'NASA Learning',
    'Space News',
    'Telescope Basics',
    'Night Sky Maps',
  ];

  return (
    <RetroWindow title="learning_archives.txt">
      <div className="resources">
        <h2>LEARNING ARCHIVES</h2>

        <div className="resource-grid">
          {resources.map((item, index) => (
            <div key={index} className="resource-card">
              📁 {item}
            </div>
          ))}
        </div>
      </div>
    </RetroWindow>
  );
}

export default Resources;
