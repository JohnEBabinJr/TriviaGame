Questions = [
    {
        question: "Who was prophized to *Bring Balance to the Force* ?",
        answers: ["Anakin Skywalker", "Obi-Wan", "Yoda", "Han Solo"],
        CorrectAnswer: 0
    },
    {
        question: "What is the most imfamous ship in the galaxy?",
        answers: ["Ans1", "Ans2", "Ans3", "Ans4"],
        CorrectAnswer: 0
    },
    {
        question: "What is the name of the frozen ice planet with a rebel base?",
        answers: ["Hoth", "Naboo", "Tatooine", "Coruscant"],
        CorrectAnswer: 0
    },
    {
        question: "What are the names of Anakin Skywalker's children?",
        answers: ["Luke and Leia", "Sky and Walker", "Chewbacca and Yoda", "R2-D2 and C-3PO"],
        CorrectAnswer: 0
    },
    {
        question: "Who is considerd the greatest smuggler in the galaxy?",
        answers: ["Han Solo", "Jar Jar Binks", "Boba Fett", "Chewbacca"],
        CorrectAnswer: 0
    }
];

function startGame() {
    //onclick of start button
    //hide instruction div
    //hide start button
    //hide result div
    gameplay();
};

function gameplay() {
    //loop through questions
    updateDisplay();
    //on click for selecting answer
    checkAnswer();

    displayResults();
};

function updateDisplay() {
    //reset timer
    //clear out html
    //add in new questions to html
    //set clickable attr for each possible ans
};

function checkAnswer() {
    //compare to ans in object.answers array
    //if answer selected is correct, add points
    //alert correct choice
    //if not dont add points
    //alert incorrect
};

function displayResults() {
    //display result div
    //show total score and how many questions incorrect
    //unhide start button
}

