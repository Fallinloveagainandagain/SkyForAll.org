import './Hero.css';
import logo from '../../assets/logo.png';

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <img src={logo} alt="Sky For All" className="hero-logo" />

        <h1 className="hero-title">SKY FOR ALL</h1>

        <p className="hero-subtitle">// OPEN ASTRONOMY //</p>

        <div className="hero-banner">
          <div className="scroll-text">
            DISCOVER THE COSMOS ✦ STUDENT LED ✦ BEGINNER FRIENDLY ✦ ONLINE
            EVENTS ✦ OPEN TO EVERYONE ✦
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
