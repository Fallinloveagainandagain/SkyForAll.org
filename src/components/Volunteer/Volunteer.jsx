import './Volunteer.css';
import RetroWindow from '../RetroWindow/RetroWindow';

function Volunteer() {
  return (
    <RetroWindow title="volunteer_portal.exe">
      <div className="volunteer">
        <div className="title">
          <i className="fa-regular fa-star"></i> JOIN THE CREW
        </div>

        <p>
          Help us run digital events, post on social media, and write about
          space from your bedroom. Zero experience needed!
        </p>

        <div className="form">
          <div className="form-title">
            <i className="fa-regular fa-file-lines"></i> Intake form 2026
          </div>
          <div className="form-description">
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
      </div>
    </RetroWindow>
  );
}

export default Volunteer;
