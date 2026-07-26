import './Quiz.css';
import RetroWindow from '../RetroWindow/RetroWindow';

function Quiz() {
  return (
    <RetroWindow title="astro_quiz.exe">
      <div className="quiz">
        <h2>ASTRO QUIZ.EXE</h2>

        <h3>What is Earth's natural satellite?</h3>

        <div className="quiz-grid">
          <button>Europa</button>

          <button className="correct">Moon</button>

          <button>Titan</button>

          <button>Ganymede</button>
        </div>
      </div>
    </RetroWindow>
  );
}

export default Quiz;
