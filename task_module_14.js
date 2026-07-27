//this bug is due to syntax
//bug type: syntax
function sayHi(name) {
  console.log("Hi, " + name)
}
 
sayHi("Mira");

//bug is due to case  
//bug type: typeerror
let word = "hello";
console.log(word.toUpperCase()); 

//bug is due to mathematics operation
//Bug type: logical bug
function square(num) {
  return num*num;
}
 
console.log(square(4));



function checkScore(score){
    if (score >= 50){
        return "Pass";
    }
    return "Fail";
}

console.log(checkScore(40));
console.log(checkScore(50));


function countUpto(n){
    let count = 0;
    for(let i = 1; i<=n; i++){
        count+=1;
    }
    return count;
}

console.log(countUpto(16));


function getFirstElement(arr){
    return arr[0];
}

console.log(getFirstElement([10, 20, 30]));



function subtract(a, b){
    if(a >= b){
        return a - b;
    }
    return b - a;
}

console.log(subtract(10, 3));


function isEmpty(str){
    if(str.length === 0){
        return true;
    }
    return false
}

console.log(isEmpty(''));
console.log(isEmpty('hi'));


function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0; i < numbers.length; i++) { // bug #1 is here
    if (numbers[i] % 2 === 1) {                  // bug #2 is here
      odds.push(numbers[i]);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]

//does it runs: yes
//does it crush: no
//
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
 
  for (let i = 0; i < str.length; i++) { // find the bug
    if (vowels.includes(str[i])) {
        count = count + 1;
    }
  }
  return count;
}
 
console.log(countVowels("orange")); // Expected: 3


function celsiusToFahrenheit(celsius) {
  return (9*celsius + 160)/5; // find the bug
}
 
console.log(celsiusToFahrenheit(0)); // Expected: 32



function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { // find the bug
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4, 10])); // Expected: 10


function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    result += str; // find the bug
  }
 
  return result;
}
 
console.log(repeatString("abc", 3));


function updateAge(person, newAge) {
  person.age = newAge; // find the bug
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
// Expected: { name: "Lee", age: 21 }
