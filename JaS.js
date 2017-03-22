Типы данных:

number // пишутся без кавычек, e.g. "dogs go woof!"
string // в кавычках, e.g. 4, 10
boolean // возвращает значения true или false, e.g. false, 5 > 4 

Операторы сравнения:

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

Условия:

if( "myName".length >= 7 ) 
{
    console.log("You have a long name!"); 
}                                         // if (тут пишется условие) {тут пишется действие};
else 
{
    console.log("You have a short name!");  
}                                        // else {тут пишется действие};