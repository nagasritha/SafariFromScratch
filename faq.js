// Define your questions array
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    let questions = [
        {
            id: 1,
            question: "How does ExamSafari works?",
            answer: "It is a service platform for students who migrate from different places to attempt their exams."
        },
        {
            id: 2,
            question: "How does ExamSafari works?",
            answer: "It is a service platform for students who migrate from different places to attempt their exams."
        },
        {
            id: 3,
            question: "How does ExamSafari works?",
            answer: "It is a service platform for students who migrate from different places to attempt their exams."
        },
        {
            id: 4,
            question: "How does ExamSafari works?",
            answer: "It is a service platform for students who migrate from different places to attempt their exams."
        }
    ];
    
    // Get the container element
    const questionsContainer = document.getElementById("questions");
    
    // Function to create question elements
    function createQuestionElement(question) {
        const questionElement = document.createElement("div");
        
        
        const onlyQuestion = document.createElement("div");
        onlyQuestion.classList.add("question");
        questionElement.appendChild(onlyQuestion);
        // Create question text
        const questionText = document.createElement("h6");
        questionText.textContent = question.question;
        onlyQuestion.appendChild(questionText);
    
        // Create answer text (initially hidden)
        const answerText = document.createElement("div");
        answerText.textContent = question.answer;
        answerText.style.display = "none";
        questionElement.appendChild(answerText);
    
        // Create toggle button
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "+";
        toggleButton.classList.add("plus-minus");
        onlyQuestion.appendChild(toggleButton);

    
        // Add click event listener to toggle button
        toggleButton.addEventListener("click", () => {
            if (answerText.style.display === "none") {
                // Show answer
                answerText.style.display = "block";
                toggleButton.textContent = "-";
            } else {
                // Hide answer
                answerText.style.display = "none";
                toggleButton.textContent = "+";
            }
        });
        questionElement.appendChild(document.createElement("hr"));
    
        return questionElement;
    }
    
    // Function to render questions
    function renderQuestions() {
        questions.forEach((question) => {
            const questionElement = createQuestionElement(question);
            questionsContainer.appendChild(questionElement);
        });
    }
    
    // Call renderQuestions to display questions
    renderQuestions();
    
});

