import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./styles/LoginSignup.css"; // Import CSS file

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Hook to navigate after successful login/signup

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        let response;
        if (isLogin) {
          // Login request
          response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password,
          });
        } else {
          // Signup request
          response = await axios.post("http://localhost:5000/api/auth/signup", {
            email,
            password,
          });
        }

        // Store the token in localStorage
        localStorage.setItem("token", response.data.token);

        // Redirect to the dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(
        "Error during authentication:",
        error.response?.data?.message
      );
      alert(
        error.response?.data?.message ||
          "An error occurred during authentication"
      );
    }
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={toggleForm} style={{ cursor: "pointer", color: "blue" }}>
        {isLogin
          ? "Don't have an account? Sign up"
          : "Already have an account? Log in"}
      </p>
    </div>
  );
};

export default LoginSignup;
