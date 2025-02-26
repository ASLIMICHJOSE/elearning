let quizStarted = false;
let score = 0;  // Initialize the score
let currentQuestionIndex = 0;  // Keep track of the current question

// Define the questions and answers
const questions = [
    {
        question: "eLearning is an effective method of education.",
        answer: true // Correct answer: True
    },
    {
        question: "eLearning requires a physical classroom to be effective.",
        answer: false // Correct answer: False
    },
    {
        question: "You can learn anywhere using eLearning platforms.",
        answer: true // Correct answer: True
    },
    {
        question: "eLearning can only be done on a computer.",
        answer: false // Correct answer: False (eLearning can be done on mobile devices too)
    },
];

// Start the quiz
function startQuiz() {
    quizStarted = true;
    score = 0;  // Reset the score
    currentQuestionIndex = 0;  // Start from the first question
    document.getElementById("startQuizBtn").style.display = "none";  // Hide the start button
    document.getElementById("quizContainer").style.display = "block";  // Show the quiz container
    document.getElementById("quizResult").style.display = "none";  // Hide the result
    document.getElementById("score").style.display = "none";  // Hide the score
    showQuestion();  // Show the first question
}

// Show the current question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = question.question;
}

// Check the user's answer
function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;  // Increment score if the answer is correct
        document.getElementById("quizResult").innerHTML = "Correct! 🎉";
    } else {
        document.getElementById("quizResult").innerHTML = "Incorrect! 😕";
    }

    document.getElementById("quizResult").style.display = "block";  // Show the result

    // Move to the next question or end the quiz
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            showQuestion();  // Show the next question
        }, 1500);  // Wait 1.5 seconds before showing the next question
    } else {
        endQuiz();  // End the quiz when all questions are answered
    }
}

// End the quiz and show the score
function endQuiz() {
    document.getElementById("quizContainer").style.display = "none";  // Hide the quiz container
    document.getElementById("score").style.display = "block";  // Show the score
    document.getElementById("points").innerHTML = score;  // Update the score

    setTimeout(() => {
        document.getElementById("startQuizBtn").style.display = "inline-block";  // Show the start button again
    }, 3000);  // Wait for 3 seconds before showing the start button again
}

// Add event listener to start quiz button
document.getElementById("startQuizBtn").addEventListener("click", startQuiz);
