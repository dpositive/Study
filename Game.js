var askReady = "Ready to play game?";
var askAge = "What's your age";

var askRate = "rate my game out of 10";
var answYes = "yes";

var okAge = 13;
var constValue = 8;

var play_message = "Let's play!";
var bye_message = "By";
var too_young = "You are allowed to play but I take no responsibility";
var old_enough = "Ok";
var firstst_scene = "You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'";
var second_scene = "Suddenly, Bieber stops and says, 'Who wants to race me?'";
var third_scene = "You and Bieber start racing. It's neck and neck! You win by a shoelace!";
var third_no_scene = "Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'";
var firstst_quest = "Do you want to race Bieber on stage?";
var thank_mess = "Thank you! We should race at the next concert!";
var sorry_mess = "I'll keep practicing coding and racing.";

var Age = function(age)
{
	if(age < okAge)
	{
        alert(too_young);
	}
	else 
	{
        alert(old_enough);
	}
};

var BieberQuest = function(answer){
if(answer === answYes) 
	{
   		alert(third_scene);
	}
	else 
	{
  		alert(third_no_scene);
	}

};

var RateFeedback = function(someValue){

	if(someValue > constValue) 
	{
   		alert(thank_mess);
	}
	else 
	{
  		alert(sorry_mess);
	}
};

var variant = confirm(askReady); // приветствие и вопрос ready/no
if (variant)
{
	alert(play_message); // я согласен
	var age = prompt(askAge); // введите возраст
	
	Age(age);

    alert(firstst_scene);
	alert(second_scene);

	var userAnswer = prompt(firstst_quest); // вопрос Бибера
	
	BieberQuest(userAnswer);

	var feedback = prompt(askRate); // просим оценить
    
    RateFeedback(feedback);
}
else
{
  alert(bye_message);
}