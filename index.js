// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log("1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. ");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let f = ages.slice(0, 1); // Created a variable for the first value in the array
let l = ages.pop(); // Created a variable for the last value in the array

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
console.log("1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.");
console.log(l - f); // Subtracting the first value from the last value

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log("1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");
ages.push(7); // Added the value 7 as the last value using .push
f = ages.slice(0, 1);
l = ages.pop();
console.log(l - f); // Subtracting the first value from the last value

// 1c. Use a loop to iterate through the array and calculate the average age.
console.log("1c. Use a loop to iterate through the array and calculate the average age.");
let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
}
let averageAge = sum / ages.length;
console.log("Average Age: ", averageAge);

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
console.log("2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'. ")
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.
console.log("Use a loop to iterate through the array and calculate the average number of letters per name.");
// Calculating the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average number of letters per name: ", averageLetters);
 
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log("Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
// Concatenate all of the names together while separating them by spaces
let concatNames = "";
for (let i = 0; i < names.length; i++) {
    concatNames += names[i] + " ";
}
console.log("Concatenated names:", concatNames);

// 3. How do you access the last element of any array?
console.log("How do you access the last element of any array?");
// There are multiple ways to access an array, but I will only use one as an example;
const testArray = [1,2,3,4,5];
//You can use the .length command to access the last element in an array
const lastElement = testArray[testArray.length -1];

// 4. How do you access the first element of any array?
console.log("How do you access the first element of any array?");
// There are multiple ways to access the first element of an array, but I will only use one as an example;
const exampleArray = [1,2,3,4,5];
// You can use the length property to access the first element of an array
let firstElement = exampleArray[0];

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log("Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
let nameLengths = [];
for (let i = 0; i < names.length; i++) { // Creating a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    nameLengths.push(names[i].length);
}
console.log("Name Lengths:" , nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log("Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.")
let sumNameLengths = 0
for (let i = 0; i < nameLengths.length; i++) {
    sumNameLengths += nameLengths[i];
}
console.log("Sum of name lengths:", sumNameLengths);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
console.log("Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");
function concatWord(word, n) {
    let concatString = "";
    for (let i = 0; i < n; i++) {
        concatString += word;
    } return concatString;
}
console.log(concatWord('Hello', 3));

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
console.log("Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Michael B.", "Jordan"));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
console.log("Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. ")
function isGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } 
    return sum > 100;
}
console.log(isGreaterThan100([25, 35, 45]));

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("Write a function that takes an array of numbers and returns the average of all the elements in the array.");
function averageNumbers(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } return sum / numbers.length;
}
console.log(averageNumbers([15,20,25]));

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log("Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
function compAverage(arr1, arr2) {
    return averageNumbers(arr1) > averageNumbers(arr2);
}
console.log(compAverage([25,30,35], [10,15,20]));

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50. 
console.log("Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.")
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 11));

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log("Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
function primeNum(number) {
// Prime numbers are greater than 1 and only divisible by itself and 1
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Example
console.log(primeNum(5)); // Outputs to true
console.log(primeNum(15)); // Outputs to false