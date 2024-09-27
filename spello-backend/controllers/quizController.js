const Quiz = require("../models/Quiz");

// Save quiz score
exports.saveQuizScore = async (req, res) => {
  const { score, topic } = req.body;
  const userId = req.user.userId;

  try {
    const quiz = new Quiz({ user: userId, score, topic });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error saving quiz score" });
  }
};

// Get all quizzes taken by the logged-in user
exports.getQuizResults = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ user: req.user.userId });
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz results" });
  }
};
