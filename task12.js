// 1) write a function  that returns an array of prime numbers from the input array?
function prime(arr){
    return arr.filter((num)=>{
        if(num<2) return false
        for( let i=2; i <= Math.sqrt(num); i++){
            if(num%i===0) return false
        }
        return true
    })
}
console.log(prime([3,2,5,6,7,8,13,11,4,3,5]))

// 2) Write a function that filters out even numbers and doubles the remaining ones using filter() and map().

function arrfilter(arr){
    return arr.filter(num => num % 2 !==0).map(num => num*2)
}
console.log(arrfilter([1,2,3,4,5]))

// 3) Write a function  that merges two objects into a new object using the spread operator?

function mergeObject(obj1,obj2){
    return {...obj1,...obj2}
}
const mergedObject = mergeObject(
    {
    name: "amritha",
    age:23
    },
    {
        place:"guruvayoor"
    }
)
console.log(mergedObject)

// 4) Write a function that calculates the sum of even numbers using filter() and reduce() ?

function evenSum(arr){
    return arr.filter(num => num % 2 === 0).reduce((acc,curr)=>acc+curr,0)
}
console.log(evenSum([2,3,4,6,5,7,8,9,0]))

// 5) Write a function that finds the maximum number in an array  Use a for loop to compare each element?

function Maxnum(arr){
    let Max = arr[0]
    for (let i=0 ; i< arr.length; i++){
        if(arr[i]>Max){
            Max = arr[i]
        }       
    }
     return Max
}
console.log(Maxnum([1,2,3,4,5]))

//6) Write a function that returns an array of common elements between two arrays ?

function commonElements(arr1,arr2){
    return arr1.filter(item => arr2.includes(item))
}
console.log(commonElements([1,2,3,4],[3,4,5,6]))

//7) List and explain various array methods available in JavaScript. For each method, provide a brief description and an example?

// 1. push()
// Adds one or more elements to the end of the array
let arr1 = [1, 2, 3];
arr1.push(4); // arr1 becomes [1, 2, 3, 4]

// 2. pop()
// Removes the last element from the array
let arr2 = [10, 20, 30];
arr2.pop(); // arr2 becomes [10, 20]

// 3. shift()
// Removes the first element of the array
let arr3 = [5, 6, 7];
arr3.shift(); // arr3 becomes [6, 7]

// 4. unshift()
// Adds one or more elements to the beginning of the array
let arr4 = [2, 3];
arr4.unshift(1); // arr4 becomes [1, 2, 3]

// 5. map()
// Creates a new array by applying a function to each element
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2); // [2, 4, 6]

// 6. filter()
// Creates a new array with elements that pass a test (true condition)
let mixed = [1, 2, 3, 4, 5];
let evens = mixed.filter(n => n % 2 === 0); // [2, 4]

// 7. reduce()
// Reduces array to a single value by applying a function repeatedly
let sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0); // 10

// 8. forEach()
// Executes a function once for each array element (no return value)
let items = ['a', 'b', 'c'];
items.forEach(item => console.log(item)); // prints 'a', 'b', 'c'

// 9. includes()
// Checks if the array contains a specific value
let fruits = ['apple', 'banana', 'cherry'];
fruits.includes('banana'); // true

// 10. find()
// Returns the first element that satisfies a condition
let numbers = [10, 25, 30];
let found = numbers.find(n => n > 20); // 25

// 11. findIndex()
// Returns the index of the first element that satisfies a condition
let idx = numbers.findIndex(n => n > 20); // 1

// 12. indexOf()
// Returns the index of the first occurrence of a value
let colors = ['red', 'green', 'blue'];
colors.indexOf('green'); // 1

// 13. concat()
// Merges two or more arrays and returns a new array
let arrA = [1, 2];
let arrB = [3, 4];
let combined = arrA.concat(arrB); // [1, 2, 3, 4]

// 14. slice()
// Returns a shallow copy of a portion of an array (non-destructive)
let arr5 = [10, 20, 30, 40];
let sliced = arr5.slice(1, 3); // [20, 30]

// 15. splice()
// Adds/removes elements at a specific index (modifies the array)
let arr6 = [1, 2, 3, 4];
arr6.splice(1, 2); // removes 2 and 3 → arr6 becomes [1, 4]

// 16. sort()
// Sorts the elements of an array in place
let sortNums = [5, 2, 9, 1];
sortNums.sort((a, b) => a - b); // [1, 2, 5, 9]

// 17. reverse()
// Reverses the order of the elements in an array
let rev = [1, 2, 3];
rev.reverse(); // [3, 2, 1]

// 18. join()
// Joins all elements of an array into a string
let words = ['Hello', 'world'];
let sentence = words.join(' '); // 'Hello world'

// 19. every()
// Checks if all elements pass a test (returns true/false)
let allPositive = [1, 2, 3].every(n => n > 0); // true

// 20. some()
// Checks if at least one element passes a test
let hasNegative = [1, -2, 3].some(n => n < 0); // true

// =====================
// End of Array Method List
// =====================
