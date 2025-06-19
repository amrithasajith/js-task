// 1. Create an arrow function square(n) that returns the square of a number.
const square= (n) => n*n;
console.log("square of a number is ",square(9))

// 2. Write a higher-order function that takes a number and a callback, and calls the callback with the number doubled.

function processNumber(num, callback) {
  callback(num * 2);
}
processNumber(4, (result) => {
  console.log("Doubled number:", result);
});

// 3. Demonstrate the use of rest parameters by writing a function that returns the sum of all its arguments.

function sumAll(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum:", sumAll(1, 2, 3, 4, 5));

// 4. Write a program that logs "Hello, Guest" if no name is passed to a function, using default parameters.

function greet(name = "Guest") {
  console.log("Hello,", name);
}
greet();        
greet("Amritha"); 

//5. Use an IIFE to log "I run immediately!" when the script loads.

(function () {
  console.log("I run immediately!");
})();

// 6. Use a switch statement to print the day of the week based on a number (1 to 7).

function printDay(dayNumber) {
  switch(dayNumber) {
    case 1: console.log("Sunday");
     break;
    case 2: console.log("Monday");
     break;
    case 3: console.log("Tuesday"); 
    break;
    case 4: console.log("Wednesday");
     break;
    case 5: console.log("Thursday");
     break;
    case 6: console.log("Friday"); 
    break;
    case 7: console.log("Saturday"); 
    break;
    default: console.log("Invalid day number");
  }
}
printDay(4); 

// 7. Create a function multiplyBy that takes a number and returns another function that multiplies any input by that number.

function multiplyBy(num) {
  return function(x) {
    return x * num;
  };
}
const double = multiplyBy(2);
console.log("Double of 5:", double(5)); // 10

// 8. Write a program that takes an array of numbers and returns a new array with each value doubled.

const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log("Doubled Array:", doubled);

// 9. Use an arrow function to filter all even numbers from an array.

const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

// 10. Write a function that removes all duplicates from an array.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("Unique Array:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


