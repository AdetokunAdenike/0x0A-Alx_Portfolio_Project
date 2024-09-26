import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SpellingQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const navigate = useNavigate(); // Hook for navigation

  const wordList = [
    "accommodate",
    "pronunciation",
    "misspell",
    "embarrass",
    "millennium",
    "supersede",
    "exceed",
    "privilege",
    "receive",
    "weird",
  ];

  // Fetch words from Free Dictionary API on component mount
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const shuffledWords = wordList
          .sort(() => 0.5 - Math.random())
          .slice(0, 5); // Pick 5 random words
        const wordPromises = shuffledWords.map((word) =>
          axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        );
        const responses = await Promise.all(wordPromises);

        const fetchedWords = responses.map((response) => {
          const wordData = response.data[0]; // Get word data from API response
          return {
            word: wordData.word,
            hint: wordData.meanings[0].definitions[0].definition, // Example hint
          };
        });

        setQuestions(fetchedWords);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching words:", err);
        setError("Failed to load quiz words.");
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  // Handle user input for each word
  const handleAnswerChange = (index, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: answer,
    }));
  };

  // Submit and calculate the quiz result
  const submitQuiz = async () => {
    const userScore = calculateScore();
    setScore(userScore);
    setQuizCompleted(true);
    alert(`Quiz completed! Your score is: ${userScore}`);

    // Send the quiz score to the backend
    try {
      const token = localStorage.getItem("token"); // Get JWT token from localStorage
      await axios.post(
        "http://localhost:5000/api/quiz/submit",
        { score: userScore, topic: "Spelling Quiz" }, // Payload
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set the Authorization header
          },
        }
      );
      alert("Quiz score submitted successfully!");
    } catch (error) {
      console.error("Error submitting quiz score:", error);
      alert("Error submitting quiz score");
    }
  };

  // Calculate the user's score
  const calculateScore = () => {
    return questions.reduce((total, question, index) => {
      const correctAnswer = question.word;
      const userAnswer = userAnswers[index];
      if (userAnswer?.toLowerCase() === correctAnswer.toLowerCase()) {
        return total + 1;
      }
      return total;
    }, 0);
  };

  if (loading) {
    return <p>Loading words...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Spelling Quiz</h2>
      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <h4>{question.hint}</h4>
              <p>Type the correct spelling:</p>
              <input
                type="text"
                value={userAnswers[index] || ""}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              />
            </li>
          ))}
        </ul>
      )}

      {!quizCompleted && <button onClick={submitQuiz}>Complete Quiz</button>}
      {quizCompleted && <p>Quiz completed! Your score: {score}</p>}

      {/* Add "My Profile" button */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{ marginTop: "20px" }}
      >
        My Profile
      </button>
    </div>
  );
};

export default SpellingQuiz;
