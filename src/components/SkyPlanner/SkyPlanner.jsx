import './SkyPlanner.css';
import RetroWindow from '../RetroWindow/RetroWindow';
import { FaMapMarkedAlt, FaMoon, FaCalendarAlt } from 'react-icons/fa';

function SkyPlanner() {
  const events = [
    {
      title: 'Meteor Shower',
      date: '12 Aug',
      color: '#00ffff',
    },
    {
      title: 'Full Moon',
      date: '18 Aug',
      color: '#ff66cc',
    },
    {
      title: 'Planet Viewing',
      date: '22 Aug',
      color: '#ffe600',
    },
  ];

  return (
    <RetroWindow title="sky_planner.exe">
      <div className="planner">
        <h2>SKY PLANNER</h2>

        <div className="planner-grid">
          <div className="map-card">
            <FaMapMarkedAlt className="planner-icon" />

            <h3>Find Your Sky</h3>

            <p>Interactive sky map coming soon.</p>

            <div className="fake-map">🌎</div>
          </div>

          <div className="events-card">
            <FaCalendarAlt className="planner-icon" />

            <h3>Upcoming Events</h3>

            {events.map((event, index) => (
              <div
                key={index}
                className="event"
                style={{
                  borderLeft: `5px solid ${event.color}`,
                }}
              >
                <strong>{event.title}</strong>

                <span>{event.date}</span>
              </div>
            ))}
          </div>

          <div className="tonight-card">
            <FaMoon className="planner-icon" />

            <h3>Tonight's Sky</h3>

            <ul>
              <li>🌕 Moon Visibility : 84%</li>

              <li>✨ Jupiter Visible</li>

              <li>⭐ Saturn Visible</li>

              <li>🌌 Clear Sky Expected</li>
            </ul>
          </div>
        </div>
      </div>
    </RetroWindow>
  );
}

export default SkyPlanner;
