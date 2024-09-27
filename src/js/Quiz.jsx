import { useState } from "react";
import "./Quiz.css";
import { data } from "./data";

const Quiz = () => {
  const [index, setIndex] = useState(0); // Current question index
  const [lock, setLock] = useState(false); // Lock to prevent multiple selections for one question
  const question = data[index]; // Current question

  // Function to check if the answer is correct
  const checkAns = (e, selectedOption) => {
    if (!lock) {
      // Only check answer if the question is not locked
      if (question.answer === selectedOption) {
        e.target.classList.add("correct");
      } else {
        e.target.classList.add("wrong");
      }
      setLock(true); // Lock the question after an answer is selected
    }
  };

  // Function to handle "Next" button click
  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1); // Move to the next question
      setLock(false); // Reset lock for the next question
    }
  };

  return (
    <div className="container">
      <h1>Spello</h1>
      <hr />
      <h2>
        {index + 1}. {question.question}
      </h2>
      <ul>
        {question.options.map((option, i) => (
          <li key={i} onClick={(e) => checkAns(e, option)}>
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
      <div className="index">
        Question {index + 1} of {data.length}
      </div>
    </div>
  );
};

export default Quiz;
