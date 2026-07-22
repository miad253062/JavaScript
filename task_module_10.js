//task 1
const fruits = ["cherry", "mango", "banana"];
console.log(fruits);


//task 2
const fruitsLength = fruits.length;
console.log(fruitsLength);


//task 3
console.log(fruits[0], fruits[2]);


//task 4
fruits[1] = "jackfruit";
console.log(fruits);


//task 5
fruits.push("berry");
console.log(fruits);


//task 6
fruits.pop();
console.log(fruits);


//task 7
fruits.unshift("kiwi");
console.log(fruits);


//task 8
fruits.shift();
console.log(fruits);


//task 9
const hasItem = fruits.includes("banana");
console.log("Fruits contain banana?", hasItem);


//task 10
const itemIndex = fruits.indexOf("cherry");
console.log("Index of cherry:", itemIndex);


//task 11
for(fruit of fruits) {
    console.log(fruit);
}


//task 12
let count = 0;
while(count < fruits.length){
    console.log(fruits[count]);
    count++;
}


//intermediate task 1
const moreFruits = ["lemon", "watermelon", "melon"];
const totalFruits = fruits.concat(moreFruits);
console.log(totalFruits);

//intermediate task 2
const portionArr = totalFruits.slice(1, 3);
console.log(portionArr);

//intermediate task 3
const joinArr = totalFruits.join(' ');
console.log(joinArr);

//intermediate task 4
const humanName = "miad";
console.log("humanName is an array?", Array.isArray(humanName));
console.log("totalFruits is an array?", Array.isArray(totalFruits))

//intermediate task 5
const reversedArr = totalFruits.reverse();
console.log("Reversed:", reversedArr);

//intermediate task 6
const sortArr = totalFruits.sort();
console.log("sort array:", sortArr);

//intermediate task 7


//intermediate task 8
const numbers = [20, 70, 23, 84, 10, 2, 5, 9];
for(number of numbers) {
    if(number > 10) {
        console.log(number);
    }
}

//intermediate task 9
let sum = 0;
for(number of numbers){
    sum+=number;
}

console.log("Total sum:", sum);

//advanced task 1
const numberWithduplicate = [1, 2, 2, 6, 3, 6, 1];
let uniqueArr = [];

for(number of numberWithduplicate) {
    if(!uniqueArr.includes(number)){
        uniqueArr.push(number)
    }
}

console.log("Unique number");
for(number of uniqueArr) {
    console.log(number)
}

//advanced task 2
const mixedArr = [1, 4, "mango", "cutie", 8];
let _stringArr = [];
let _numberArr = [];

for(item of mixedArr) {
    if(typeof item === "number") {
        _numberArr.push(item);
    }else {
        _stringArr.push(item);
    }
}

console.log("number array:", _numberArr);
console.log("string array:", _stringArr);

//advanced task 3
let maxValue = 0
let minValue = numbers[0];
for(number of numbers) {
    if(maxValue < number){
        maxValue = number;
    }

    if (minValue > number) {
        minValue = number;
    }
}

console.log(maxValue);
console.log(minValue);

//advanced task 4
const _3dArray = [1, [2, 3], [4, [5, 6]]];
const _1dArray = _3dArray.flat(Infinity);
console.log(_1dArray);

//advanced task 5
const arr = [1, 2, 3, 4, 5];
const first = arr.shift();
arr.push(first);
console.log(arr);


