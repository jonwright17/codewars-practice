// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

export const distinct = (a: number[]): number[] => a.filter((e, i) => i == a.indexOf(e))

export const distinct1 = (a: number[]): number[] => [...new Set(a)];