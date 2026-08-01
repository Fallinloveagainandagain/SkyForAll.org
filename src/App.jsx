import './App.css';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Quiz from './components/Quiz/Quiz';
import Volunteer from './components/Volunteer/Volunteer';
import Resources from './components/Resources/Resources';
import Roadmap from './components/Roadmap/Roadmap';
import SkyPlanner from './components/SkyPlanner/SkyPlanner';
import Footer from './components/Footer/Footer';

import Stars from './components/Stars/Stars';
import Planet from './components/Planet/Planet';

function App() {
  return (
    <div className="app">
      <div className="background"></div>

      <Stars />

      <Planet />

      <div className="content">
        <Hero />

        <section className="two-column">
          <About />
          <Quiz />
        </section>

        <section className="two-column">
          <Volunteer />
          <Resources />
        </section>

        <section className="roadmap-section">
          <Roadmap />
        </section>

        <section className="planner-section">
          <SkyPlanner />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
