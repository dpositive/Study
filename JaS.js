Типы данных:

number // пишутся без кавычек, e.g. "dogs go woof!"
string // в кавычках, e.g. 4, 10
boolean // возвращает значения true или false, e.g. false, 5 > 4 

Операторы:

% // modulo e.g. 17 % 5 evaluates to 2. выводит остачу 17/5=3 и остача 2 
if( 17 % 2 > 0 ) {
    console.log("Your value is odd-numbered"); 
}  
else {
    console.log("Your value is even-numbered");  
}
 

 -сравнения:

> // больше
< // меньше
<= // меньше/равно
>= // больше/равно
=== // равно
!== // не равно

Команды:

"some word".length; //посчитать количество символов внутри кавычек
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!'); //вызов окна подтвержнения действия на сайте
prompt("What is your name?"); // вызов окна в которое можно ввести данные
"I'm coding like a champ".length > 10; // длинна стринга больше 10 - true 
console.log(2*5) // данная команда забирает сожержимое скобок и логирует его в терминал, типа println в Arduino 
"hello". substring(0, 2); // выведет только "he" счет начинается с 0, значт чтобы вывести вука от слова wonderfull нужно написать "wonderful".substring(3,7);
console.log( "Hamburgers". substring(3, 10)); // выведет "burgers"


Условия:

if( "myName".length >= 7 ) 
{
    console.log("You have a long name!"); 
}                                         // if (тут пишется условие) {тут пишется действие};
else 
{
    console.log("You have a short name!");  
}                                        // else {тут пишется действие};

Функции






Переменные:

var varName = data; // например var myName = "Leng"; var myAge = 30; var isOdd = true;

var myAge = 26;
console.log(myAge); // выведет в консоль число 26









/*Conclusion: Part 1
Let's do a quick review!

Data types

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)
Variables
We store data values in variables. We can bring back the values of these variables by typing the variable name.

Manipulating numbers & strings

comparisons (e.g. >, <=)
modulo (e.g. %)
string length (e.g. "Emily".length;)
substrings (e.g. "hi".substring(0, 1);)
console.log( ) 
Prints into the console whatever we put in the parentheses.
If / else statements are conditional statements. Under different conditions, the computer will output different things.

*/

/*
// Not sure where to begin? Check the Hint!
var true_message = "I finished my first course!";
var false_message = "I didn't finish my first course!";
var variant = confirm('Did you finish first course?');

if (variant){
   console.log(true_message); 
}
else{
  console.log(false_message);
}/*













