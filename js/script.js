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
*/
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