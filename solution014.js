// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true

//Parameters
//two arrays populated with integers

//Result
//true or false

//Examples
//see above

//Pseudo Code
//aCounter and dCounter variables
//for loop a[i] vs b[i]
//if a[i]>b[i] then aCounter += 1

// function hasSurvived(a, d){
//     //set counter variables
//     let aCounter = 0
//     let dCounter = 0
//     //for loop comparison
//     let i = 0
//     while (a[i] || d[i]){
//         //if else condition
//         if(!d[i] || a[i] > d[i]){
//             aCounter ++
//         }else if(!a[i] || a[i] < d[i]){
//             dCounter ++
//         }
//     }
//     console.log(aCounter,dCounter)
//     //final return
    
//     if(aCounter > dCounter){
//         console.log(false)
//     }else if(aCounter < dCounter){
//         console.log(true)
//     }else if(aCounter === dCounter){
//         a.reduce((acc, cur)=> acc + cur, 0) > d.reduce((acc, cur)=> acc + cur, 0) ? console.log(false) : console.log(true)
//     }
// }

function hasSurvived(a, d){
    const aStart = a.reduce((val, acc) => acc + val, 0); //aStart and dStart is calculating the total damage in case of a draw later
    const dStart = d.reduce((val, acc) => acc + val, 0);
  
    // these two variables are finding how many of each array are left standing; each element has subtracted from it the opposite element at the same index, is filtered, then the total length is found
    let dAfterFight = d.filter((el, idx) => 0 < el - a[idx]).length; 
    let aAfterFight = a.filter((el, idx) => 0 < el - d[idx]).length;
    
    //final return statements
    if (dAfterFight > aAfterFight)    console.log(true);
    if (dAfterFight === aAfterFight)  console.log(dStart >= aStart);
    console.log(false);
}

//okay wait this doesn't work. in the case of hasSurvived([20],[1,2,3]) it should return true because the defenders have two survivors but thats not what happens. it's jumping to the line 76 return. when one element is undefined it doesn't work

hasSurvived([1,2,3],[])

let example = [[1,2],[2,3],[1,3]]
console.log(example[0].reduce((acc,cur)=>acc + cur, 0))

