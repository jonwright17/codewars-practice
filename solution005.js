// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


//find the min
// loop through array if else
// if 

// ATTEMPT 1 / I SUCK AT THIS

function removeSmallest(numbers) {
    let numbersCopy = [...numbers]
    // console.log(numbersCopy)
    let min = Math.min(...numbersCopy)
    // console.log(min)
    // console.log(numbersCopy.indexOf(min))
    numbersCopy.splice(numbersCopy.indexOf(min), 1) // can't return this because the return value of splice is an array containing the deleted elements
    console.log(numbersCopy)
    // console.log(numbers.filter(e => e != min)) doesn't work because filter mutates the original array
}

let sample = [2,3,4,5,1,1]

removeSmallest(sample)

// REFACTORED CODE

function removeSmallestFinal(numbers) {
    let numbersCopy = [...numbers]
    numbersCopy.splice(numbersCopy.indexOf(Math.min(...numbersCopy)), 1)
    return numbersCopy
}

// CODEWARS ANSWERS

function removeSmallest1(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// ALSO

function removeSmallest2(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}