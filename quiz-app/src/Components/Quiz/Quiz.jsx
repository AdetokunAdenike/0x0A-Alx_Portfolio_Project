import React, { useState } from "react";
import "./Quiz.css";
import data
const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState()
  return (
    <div className="container">
      <h1>Spello</h1>
      <hr />
      <h2>1. What is your favorite type of device?</h2>
      <ul>
        <li>Computer</li>
        <li>Phone</li>
        <li>MP3</li>
        <li>PS4</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
};

export default Quiz;
