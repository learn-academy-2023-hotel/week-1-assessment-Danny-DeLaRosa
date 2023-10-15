// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: the string should have logged 10 because "LEARN 2023" has 10 characters including the space. i forgot to count the space in my answer smh

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: the output was "o" because that letter was the 4th one from the left if you start counting from 0 (0=H, 1=e, 2=l, and so o)

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: 3
// b) Verify and explain: the output was Ruby. i thought that this was asking to tell me what the index of languages would be which now that i am thinking about it would nly be one since its one array right? anyways the answer is ruby because its the 1st string in the array if you counted from 0.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I want to say it will uppercase Saturday & Suday ("SATURDAY, SUNDAY") but i feel like it may actually be an error or undefined.  I think you can only uppercase a string if im not mistaken and this is an array.
// b) Verify and explain: should have went with my gut on this one. after doing research i verified that the .toUpperCase modifiers can only be used on strings.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Number???
// b) Verify and explain: the output was number. i was not confident in my answer but the output was number because typeof logs what data type something is and the i knew that the .length modifier outputs a number. wasnt sure if an error was going to happen.
