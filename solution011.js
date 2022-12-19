// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


// Parameters
// An array of numbers

// Return
// A single number rounded to nearest integer

// Examples
// [1,2,3,4,5] outputs 3
// [1,2,3,4,5,6] outputs 3.5

// Pseudo Code
// reduce / arr.length
// round to nearest integer

function getAverage (marks){
    return Math.round(marks.reduce((acc, cur) => acc + cur, 0) / marks.length)
}

// SUPER CODEWARS VERSION

const getAverage1 = a => Math.round(a.reduce((b,c) => b + c, 0) / a.length)