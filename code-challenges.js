// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
let padresWillWin2024WorldSeriesRuns = padres1984WorldSeriesRuns + padres1998WorldSeriesRuns
// console.log(padresWillWin2024WorldSeriesRuns.length)
// output: 16
// Pseudo code:
// Step 1: create a variable to combine the arrays padres1984WorldSeriesRuns & padres1998WorldSeriesRuns using addition
// step 2 log the results using the .length modifier 
// the output was far higher than i expected at 16. not sure what i did wrong here.

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"
// console.log(currentCohort.reverse)
// output: undefined
// Pseudo code:
// step 1: console log the variable currentCohort with the .reverse modifier.console
// the output was undefined, i guess i forgot some steps or dont understand how this modifier works?

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27
for(let i = [0]; i < stockExchange.length; i++){
    if(stockExchange[i] % 2 !== 0)
    console.log(stockExchange[i])
}
// Pseudo code:
// step 1: create a for loop to make a list of the numbers in the array
// step 2: add a conditional statement to the for loop that states that if the stockExchange index in the iteration is modulo by 2 the remainder should not be zero(otherwise the number is even)
// the iteration should go down the line from 13 - 10 to see if the number divvided by two results in the remainder should not be zero, if it is, the number is even, if not, the number is odd.
// console.log the stockExchange[i] so that the only numbers that populate are numbers that do not have a remainder of zero(odd numbers)
// the output was 13 5 -5 27
