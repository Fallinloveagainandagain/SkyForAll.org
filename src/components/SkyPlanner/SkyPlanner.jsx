import { useState } from 'react';
import './SkyPlanner.css';
import RetroWindow from '../RetroWindow/RetroWindow';
import { FaPlay } from 'react-icons/fa';

const eventDate = new Date('2026-08-12');
const today = new Date();

const daysLeft = Math.max(
  0,
  Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24)),
);

const targets = [
  {
    id: 1,
    name: 'Perseid Meteor Shower',
    type: 'Meteor Shower',
    hemisphere: 'north',
    equipment: 'eye',
    bestTime: '11:00 PM - 4:00 AM',
    direction: 'North-East',
    difficulty: 'Easy',
    description:
      'One of the brightest meteor showers of the year with up to 100 meteors per hour.',
  },

  {
    id: 2,
    name: 'Andromeda Galaxy (M31)',
    type: 'Galaxy',
    hemisphere: 'north',
    equipment: 'binoculars',
    bestTime: '10:00 PM',
    direction: 'East',
    difficulty: 'Medium',
    description:
      'Nearest spiral galaxy to the Milky Way and visible using binoculars.',
  },

  {
    id: 3,
    name: 'Albireo',
    type: 'Double Star',
    hemisphere: 'north',
    equipment: 'telescope',
    bestTime: '9:00 PM',
    direction: 'South',
    difficulty: 'Easy',
    description:
      'Beautiful blue and gold double star located in the Cygnus constellation.',
  },

  {
    id: 4,
    name: 'Southern Pleiades',
    type: 'Open Cluster',
    hemisphere: 'south',
    equipment: 'eye',
    bestTime: '8:30 PM',
    direction: 'South-East',
    difficulty: 'Easy',
    description: 'Bright open star cluster visible to the naked eye.',
  },

  {
    id: 5,
    name: 'Omega Centauri',
    type: 'Globular Cluster',
    hemisphere: 'south',
    equipment: 'binoculars',
    bestTime: '10:30 PM',
    direction: 'South',
    difficulty: 'Medium',
    description: 'Largest globular cluster in the Milky Way.',
  },

  {
    id: 6,
    name: 'Eta Carina Nebula',
    type: 'Nebula',
    hemisphere: 'south',
    equipment: 'telescope',
    bestTime: '11:30 PM',
    direction: 'South',
    difficulty: 'Hard',
    description: 'One of the brightest nebulae in the night sky.',
  },
];

function SkyPlanner() {
  const [hemisphere, setHemisphere] = useState('north');
  const [equipment, setEquipment] = useState('eye');
  const [openId, setOpenId] = useState(null);

  const visibleTargets = targets.filter(
    (target) =>
      target.hemisphere === hemisphere && target.equipment === equipment,
  );

  return (
    <RetroWindow title="sky_planner.exe">
      <div className="planner">
        {/* HEADER */}

        <div className="scan-header">
          <div className="scan-left">
            <FaPlay />

            <span>SCANNING TONIGHT'S SKY...</span>
          </div>

          <div className="scan-date">
            {today.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </div>

        {/* TOP */}

        <div className="planner-top">
          <div className="planner-box">
            <h5>MOON PHASE</h5>

            <div className="moon">🌗</div>

            <h3>Last Quarter</h3>

            <p>44% Illuminated</p>
          </div>

          <div className="planner-box">
            <h5>SKY QUALITY</h5>

            <div className="quality-bars">
              <span className="fill"></span>

              <span className="fill"></span>

              <span className="fill"></span>

              <span></span>

              <span></span>
            </div>

            <h3>Good</h3>

            <p>Moderate Moonlight</p>
          </div>
        </div>

        {/* EVENT */}

        <div className="event-banner">
          <div>
            <h4>⚡ NEXT EVENT</h4>

            <p>Total Solar Eclipse</p>

            <small>Visible from Greenland, Iceland & Northern Spain</small>
          </div>

          <div className="countdown">
            <span>{daysLeft}</span>

            <p>DAYS</p>
          </div>
        </div>

        {/* HEMISPHERE */}

        <div className="tab-row">
          <button
            className={hemisphere === 'north' ? 'active' : ''}
            onClick={() => setHemisphere('north')}
          >
            🌍 Northern Hemisphere
          </button>

          <button
            className={hemisphere === 'south' ? 'active' : ''}
            onClick={() => setHemisphere('south')}
          >
            🌎 Southern Hemisphere
          </button>
        </div>

        {/* EQUIPMENT */}

        <div className="tab-row equipment">
          <button
            className={equipment === 'eye' ? 'active-eye' : ''}
            onClick={() => setEquipment('eye')}
          >
            👁 Naked Eye
          </button>

          <button
            className={equipment === 'binoculars' ? 'active-eye' : ''}
            onClick={() => setEquipment('binoculars')}
          >
            🔭 Binoculars
          </button>

          <button
            className={equipment === 'telescope' ? 'active-eye' : ''}
            onClick={() => setEquipment('telescope')}
          >
            🔭 Telescope
          </button>
        </div>

        {/* STATUS */}

        <div className="status">
          ✓ {visibleTargets.length} TARGET
          {visibleTargets.length !== 1 && 'S'} AVAILABLE TONIGHT
        </div>

        {/* TARGETS */}

        <div className="accordion-list">
          {visibleTargets.map((item) => (
            <div className="accordion" key={item.id}>
              <div
                className="accordion-header"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              >
                <div>⭐ {item.name}</div>

                <div>
                  <span className="badge">{item.type}</span>

                  <span className="arrow">
                    {openId === item.id ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {openId === item.id && (
                <div className="accordion-body">
                  <div className="detail-grid">
                    <div>
                      <strong>Best Time</strong>

                      <p>{item.bestTime}</p>
                    </div>

                    <div>
                      <strong>Direction</strong>

                      <p>{item.direction}</p>
                    </div>

                    <div>
                      <strong>Difficulty</strong>

                      <p>{item.difficulty}</p>
                    </div>

                    <div>
                      <strong>Equipment</strong>

                      <p>{item.equipment}</p>
                    </div>
                  </div>

                  <p className="desc">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </RetroWindow>
  );
}

export default SkyPlanner;
