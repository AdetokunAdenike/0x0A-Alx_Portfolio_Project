# Spello Quiz App

![Spello Screenshot](./Landingpage.png) <!-- Add a screenshot of your app here -->

## Introduction

**Spello** is an interactive **spelling quiz app** designed to help users improve their spelling skills. It provides randomized spelling quizzes based on a variety of word lists, tracks users' progress, and allows them to review their performance on a personalized dashboard.

[Visit the live app here](https://your-deployed-site.com) <!-- Link to your deployed app -->
[Read the final project blog article](https://your-blog-link.com) <!-- Link to your blog article -->

## Author

- **[Your Name](https://www.linkedin.com/in/your-linkedin-profile)**

## Installation

To install and run the Spello Quiz App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/spello-quiz-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd spello-quiz-app
   ```

3. Install dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

4. Install dependencies for the backend:

   ```bash
   cd ../backend
   npm install
   ```

5. Create a `.env` file in the **backend** folder and add the following:

   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

6. Run both the backend and frontend servers:
   ```bash
   cd frontend
   npm start
   # Open a new terminal for backend
   cd backend
   npm start
   ```

## Usage

Once you have the app running locally:

1. Navigate to the **landing page** and click **"Start Quiz"** to begin.
2. If you don't have an account, create one, or log in if you're a returning user.
3. Take quizzes to test your spelling skills.
4. View your results and progress on the **Dashboard**.

## Contributing

We welcome contributions to Spello Quiz App! To contribute:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b my-new-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin my-new-feature
   ```
5. Submit a pull request for review.

## Related Projects

Here are some related projects and resources:

- [WordsAPI](https://www.wordsapi.com/) - A word generation API for vocabulary apps.
- [Datamuse API](https://www.datamuse.com/api/) - An API for finding words based on specific criteria.

## Licensing

This project was approved by ALX Africa.

---
