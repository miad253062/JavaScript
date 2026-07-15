const name = "miad";
let age = 21;

let type_of_name = typeof name;
let type_of_age = typeof age;
// let after_4_years_age_will_be = age+=4;


console.log("type of name: " + type_of_name);
console.log("type_of_age: " + type_of_age);
console.log("after 4 years, age will be:", age+=4);

//simple math calculator

let num1 = 20;
let num2 = 10;


const add = num1 + num2; 
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;
const mod = num1 % num2;

console.log("Addition: " + add);
console.log("Subtraction: " + sub);
console.log("Multiplication: " + mul);
console.log("Division: " + div);
console.log("MOdulus: " + mod);

//placeholder

console.log(`your name is ${name}`)

//mini coding

let price = 200;
let quantity = 3;
let discount = 10;

let totalPrice = price * quantity;
let totalDiscount = (discount/100) * totalPrice;
let net = totalPrice - totalDiscount;
console.log("Total payable amount:", net);

