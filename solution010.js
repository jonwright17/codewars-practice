// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.


// Parameters
// nested arrays of integers

// Result
// return of all the integers

// Example
// see above

// Psuedo Code
// 1 try the flat method (flat returns a new array every time)(join returns a string every time) So just do step 2
// 2 join with '\n'

function toCsvText(array) {
   return array.join('\n')
}

let example = [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
toCsvText(example)

// CODEWARS VERSION

const toCsvText1 = array => array.join('\n')