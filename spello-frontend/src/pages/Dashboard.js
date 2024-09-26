import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Fetch quiz results from the backend
  useEffect(() => {
    const fetchQuizResults = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/quiz/results",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quiz results:", error);
      }
    };

    fetchQuizResults();
  }, [token]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the JWT token
    navigate("/"); // Redirect to login/signup page
  };

  return (
    <div>
      <h2>Your Dashboard</h2>
      <button onClick={() => navigate("/quiz")}>Take a New Quiz</button>
      <button onClick={handleLogout}>Logout</button>

      <h3>Your Quiz Results</h3>
      {quizzes.length === 0 ? (
        <p>No quizzes taken yet.</p>
      ) : (
        <ul>
          {quizzes.map((quiz, index) => (
            <li key={index}>
              <p>Topic: {quiz.topic}</p>
              <p>Score: {quiz.score}</p>
              <p>Date: {new Date(quiz.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
