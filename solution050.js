// Count by X

// DESCRIPTION:
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

function countBy1(x, n) {
    let z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

const countBy2 = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);