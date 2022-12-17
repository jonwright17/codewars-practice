// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) outputs 'string-string-string-string-string'

//PSEUDO CODE
// take str and split at ' '
// slice that new array at loc, loc + 1 and turn it back into a string with join
// output with for loop concatenating the word


function modifyMultiply (str,loc,num) {
    const words = str.split(' ')
    // console.log(words)
    let singleWord = words.slice(loc, loc + 1).join()
    // console.log(singleWord)
    let output = singleWord
    for(let i = 1; i < num; i++){
        output = output + `-${singleWord}`
    }
    return output
} 

modifyMultiply('This is a string', 3, 5)

//REFACTOR!!

function modifyMultiply2 (str, loc, num){
    let singleWord = str.split(' ').slice(loc, loc + 1).join()
    let output = singleWord
    for(let i = 1; i < num; i++){
        output = output + `-${singleWord}`
    }
    return output
}

modifyMultiply2('This is a string', 3, 5)

//CODEWARS VERSION

function modifyMultiply3(str,i,n) {
    return Array(n).fill(str.split(' ')[i]).join('-');
} 

/*
Array(n) is creating an array of n length. It's an array constructor.
.fill() is changing all elements to a static value
That value is the element found at index i of the split string
It is then joined with the separator '-' in order to return a string and not an array
*/

//SUPER CODEWARS VERSION

const modifyMultiply3 = (s,loc,num) => new Array(num).fill(s.split(' ')[loc]).join('-')