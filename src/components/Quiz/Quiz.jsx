import { useState } from "react";
import "./Quiz.css";
import RetroWindow from "../RetroWindow/RetroWindow";

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    answer: "Mars",
  },
  {
    question: "What is the closest star to Earth?",
    options: ["Sirius", "Sun", "Alpha Centauri", "Polaris"],
    answer: "Sun",
  },
  {
    question: "Which galaxy contains our Solar System?",
    options: [
      "Andromeda",
      "Whirlpool",
      "Milky Way",
      "Sombrero",
    ],
    answer: "Milky Way",
  },
  {
    question: "How many planets are in our Solar System?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    question: "Earth's natural satellite is...",
    options: ["Europa", "Moon", "Titan", "Ganymede"],
    answer: "Moon",
  },
  {
    question: "Which planet has the largest rings?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },
  {
    question: "What is the largest planet?",
    options: ["Saturn", "Jupiter", "Neptune", "Earth"],
    answer: "Jupiter",
  },
  {
    question: "Which telescope is in space?",
    options: [
      "James Webb",
      "Keck",
      "VLT",
      "GMT",
    ],
    answer: "James Webb",
  },
  {
    question: "A shooting star is actually...",
    options: [
      "A star",
      "A comet",
      "A meteor",
      "A planet",
    ],
    answer: "A meteor",
  },
  {
    question: "The first person on the Moon was...",
    options: [
      "Yuri Gagarin",
      "Buzz Aldrin",
      "Neil Armstrong",
      "John Glenn",
    ],
    answer: "Neil Armstrong",
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleOption(option) {
    if (selected) return;

    setSelected(option);

    if (option === questions[current].answer) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    if (current + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected("");
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setFinished(false);
  }

  return (
    <RetroWindow title="astro_quiz.exe">
      <div className="quiz">
        {!finished ? (
          <>
            <h2>ASTRO QUIZ</h2>

            <p className="counter">
              Question {current + 1} / {questions.length}
            </p>

            <h3>{questions[current].question}</h3>

            <div className="quiz-grid">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOption(option)}
                  className={
                    selected
                      ? option === questions[current].answer
                        ? "correct"
                        : option === selected
                        ? "wrong"
                        : ""
                      : ""
                  }
                >
                  {option}
                </button>
              ))}
            </div>

            {selected && (
              <button
                className="next-btn"
                onClick={nextQuestion}
              >
                {current === questions.length - 1
                  ? "Show Result"
                  : "Next Question"}
              </button>
            )}
          </>
        ) : (
          <div className="result">
            <h2>Quiz Completed 🚀</h2>

            <h1>
              {score} / {questions.length}
            </h1>

            <p>
              {score >= 8
                ? "Excellent! You're an Astronomy Expert 🌌"
                : score >= 5
                ? "Great Job! Keep Exploring 🚀"
                : "Keep Learning! You'll Get Better ⭐"}
            </p>

            <button
              className="restart-btn"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </RetroWindow>
  );
}

export default Quiz;