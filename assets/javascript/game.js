//Global Variables
//====================================================================
var wins = 0;
var loss = 0;
var randomNumber = [];
var crystalPoints = [];
var playerScore = 0;

var audio = new Audio('heyuguys.wav');
//Functions
//====================================================================
$(document).ready(function(){

    wins = 0;
    loss = 0;
    var audioIsPlaying = false

function startGame(){
    
    //reset
    
    randomNumber = [];
    crystalPoints = [];
    playerScore = 0;

    //pick random number
    randomNumber = Math.floor(Math.random()* 119 + 19);
    document.getElementById("random-number").innerHTML = randomNumber
    console.log(randomNumber);

    //set crystal points

    $(".crystal-area img").each(function(index, ele) {
        var num =  Math.floor(Math.random()* 12 + 1)
        $(ele).attr('data-value', num);
        $(ele).parent().attr('data-value', num);
    })
    
}

//clicking on crystals

$(".crystal-area").click(function(event){
    if (!audioIsPlaying) {
        audio.play();
        audioIsPlaying = true
    }
    
    var eventTarget = $(event.target);
    var crystalValue = eventTarget.attr('data-value');
    playerScore = playerScore + parseInt(crystalValue);
    updateScoreHTML()
    checkWinLose()
    console.log(playerScore);
    // return crystalPoints;
});

function updateScoreHTML() {
    // update the score element
    document.getElementById("player-score").innerHTML = playerScore
}

function checkWinLose() {
    // see if playerScore is equal to or more than randomNumber
    if(playerScore === randomNumber){
        wins ++;
        $("#wins").html(wins);
        startGame();
    } else if(playerScore > randomNumber){
        loss = loss + 1;
        $("#losses").html(loss);
        startGame();
    }


}

//Calls
//=====================================================================
startGame();


});

