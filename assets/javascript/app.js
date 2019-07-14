Questions = [
    {
        question: "Who was prophized to *Bring Balance to the Force* ?",
        answers: ["Anakin Skywalker", "Obi-Wan", "Yoda", "Han Solo"],
        CorrectAnswer: 0
    },
    {
        question: "What is the name of the frozen ice planet with a rebel base?",
        answers: ["Naboo", "Hoth", "Tatooine", "Coruscant"],
        CorrectAnswer: 1
    },
    {
        question: "What color is Mace Windu's Lightsaber?",
        answers: ["Red", "Green", "Purple", "Red"],
        CorrectAnswer: 2
    },
    {
        question: "What are the names of Anakin Skywalker's children?",
        answers: ["Luke and Leia", "Sky and Walker", "Chewbacca and Yoda", "R2-D2 and C-3PO"],
        CorrectAnswer: 0
    },
    {
        question: "Who is considerd the greatest smuggler in the galaxy?",
        answers: ["Jar Jar Binks", "Boba Fett", "Chewbacca", "Han Solo"],
        CorrectAnswer: 3
    }
];
var Score = 0;
var state = {
    currentQ: 0,
    userGuess: null,
    timeRemaining: 10,
};
startGame();
function startGame() {
    $("#start").on("click", function () {
        Score = 0;
        $("#result").empty();
        $("#instructions").hide();
        $("#start").hide();
        gameplay();
    });
};
function gameplay() {
    var q = Questions[state.currentQ];
    $(".question").text(q.question);
    for (var i = 0; i < q.answers.length; i++) {
        var choice = $("<button>");
        choice.addClass("answerchoice");
        choice.data("position", i);
        choice.appendTo(".answers");
        choice.text(q.answers[i]);
    }
};
$(document).on("click", '.answerchoice', function () {
    if ($(this).data("position") == Questions[state.currentQ].CorrectAnswer) {
        alert("Correct!");
        Score++;
    }
    else {
        alert("Incorrect");
    }
    if (state.currentQ == 4) {
        displayResults();
    }
    else {
        state.currentQ++;
        $(".answers").empty();
        gameplay();
    }
});
function displayResults() {
    $("#result").text("Final Score: " + Score);
    state.currentQ = 0;
    $("#start").show();
    $(".question").empty();
    $(".answers").empty();
};
