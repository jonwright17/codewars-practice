// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

//Parameters
// two integers, positive or negative. not ordered 

//Result
// The sum of those two integers and every number in between

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

//Pseudo Code
// first sort the two numbers 
// for loop starting at lowest number add that number to the count


function getSum (a,b){
    let arr = [a,b]
    arr.sort((a,b) => a - b)
    let count = 0
    for (let i = arr[0]; i <= arr[1]; i++){
        count += i
    }
    return count
}