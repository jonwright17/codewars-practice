// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.



/*PSEUDO CODE
iterate with for loop
splice(arr[i], 1)


Things to note
    The split and the splice method need the '' marks if you intend on them applying to each individual character
    Otherwise it doesn't actually split or join at any particular point
        Join still works but it adds commas
*/


function lastSurvivor(letters, coords) {
    letters = letters.split('')
    for(let i = 0; i < coords.length; i++){
      letters.splice(coords[i], 1)
    }
    return letters.join('')
  }