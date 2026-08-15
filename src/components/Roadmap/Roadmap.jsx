import { useState } from 'react';
import './Roadmap.css';
import RetroWindow from '../RetroWindow/RetroWindow';

const roadmapData = [
  {
    month: 'JUNE 2026',
    description: 'Recruitment & Organization Setup',
    icon: '🚀',
    color: 'gray',
    status: 'COMPLETED',
    activities: [
      'Finalizing member selections',
      'Reviewing applications',
      'Assigning team roles',
      'Sending acceptance confirmations',
      'Setting up Discord communication',
      'Preparing handbooks & orientation materials',
    ],
    goal: 'Understand the organization structure and prepare for the journey ahead.',
  },

  {
    month: 'JULY 2026',
    description: 'Orientation & Team Introduction',
    icon: '📚',
    color: 'gray',
    status: 'COMPLETED',
    activities: [
      'Official onboarding of members',
      'Introduction to Sky For All mission & goals',
      'Team introductions & role explanations',
      'Reviewing handbooks',
      'Introducing communication systems',
      'First team meetings',
    ],
    goal: 'Understand your role, team, responsibilities, and how we work together.',
  },

  {
    month: 'AUGUST 2026',
    description: 'Learning & Skill Development',
    icon: '🔭',
    color: 'green',
    current: true,
    activities: [
      'Astronomy learning sessions',
      'Research guidance',
      'Skill development activities',
      'Team planning',
      'Resource sharing',
      'Small introductory tasks',
    ],
    goal: 'Develop skills and gain confidence in your role.',
  },

  {
    month: 'SEPTEMBER 2026',
    description: 'Project Launch',
    icon: '🪐',
    color: 'yellow',
    activities: [
      'Team projects officially begin',
      'Research projects',
      'Educational content creation',
      'Creative projects',
      'Team collaboration',
      'Progress tracking',
    ],
    goal: 'Actively contribute and participate in projects.',
  },

  {
    month: 'OCTOBER 2026',
    description: 'Growth & Progress',
    icon: '🌙',
    color: 'orange',
    activities: [
      'Reviewing project progress',
      'Team collaboration sessions',
      'Team feedback sessions',
      'Improving work quality',
      'Solving challenges',
      'Planning upcoming activities',
    ],
    goal: 'Improve, learn, and continue growing.',
  },

  {
    month: 'NOVEMBER 2026',
    description: 'Collaboration & Major Projects',
    icon: '🚀',
    color: 'pink',
    activities: [
      'Organization-wide collaborations',
      'Bigger team projects',
      'Community activities',
      'Sharing achievements',
      'Finalizing major projects',
    ],
    goal: 'Collaborate with others and create meaningful work.',
  },

  {
    month: 'DECEMBER 2026',
    description: 'Showcase & Recognition',
    icon: '✨',
    color: 'cyan',
    activities: [
      'Project presentations',
      'Showcasing member work',
      'Reviewing yearly progress',
      'Recognizing contributions',
      'Sharing highlights',
    ],
    goal: "Present your achievements and celebrate the team's progress.",
  },

  {
    month: 'JANUARY 2027',
    description: 'Reflection & Future Planning',
    icon: '🌌',
    color: 'red',
    activities: [
      'Year review',
      'Member feedback',
      'Future planning',
      'New goals and initiatives',
      'Organization improvements',
    ],
    goal: 'Help shape the future direction of Sky For All.',
  },
];

function Roadmap() {
  const [openMonths, setOpenMonths] = useState(['AUGUST 2026']);

  const toggleMonth = (month) => {
    setOpenMonths((prev) =>
      prev.includes(month)
        ? prev.filter((item) => item !== month)
        : [...prev, month],
    );
  };

  return (
    <RetroWindow title="roadmap_2026.exe">
      <div className="roadmap">
        {/* HEADER */}

        <div className="roadmap-heading">
          <span className="roadmap-arrow">▶</span>

          <h2>SKY FOR ALL - ANNUAL ROADMAP 2026/27</h2>
        </div>

        <p className="roadmap-subtitle">
          Our organizational journey from recruitment to reflection. Click any
          month to expand.
        </p>

        {/* TIMELINE */}
        <div className="roadmap-timeline">
          <div className="roadmap-line"></div>

          {roadmapData.map((item) => {
            const isOpen = openMonths.includes(item.month);

            return (
              <div
                className={`roadmap-item ${item.color} ${
                  item.current ? 'current' : ''
                } ${isOpen ? 'is-open' : ''}`}
                key={item.month}
              >
                {/* ICON */}

                <div className="roadmap-icon">
                  <span>{item.icon}</span>
                </div>

                {/* MONTH */}

                <div className="month-wrapper">
                  <button
                    className="month-header"
                    onClick={() => toggleMonth(item.month)}
                  >
                    <div className="month-info">
                      <div className="month-title-row">
                        <span className="month-name">{item.month}</span>

                        {item.status && (
                          <span className="completed-tag">{item.status}</span>
                        )}

                        {item.current && (
                          <span className="current-tag">◀ YOU ARE HERE</span>
                        )}
                      </div>

                      <div className="month-description">
                        {item.description}
                      </div>
                    </div>

                    <span className="month-arrow">{isOpen ? '▲' : '▼'}</span>
                  </button>

                  {/* DROPDOWN CONTENT */}
                  {isOpen && (
                    <div className="month-content">
                      <div className="activities-title">ACTIVITIES</div>

                      <ul>
                        {item.activities.map((activity, index) => (
                          <li key={index}>
                            <span>▸</span>
                            {activity}
                          </li>
                        ))}
                      </ul>

                      <div className="member-goal">
                        <div className="goal-title">MEMBER GOAL</div>

                        <p>"{item.goal}"</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* YEAR EXPECTATIONS */}
        <div className="year-expectations">
          <h3>⭐ THROUGHOUT THE YEAR - MEMBER EXPECTATIONS</h3>

          <div className="expectations-grid">
            <div>
              <p>⭐ Stay active and engaged</p>
              <p>⭐ Complete assigned responsibilities</p>
              <p>⭐ Share ideas and creativity</p>
            </div>

            <div>
              <p>⭐ Communicate with your teams</p>
              <p>⭐ Support your teammates</p>
              <p>⭐ Continue learning and exploring astronomy</p>
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="mission-box">
          <h3>🌌 &nbsp; SKY FOR ALL MISSION</h3>

          <p>
            Together, we aim to create a community where people can explore
            astronomy, develop new skills, collaborate on meaningful projects,
            and inspire curiosity about the universe.
          </p>

          <strong>🚀 &nbsp; WELCOME TO THE JOURNEY.</strong>
        </div>
      </div>
    </RetroWindow>
  );
}

export default Roadmap;
