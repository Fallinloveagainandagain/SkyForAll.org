import './About.css';
import RetroWindow from '../RetroWindow/RetroWindow';

function About() {
  return (
    <RetroWindow title="about_us.txt">
      <div className="about">
        <h2>{'>'} INITIALIZING...</h2>

        <p>
          Welcome to Sky For All! We are a student-led, beginner-friendly
          initiative.
        </p>

        <p>
          Astronomy is amazing, but many people cannot participate due to
          financial or geographic limitations.
        </p>

        <p>We believe the stars belong to EVERYONE.</p>

        <p>Join our online community and start exploring space today.</p>
      </div>
    </RetroWindow>
  );
}

export default About;
