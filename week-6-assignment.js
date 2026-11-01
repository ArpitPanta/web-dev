const number = Number(prompt("Enter a number:"));

if (Number.isNaN(number)) {
  console.error("Invalid number");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
  }
}
