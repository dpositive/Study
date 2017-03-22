var true_message = "Let's play!";
var false_message = "By";
var too_young = "You are allowed to play but I take no responsibility";
var old_enough = "Ok"
var firstst_scene = "You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'"
var second_scene = "Suddenly, Bieber stops and says, 'Who wants to race me?'"
var third_scene = "You and Bieber start racing. It's neck and neck! You win by a shoelace!"
var third_no_scene = "Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'"
var firstst_quest = "Do you want to race Bieber on stage?"
var thank_mess = "Thank you! We should race at the next concert!"
var sorry_mess = "I'll keep practicing coding and racing."

var variant = confirm('Ready to play game?');
var age = prompt("What's your age");
var userAnswer = prompt(firstst_quest);
var feedback = prompt("rate my game out of 10");

if(age < 13) 
{
   console.log(too_young);
}
else 
{
  console.log(old_enough);
}

if (variant){
   console.log(true_message); 
}
else{
  console.log(false_message);
}
console.log(firstst_scene);
console.log(second_scene);


if(userAnswer === "yes") 
{
   console.log(third_scene);
}
else 
{
  console.log(third_no_scene);
}

if(feedback > 8) 
{
   console.log(thank_mess);
}
else 
{
  console.log(sorry_mess);
}