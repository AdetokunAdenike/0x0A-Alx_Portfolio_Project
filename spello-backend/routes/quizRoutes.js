const express = require("express");
const {
  saveQuizScore,
  getQuizResults,
} = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Route for submitting quiz scores
router.post("/submit", authMiddleware, saveQuizScore);

// Route for fetching quiz results
router.get("/results", authMiddleware, getQuizResults);

module.exports = router;
