/* let x = 5;

if (typeof x === 'number') {
  console.log('number');
} else if (typeof x === 'string') {
  console.log('string');
}
function displayName(name) {
  console.log('My name is', name);
}

displayName('Mark');


function sum (x,y)
{
    console.log("the sum is", x+y);
}
function sub (x,y)
{
    console.log("the sub is", x-y);
}
function product (x,y)
{
    console.log("the product is", x*y);
}
function division (x,y)
{
    console.log("the division is", x/y);
}

sum(5,10);
sub(10,5);
product(5,10);
division(10,5);

function checkEvenOdd(num) {
    return num % 2;
}

let x = prompt("Enter a number: ");
let result = checkEvenOdd(x);

if (result == 0) {
    console.log("The number is even");
    alert("The number is even");
} else {
    console.log("The number is odd");
    alert("The number is odd");
}

let x = 2;
{
     x = 5;
    // let y = 6;
}
console.log('x', x);
console.log('y', y);


debugger;
let x = 1;
let y = 2;

function sum()
{
    let x = 3;
    y = 7;
    console.log('sum', x + y);
}

console.log('outside the function', x + y);
sum();
console.log('outside the function below sum', x + y);

let age = prompt("Enter your age: ");
let text = (age < 18) ? "You are a minor." : "You are an adult.";
console.log(text);
alert(text);
*/
let day;
let date = new Date().getDay();

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Invalid day";
    break;
}
alert("Today is " + day);
