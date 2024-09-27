// Import the data from data.js
import { data as questions } from "./data.js";

// Select relevant elements
const optionButtons = document.querySelectorAll(".option-btn");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-question");
let currentQuestion = 0;

// Load the first question
loadQuestion(currentQuestion);

// Function to load a question
function loadQuestion(questionIndex) {
  const currentQuizData = questions[questionIndex];
  const questionElement = document.getElementById("question");
  questionElement.innerText = currentQuizData.question;

  // Set the options
  optionButtons.forEach((button, index) => {
    button.innerText = currentQuizData.options[index];
    button.dataset.answer =
      currentQuizData.options[index] === currentQuizData.answer
        ? "correct"
        : "incorrect";

    // Reset the button styles and enable the buttons
    button.classList.remove("correct", "incorrect");
    button.disabled = false; // Enable the button again for new attempts
  });

  // Reset feedback and next button
  feedbackElement.innerText = "";
  nextButton.style.display = "none";
}

// Add event listeners to each option button
optionButtons.forEach((button) => {
  button.addEventListener("click", checkAnswer);
});

// Function to check the selected answer
function checkAnswer(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.answer === "correct";

  // Add correct/incorrect classes
  if (isCorrect) {
    selectedButton.classList.add("correct");
    feedbackElement.innerText = "Correct!";

    // Disable all options after the correct answer is chosen
    optionButtons.forEach((button) => (button.disabled = true));

    // Show next question button
    nextButton.style.display = "block";
  } else {
    selectedButton.classList.add("incorrect");
    feedbackElement.innerText = "Wrong! Try again.";

    // Only disable the incorrect button clicked, keeping others clickable
    selectedButton.disabled = true;
  }
}

// Handle the next question button click
nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion(currentQuestion);
  } else {
    feedbackElement.innerText = "Congratulations! You've completed the quiz.";
    nextButton.style.display = "none";
  }
});
