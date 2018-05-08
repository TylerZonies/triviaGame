var questionArr = [
    {
        question: "Who says the line \" I dream of an i*** christmas, all the snowden coming down from the sky\" in the opening track of Wetz-X-One, Back to You",
        answer:"Jake",
        wrong:["Patrick", "Jason", "Tyler"],
        hint:["His brother is a genius coder and probably the best counterstrike player in the world.", "His last name is Zonies", "Rhymes with bake"],
        correctText:"Thats correct! Jake Zonies dropped one of the most fire lines of all time on his debute track with the band back in the fall of 2015."
    },
    {
        question:"What is the name of the song that has similar lyrics to the song Everlone.",
        answer:"Reoccuring Symptoms",
        wrong:["Shadow", "Honor your Love", "Anotherkin"],
        hint:["The song appears on the album Wetz-x-One.", "It is track 8 on the album", "The song is aptly named for this reason"],
        correctText:"Correct! Wow looks like you really know your stuff."
    },
    {
        question:"Which track is the only Wetz-X-One song to feature Aiden Hiller from the band God Wrought Your Faith on vocals?",
        answer:"Sorry I Left You",
        wrong:["Bulogne", "Watch The Rain Fall", "DXM"],
        hint:["It's not a meat.", "Thats a fire track.", "I appologize about that last hint, wasn't really a hint. But this is.",],
        correctText:"You got it!!, God Wrought Your Faith is a black metal band on the same record label as Wetzone \"Dog Show Records\"."
    },
    {
        question:"What is the best album of all time",
        answer:"Wetz-X-One - Wetzone",
        wrong:["In the Aeroplane Over the Sea - Neutral Milk Hotel", "Nevermind - Nirvana", "Unknown Pleasures - Joy Division"],
        hint:["Cmon.", "It's not that hard.", "If you're reading this its too late - Drake"],
        correctText:"Duh!"
    }
]
var questionIndex = 0;
var questionTimeLimit;
var progressBarInterval;
var hintOneInterval;
var hintTwoInterval;
var hintThreeInterval;
var guessTimeInterval;
var currentQuestion;
var progressBarLength = 0;
var isCorrect = false;
var wins = 0;
var loss = 0;
function askQuestion(){
    progressBarLength = 20;
    $("#questionArea").empty();
    var isPlaced = false;
    currentQuestion = questionArr[questionIndex];
    var questionText = $("<h2>").attr("id", "questionText");
    questionText.text(currentQuestion.question);
    $("#questionArea").append(questionText);
    var answerSlot = Math.floor(Math.random() * 4);
    for(var i = 0; i < 3; i++){
        if(i == answerSlot){
            var answerRow = $("<div>");
            answerRow.addClass("row answerBtn text-center");
            answerRow.attr("data-correct", 1);
            answerRow.html("<h2>" + currentQuestion.answer + "</h2>");
            $("#answerArea").append(answerRow);
            isPlaced = true;
        }
        var wrongRow = $("<div>");
        wrongRow.addClass("row answerBtn text-justify-center");
        wrongRow.attr("data-correct", 0);
        wrongRow.html("<h2 class = \"text-justify-center\">" + currentQuestion.wrong[i] + "</h2>");
        $("#answerArea").append(wrongRow);
    }
    if(!isPlaced){
        var answerRow = $("<div>");
        answerRow.addClass("row answerBtn text-justify-center");
        answerRow.attr("data-correct", 1);
        answerRow.html("<h2 class = \"text-center\">" + currentQuestion.answer + "</h2>");
        $("#answerArea").append(answerRow);
    }

}
function addHints(){
    var hintArea = $("#hintText");
    hintArea.empty();
    var newHint
    var hintList = $("<ul>");
    $("#hintText").append(hintList)
    hintOneInterval = setTimeout(function(){
        var hint = $("<li>").text(currentQuestion.hint[0]);
        hintList.append(hint);
    }, 5000);
    hintTwoInterval = setTimeout(function(){
        var hint = $("<li>").text(currentQuestion.hint[1]);
        hintList.append(hint);
        
    }, 10000);
    hintThreeInterval = setTimeout(function(){
        var hint = $("<li>").text(currentQuestion.hint[2]);
        hintList.append(hint);
    }, 15000);
}
function counter(){
    progressBarLength--;
    $("#timer").text("Time Remaining: " + progressBarLength);
    // progressBarLength += 5;
    // var progressBar = $(".progress-bar");
    // progressBar.attr({"style": progressBarLength + "%", "aria-valuenow": progressBarLength});
}
function startCountdown(){
    $("#timer").text("Time remaining: 20")
    progressBarInterval = setInterval(counter, 1000);
    guessTimeInterval = setTimeout(answerGiven, 20000);
}
function answerCheck(val){
    if(val == 1){
        isCorrect = true;
    }
    answerGiven();
}
function gameOver(){
    $("#questionArea").empty();
    if(loss < wins){
        
    }
}
function answerGiven(){
    $("#timer").empty();
    $("#questionArea").empty()
    $("#answerArea").empty();
    $("#hintText").empty();
    clearInterval(progressBarInterval);
    clearTimeout(guessTimeInterval, hintOneInterval, hintTwoInterval, hintThreeInterval);
    

    if(isCorrect){
        $("#questionArea").text(currentQuestion.correctText);
        wins++;
    }else{
        $("#questionArea").text("Incorrect! the correct answer was: " + currentQuestion.answer);
        loss++;
    }
    if(questionIndex == questionArr.length){
        gameOver();
    }else{
        questionIndex++;
        setTimeout(newRound, 5000);
    }
    
}
function newRound(){
    isCorrect = false;
    askQuestion();
    addHints();
    startCountdown();
}
$("#startButton").on("click", newRound);
$("#answerArea").on("click", ".answerBtn", function(){
    answerCheck($(this).attr("data-correct"));
})
