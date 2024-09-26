import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import "./App.css"; // Import the global CSS file

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public route for login/signup */}
        <Route path="/" element={<LoginSignup />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
