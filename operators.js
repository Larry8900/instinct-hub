// OPERATOR TASK 
// using arithmetic with variables and user inputs 


let num1 = 10;
let num2 = 5;

// for arithmetic operator +
console.log(num1 + num2);
// for arithmetic operator -
console.log(num1 - num2);
// for arithmetic operator *
console.log(num1 * num2)
//for arihmetic operator /
console.log(num1 / num2);
// for arithmetic operator %
console.log(num1 % num2);

// for increment by 1, we use (++)
num1++;
num2++;

// for decrement by 1, we use (--)
num1--;
num2--;

let input1 = prompt('type in your first input');
let input2 = prompt('type in your second input');

// the next step says to convert the input to numbers

input1 = parseFloat(input1);
input2 = parseFloat(input2);

//mathematical operations based on the user input 
console.log(input1 + input2);
console.log(input1 - input2);
console.log(input1 * input2);
console.log(input1 / input2);

