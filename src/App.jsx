import { useState } from "react";
import questions from "./data/questions";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

export default function App() {
  const [stage, setStage] = useState("start"); // start | playing | results
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestion = questions[currentIndex];

  const startQuiz = () => {
    setStage("playing");
    setCurrentIndex(0);
    setScore(0);
    setSelected("");
    setUserAnswers([]);
  };

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    const isCorrect = selected === currentQuestion.answer;
    if (isCorrect) setScore((prev) => prev + 1);

    setUserAnswers((prev) => [...prev, selected]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected("");
    } else {
      setStage("results");
    }
  };

  const restart = () => {
    setStage("start");
    setCurrentIndex(0);
    setScore(0);
    setSelected("");
    setUserAnswers([]);
  };

  // Show different screen based on stage
  if (stage === "start") {
    return <StartScreen onStart={startQuiz} />;
  }

  if (stage === "results") {
    return (
      <Result
        score={score}
        questions={questions}
        userAnswers={userAnswers}
        onRestart={restart}
      />
    );
  }

  // Playing stage
  return (
    <Quiz
      currentQuestion={currentQuestion}
      currentIndex={currentIndex}
      totalQuestions={questions.length}
      selected={selected}
      onSelect={handleSelect}
      onNext={handleNext}
    />
  );
}
