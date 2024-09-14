import React from "react";
import "./Quiz.css";
const Quiz = () => {
  return (
    <div className="container">
      <h1>Spello</h1>
      <hr />
      <h2>What is the name of the object in the image?</h2>
      <ul>
        <li>Hypopotamus</li>
        <li>Hipopotamus</li>
        <li>Hippopotamus</li>
        <li>Hyppopotamus</li>
      </ul>
      <button>Next</button>
      <div className="index">Question 1 of 5</div>
    </div>
  );
};

export default Quiz;
