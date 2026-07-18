const fruitsName = ["Banana", "Mango", "Papaya"];
let _length = fruitsName.length;
console.log(_length);

let _add = fruitsName.push("Jackfruit", "Berry"); //reutrn length of the array
console.log("adding", _add);
console.log(fruitsName);


let _popResult = fruitsName.pop();
console.log("pop item:", _popResult); //return value of last removed item
console.log(fruitsName);


let _shiftResult = fruitsName.shift();
console.log("shift:", _shiftResult); //return value of first removed item
console.log(fruitsName);


let _unshiftResult = fruitsName.unshift("Cutie");
console.log("unshift:", _unshiftResult); //return array length;
console.log(fruitsName)

let _hasItem = fruitsName.includes("Mango") //return true or false;
console.log(_hasItem);


const moreFruits = ["Cherry", "Watermelon", "Melon"]
const totalFruits = fruitsName.concat(moreFruits); //concating or combine two array or list;
console.log("More fruits added:", totalFruits);


const _joinedFruits = moreFruits.join(" "); //join element 
console.log(_joinedFruits);


let _position = moreFruits.indexOf("Melon"); //return index of given element, -1 if not
console.log("The position of Melon:", _position);


let _isArray = Array.isArray(fruitsName); //return true or false, if a given name is array or not
console.log("Is array:", _isArray);


console.log(fruitsName)
let _sliceArray = fruitsName.slice(1, 3); //return a desire portion of array;
console.log("Sliced array:", _sliceArray);


let _reverseArr = totalFruits.reverse(); //reverse the elements;
console.log("reverse array:", _reverseArr);

console.log("original arr:", totalFruits);
const _spliceArr = totalFruits.splice(2, 2, "hello", "world"); //splice method change the original array and can add items
console.log("After splicing:", _spliceArr);
console.log("Modified arr:", totalFruits);

for(let fruit in totalFruits) { //to find index of the elements
    console.log(fruit);
}

for(let fruit of totalFruits) { // to find value of the elements
    console.log(fruit);
}

