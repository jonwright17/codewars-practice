// Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

// We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

// its digit sum, s = 1 + 7 + 2 + 9 = 19
// reversing s = 91
// and 19 * 91 = 1729 --> the number that we started with.
// Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.

// VERSION 1

function numberJoy(n) {
    //function that will split all the digits of a number
    function splitToDigit(num){
        return [...num + ''].map(Number)
      }
    
    // split the digits of n
    let splitN = splitToDigit(n)
    // console.log(`splitN = ${splitN}`)
   
    // sum said digits into new variable sum
    let sum = splitN.reduce((acc, cur) => acc + cur, 0)
    // console.log(sum)
   
    // split, reverse, join those digits doesn't work because split is for strings not numbers
    let reverseSumArray = splitToDigit(sum).reverse()
    // console.log(`reverseSumArray = ${reverseSumArray}`)
    
    let reverseSum = Number(reverseSumArray.join(""))
    // console.log(reverseSum)


    // return reverseSum * sum === n
    if (reverseSum * sum === n){
        console.log(true)
    }else{
        console.log(false)
    }
}

numberJoy(1729)

// VERSION 2

function numberJoyRefactored(n) {
    function splitToDigit(num){
        return [...num + ''].map(Number)
      }
    let sum = splitToDigit(n).reduce((acc, cur) => acc + cur, 0)
    let reverseSum = Number((splitToDigit(sum).reverse()).join(""))
    return reverseSum * sum === n
}

// FANCY CODEWARS VERSION

function numberJoy3(n) {
    var s = n.toString().split('').reduce((s,v) => s + +v, 0);
    var sr = +s.toString().split('').reverse().join('');
    return s * sr == n;
  }