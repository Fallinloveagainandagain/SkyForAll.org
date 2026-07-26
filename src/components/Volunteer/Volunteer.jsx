import './Volunteer.css';
import RetroWindow from '../RetroWindow/RetroWindow';

function Volunteer() {
  return (
    <RetroWindow title="volunteer_portal.exe">
      <div className="volunteer">
        <h2>JOIN THE CREW</h2>

        <p>
          Help organize astronomy events, create educational content, and
          inspire future explorers.
        </p>

        <button className="join-btn">APPLY NOW</button>
      </div>
    </RetroWindow>
  );
}

export default Volunteer;
