import {
  isPalindrome,
  removeRepeatedCharacters,
  convertStringToUpperCase,
  convertStringToSentenceCase,
} from "./utils/string-utils";

import {
  calculatePower,
  calculateSimpleInterest,
  printOddNumbers,
  printEvenNumbers,
} from "./utils/number-utils";

import { Cat } from "./models/cat";
import { Dog } from "./models/dog";

// // Concatenating two strings
// const string1 = "Happy";
// const string2 = " Testing!";
// const result = string1 + string2;
// console.log(`Concatented String is ${result}`);

// // Calculating the power of a number
// const base = 2;
// const exponent = 8;
// const power = calculatePower(base, exponent);
// console.log(`The power of the number is: ${power}`);

// // Calculating simple interest
// const principal = 800;
// const rate = 5;
// const time = 2;
// const interest = calculateSimpleInterest(principal, rate, time);
// console.log(`The interest is: ${interest}%`);

// // Checking if a string is a palindrome
// const palindromeString = "stats";
// console.log(`"${palindromeString}" is a palindrome`);

// Removing repeated characters from a string
const inputString1 = "Hello";
const inputString2 = "Concatenate";

console.log(removeRepeatedCharacters(inputString1));
console.log(removeRepeatedCharacters(inputString2));

// // Using inheritance to create Animal, Cat, and Dog classes
// const cat = new Cat();
// const dog = new Dog();
// cat.sound();
// dog.sound();

// // Arrays
// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [34, 2, 9, 91, 19, 401, 0];

// // Prints Odd Numbers
// printOddNumbers(array1); // Prints Odd Numbers from array1
// printOddNumbers(array2); // Prints: Odd Numbers from array2

// // Prints Even Numbers
// printEvenNumbers(array1); // Prints Even Numbers from array1
// printEvenNumbers(array2); // Prints Even Numbers from array1

// // Converts string to UpperCase
// const upperCaseStr = convertStringToUpperCase("changing the world!");
// console.log("Converted to Upper Case:", upperCaseStr);

// // Converts string to sentence case
// const sentenceCaseStr = convertStringToSentenceCase("cHaNgInG tHe WoRlD!");
// console.log("Converted to Sentence Case:", sentenceCaseStr);
