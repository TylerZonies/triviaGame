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
var hintInterval;
var currentQuestion;
function askQuestion(){
    currentQuestion = questionArr[questionIndex];
    $("#questionText").text(currentQuestion.question);
    var answerSlot = Math.floor(Math.random() * 3);
    $("#question" + answerSlot).text(currentQuestion.answer);
    for(var i = 0; i < 3; i++){
        if(i == answerSlot){
            $("#question" + (i+1)).text(currentQuestion.wrong[i]);
        }else{
            $("#question" + i).text(currentQuestion.wrong[i]);
        }
    }

}
askQuestion();
