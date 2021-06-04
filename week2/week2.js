//Chapter 2 end of chapter practice

function question (){
    const question = "What is superman's real name?";
    const sum = prompt(question);
    alert (`You answered ${sum}`);
}

//Chapter 3 end of chapter practice
function threeQuestionQuiz (){
    const quiz =[["What is Superman's real name?", "Clark Kent"],
             ["What is Wonder Woman's real name?", "Diana Prince"],
             ["What is Batman's real name?","Bruce Wayne"]];

let score = 0;

for (const [question, sum] of quiz){
    const response = prompt(question);
    if (response === sum) {
        alert("Correct!");
        score += 1;
    }else {
        alert(`Wrong! The correct sum was ${sum}.`);
    }
   
}
//score !== 1 ? 's' : ''-----Ternary way to display points with and without 's'
alert(`The game is over! You scored ${score}/3 points!`)
}

function sumMachine(){
    let n = parseInt(document.getElementById("input").value);
    let sumTotal = sum(n);
    document.getElementById("output").innerHTML = "The sum total of " + n + " is " + sumTotal;
}

function sum(n){
    if (n <= 0) { //Base case
        return 0;
      } else { //to execute until base case is met
        return n + sum(n - 1);
      }
}

function addMachine(){
    let x = parseInt(document.getElementById("input-1").value);
    let y = parseInt(document.getElementById("input-2").value);
    let addTotal = add(x,y);
    document.getElementById("output-2").innerHTML = "The sum of " + x + " and " + y + " is " + addTotal;
}

function add(x, y){
    return x + y;
}

function subtractMachine(){
    let x = parseInt(document.getElementById("input-1").value);
    let y = parseInt(document.getElementById("input-2").value);
    let subTotal = subtract(x,y);
    document.getElementById("output-2").innerHTML = "The difference of " + x + " and " + y + " is " + subTotal;
}

function subtract(x, y){
    return x - y;
}

function multiplyMachine(){
    let x = parseInt(document.getElementById("input-1").value);
    let y = parseInt(document.getElementById("input-2").value);
    let proTotal = multiply(x,y);
    document.getElementById("output-2").innerHTML = "The product of " + x + " and " + y + " is " + proTotal;
}

function multiply(x,y){
    return x * y;
}

function divideMachine(){
    let x = parseInt(document.getElementById("input-1").value);
    let y = parseInt(document.getElementById("input-2").value);
    let quoTotal = divide(x,y);
    document.getElementById("output-2").innerHTML = "The quotient of " + x + " and " + y + " is " + quoTotal;
}

function divide(x,y){
    return x / y;
}

/* subtract = (n1, n2) => n1 - n2
const mul = function () { <copy contents of add>}
const sub = () => {<copy contents of add>} */
