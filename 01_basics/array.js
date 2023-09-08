// syntax--
// datatype variableName = [];
const arr=['js', 'java', 'python','ruby','c++','typescript'];

// console.log(arr);

// iterating in using loops 

// 1. using for Loop

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
    
// }

// 2. using while loop

// let ind=0;
// while (ind<arr.length) {
//     console.log(arr[ind]);
//     ind++;
// }



//3. forOf loop can be used in anythig like array, string except object


// for (const val of arr) {
//     console.log(val);
// }


// forOf loop in string

// let name='Abhineet kumar'
// for (const character of name) {
//     console.log(character);
// }




// ----------------------------------------------------------------------------------------------------------

// 4. forEach Loop [the most usable loop in array]

// use forEach loop in an array and pass a callback function in a parameter in that callback function
// it accepts value, index, arralist as a parameter so now we can use it according to our use

// (i) getting values from an array
arr.forEach((values) => {
    console.log(values);
});

// (ii) getting values and index from an array

// arr.forEach((value,index) => {
//     console.log(`value is:- ${value} and index is:- ${index}`);
// });



// making some implement in the arr using forEach Loop
// arr.forEach((values) => {
//     console.log(values+' checking');
// });

// console.log(updatedArr);





// now we wil learn about merging and destructure in array----------------------------------------


// destructuring 
const[val1,val2,val3]=arr

console.log(val1,val2,val3);


// merging
const arr1=[1,2,3,4,45]
const arr2=[90,43,22,111]

const arr3=[...arr1,...arr2];

console.log(arr3);


