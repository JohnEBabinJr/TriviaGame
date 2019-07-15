Questions = [
    {
        question: "Who was prophesied to *Bring Balance to the Force* ?",
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

var Correct = 0;

var Incorrect = 0;

var state = {
    currentQ: 0,
    userGuess: null,
    timeRemaining: 10,
};

startGame();
$("#result").hide();
$("#TimeLeftBar").hide();

function startGame() {
    $("#start").on("click", function () {
        Correct = 0;
        Incorrect = 0;
        $("#result").empty();
        $("#instructions").hide();
        $("#start").hide();
        $("#TimeLeftBar").show();
        $('.container').css("height", "10px");
        $("#result").hide();
        gameplay();
    });
};

function gameplay() {
    var q = Questions[state.currentQ];
    $("#question").text(q.question);
    var timeleft = 10;
    var TimeLeft = setInterval(function () {
        document.getElementById("TimeLeftBar").value = 11 - timeleft;
        timeleft -= 1;
        if (timeleft <= 0)
            clearInterval(TimeLeft);

    }, 1000);
    TimeOut = setTimeout(timeout, 10000);
    for (var i = 0; i < q.answers.length; i++) {
        var choice = $("<button>");
        choice.addClass("answerchoice");
        choice.data("position", i);
        choice.appendTo(".answers");
        $("<br>").appendTo(".answers");
        choice.text(q.answers[i]);
    }
};

function timeout() {
    clearTimeout(TimeOut);
    Incorrect++;
    if (state.currentQ == 4) {
        alert("Time is Up!");
        displayResults();
    }
    else {
        alert("Time is Up!");
        state.currentQ++;
        $(".answers").empty();
        gameplay();
    }
};

$(document).on("click", '.answerchoice', function () {
    clearTimeout(TimeOut);
    if ($(this).data("position") == Questions[state.currentQ].CorrectAnswer) {
        alert("Correct!");
        Correct++;
    }
    else {
        alert("Incorrect");
        Incorrect++;
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
    $("#result").text("Final Correct: " + Correct + " Final Incorrect: " + Incorrect);
    state.currentQ = 0;
    $("#start").show();
    $("#result").show();
    $("#question").empty();
    $(".answers").empty();
    $("#TimeLeftBar").hide();
};
