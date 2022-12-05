// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

/* PSEUDO CODE
create template for output
iterate through and replace x with number at current index
return
*/



function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx'
    for(let i = 0; i < numbers.length; i++){
        format = format.replace('x', numbers[i])
    }
    return format
}

let example = [8,1,0,8,1,4,3,6,9,7]
createPhoneNumber(example)



function sum(a, b) {
    return a + b;
}

console.log(sum(2, 5));