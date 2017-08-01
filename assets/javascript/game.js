var wins=0;
var losses=0;
var randomNum
var gemNumber
var userScore= 0;
var gem1
var gem2
var gem3
var gem4
var gemNum1=Math.floor(Math.random()*12);
var gemNum2=Math.floor(Math.random()*12);
var gemNum3=Math.floor(Math.random()*12);
var gemNum4=Math.floor(Math.random()*12);


var randomGen = function (){
	randomNum = Math.floor(Math.random()*120)+19;
	$("#number").html(randomNum);
	console.log(randomNum);
};
$("#number").text(randomGen());

$("#gemButton1").on("click", function gemLoop1(){
	userScore= gemNum1+userScore;
	$("#userNum").html(userScore);
	gameScore();
	console.log(gemNum1);
});
	$("#gemButton2").on("click", function gemLoop2(){
	userScore= gemNum2+userScore;
	$("#userNum").html(userScore);
	gameScore();
	console.log(gemNum2);
});
$("#gemButton3").on("click", function gemLoop3(){
	userScore= gemNum3+userScore;
	$("#userNum").html(userScore);
	gameScore();
	console.log(gemNum3);
});
	$("#gemButton4").on("click", function gemLoop4(){
	userScore= gemNum4+userScore;
	$("#userNum").html(userScore);
	gameScore();
	console.log(gemNum4);
});
function gameScore(){
	if (randomNum==userScore){
		wins++;
		$("#wins").html("Wins: " + wins);
		alert("You Win");
		resetScore();
		randomGen();
	} else if (randomNum<=userScore){
		losses++;
		alert("You Lose");
		$("#losses").html("Losses: " + losses);
		resetScore();
		randomGen();
	};
};

function resetScore(){
	userScore=0;
	$("#userNum").html(userScore);
};
