console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
const num = 12;

let userInput = window.prompt("Guess a number between 1 and 100");

if (userInput > num) {
    console.log("Too high!");
}
else if (userInput < num) {
    console.log("Too low");
}
else if (userInput = num) {
    console.log("Congratulations! You guessed the correct number!");
}

// Exercise 2
let color = window.prompt("What's your favorite color?");
switch (color) {
    case "red":
        console.log("Red is my favorite color too!");
        break;
    case "blue":
        console.log("Blue like the sky or blue like the ocean?");
        break;
    case "green":
        console.log("The color of nature I'd say!");
        break;
    case "yellow":
        console.log("Reminds me of sunshine!");
        break;
    case "orange":
        console.log("Like the fruit!");
        break;
    default:
        console.log("That's a great color!");
}