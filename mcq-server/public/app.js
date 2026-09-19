// Cache the HTML elements updated by the quiz application.
const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score");
const questionDisplay = document.getElementById("question");
const optionsDisplay = document.getElementById("options");
const feedbackDisplay = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

// Keep the quiz data and current progress in memory.
let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let quizFinished = false;

// Render the current question and create its answer buttons.
const renderQuestion = () => {
  const question = questions[currentQuestion];

  questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
  questionDisplay.textContent = question.question;
  feedbackDisplay.textContent = "";
  nextButton.disabled = true;
  nextButton.textContent =
    currentQuestion === questions.length - 1 ? "Finish" : "Next";
  answered = false;
  optionsDisplay.replaceChildren();

  // Create one button for each possible answer.
  question.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.className = "option";
    optionButton.type = "button";
    optionButton.textContent = option;
    optionButton.addEventListener("click", () =>
      selectAnswer(optionButton, option),
    );
    optionsDisplay.appendChild(optionButton);
  });
};

// Check the selected answer, update the score, and reveal the correct answer.
const selectAnswer = (selectedButton, answer) => {
  if (answered) return;
  answered = true;

  const question = questions[currentQuestion];
  const isCorrect = answer === question.answer;
  if (isCorrect) score += 1;

  // Disable all options so the question can only be answered once.
  document.querySelectorAll(".option").forEach((button) => {
    button.disabled = true;
    if (button.textContent === question.answer) button.classList.add("correct");
  });

  if (!isCorrect) selectedButton.classList.add("incorrect");
  feedbackDisplay.textContent = isCorrect
    ? "Correct!"
    : `Answer: ${question.answer}`;
  feedbackDisplay.className = isCorrect ? "correct-text" : "incorrect-text";
  scoreDisplay.textContent = `Score: ${score}`;
  nextButton.disabled = false;
};

// Replace the final question with the score summary.
const finishQuiz = () => {
  quizFinished = true;
  questionNumber.textContent = "Quiz complete";
  questionDisplay.textContent = `You scored ${score} out of ${questions.length}.`;
  optionsDisplay.replaceChildren();
  feedbackDisplay.textContent =
    score === questions.length ? "Perfect score!" : "Well played!";
  feedbackDisplay.className = "correct-text";
  nextButton.textContent = "Restart";
  nextButton.disabled = false;
};

// Move forward, finish the quiz, or restart it depending on the current state.
nextButton.addEventListener("click", () => {
  if (quizFinished) {
    currentQuestion = 0;
    score = 0;
    quizFinished = false;
    renderQuestion();
    return;
  }

  if (currentQuestion === questions.length - 1 && answered) {
    finishQuiz();
    return;
  }

  currentQuestion += 1;
  renderQuestion();
});

// Load the question data from the Node.js API.
const loadQuiz = async () => {
  try {
    const response = await fetch("/questions");
    if (!response.ok) throw new Error("Question request failed");
    questions = await response.json();
    if (!questions.length) throw new Error("No questions found");
    renderQuestion();
  } catch (error) {
    // Show a useful message when the server or API cannot be reached.
    questionNumber.textContent = "Unable to load quiz";
    questionDisplay.textContent =
      "Please check that the server is running and try again.";
    feedbackDisplay.textContent = error.message;
  }
};

// Start loading the quiz when the page is ready.
loadQuiz();
