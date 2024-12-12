// Part 1: JavaScript Basics
// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["coding", "reading", "gaming"];
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};

// Logging variables and their types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    let result;
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation!");
            return;
    }

    alert(`Result: ${result}`);
}

// Greeting Function
function greetUser(name) {
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.textContent = `Hello, ${name}! Welcome to our webpage.`;
}

// Call greet function with a name
greetUser("John");

// Part 2: Control Structures
// Voting Eligibility
function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));
    const eligibilityDiv = document.getElementById('vote-eligibility');

    if (userAge >= 18) {
        eligibilityDiv.textContent = "Congratulations! You are eligible to vote.";
    } else {
        eligibilityDiv.textContent = "Sorry, you are not eligible to vote yet.";
    }
}

// Part 3: DOM Manipulation
// Modify Page Content
document.querySelector('h1').textContent = "JavaScript in Action!";

// Add dynamic content
const dynamicContent = document.getElementById('dynamic-content');
const newParagraph = document.createElement('p');
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);

// Display Numbers 1-10
const numberList = document.getElementById('number-list');
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Uncomment the following lines to test interactive functions
// calculator();
// checkVotingEligibility();
