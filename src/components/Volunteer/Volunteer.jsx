import './Volunteer.css';
import RetroWindow from '../RetroWindow/RetroWindow';

function Volunteer() {
  return (
    <RetroWindow title="volunteer_portal.exe">
      <div className="volunteer">
        <h2>
          <i className="fa-regular fa-star"></i> JOIN THE CREW
        </h2>

        <p>
          Help us run digital events, post on social media, and write about
          space from your bedroom. Zero experience needed!
        </p>

        <div className="form">
          <i className="fa-regular fa-file-lines"> Intake form 2026</i>
          <a
            className="join-btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSclBmLCKfMOW7qF7y5G4ZferS8rV7U0R3dSMUfbfovGNuhRnA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </RetroWindow>
  );
}

export default Volunteer;
