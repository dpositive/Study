var true_message = "Let's play!";
var false_message = "By";
var too_young = "You are allowed to play but I take no responsibility";
var old_enough = "Ok"
var variant = confirm('Ready to play game?');
var age = prompt("What's your age");

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