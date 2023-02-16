// Abbreviate a two word name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let arr = name.split(' ')
    let firstInitial = arr[0].slice(0,1).toUpperCase()
    let lastInitial = arr[1].slice(0,1).toUpperCase()
    return `${firstInitial}.${lastInitial}`
}

function abbrevName2(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}