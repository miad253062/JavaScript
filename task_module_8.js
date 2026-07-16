//task 1


const price1 = 100;
const price2 = 200;
// const price2 = '100';

//comp

console.log("Greater than:", price1 > price2);
console.log("Less than:", price1 < price2);
console.log("Double equal:", price1 == price2);
//double equal compare value only with the actual value
console.log("Tripple equal:", price1 === price2);
//tripple equal compare value both data type and the actual value
console.log("Greater than or equal:", price1 >= price2);
console.log("Less than or equal:", price1 <= price2);
console.log("Not equal:", price1 != price2);
//not equal compare value only with the value
console.log("Not double equal:", price1 !== price2);
//not double equal compare value both data type and the actual value

//task 2
console.log("5" == 5);
console.log("5" === 5);

//task 3
const isRaining = true;
if (isRaining) {
    console.log("Take an umbrella");
}

// task 4
const stock = 0;
if (stock) {
    console.log("Out of stock");
}

// task 5
const number = 1;
if (number >= 0){
    console.log("Positive");
}else {
    console.log("Negative");
}

//task 6
const year = 2025;
(year%4 == 0)? console.log("Leap year") : console.log("Not a Leap year");

//task 7

const speed = 100;
(speed > 80) ? console.log("Overspeeding") : console.log("normal speed");
//task 8

const age = 18;
hasTicket = true;

if (age> 18 && hasTicket) {
    console.log("Entry allowed");
}

//task 9
const isWeekend = true;
const isHoliday = false;

(isWeekend || isHoliday)? console.log("no work today"): console.log("do work hard");

// task 10
const username = "miad";
const psk = "nopassword";

if (username === "miad" && psk === "nopassword") {
    console.log("login successful")
}

//task 11
const weight = 67;
const meter = 1.7;

const bmi = weight/meter**2;

if (bmi <= 18.5) {
    console.log("underweight");
}else if (bmi <= 25.5) {
    console.log("normal")

}else if (bmi <= 29) {
    console.log("overweight")
}else {
    console.log("obes");
}

//task 12
const month = 12;
if (month === 1 || month === 2){
    console.log("summer");
}else if (month === 3 || month === 4) {
    console.log("monsoon");
}else {
    console.log("winter");
}

//task 13
const hasID = false;

if (age >= 18){
    if (hasID) {
        console.log("Eligible");
    }
}else {
    console.log("not eligible");
}

// task 14

const cart = 500;
const isMember = true;
let discount = 0;


if (cart >= 1000 && isMember){
    discount = (20/100) * cart;
    console.log("Net amount:", cart - discount);
}else if (cart >=1000){
    discount = (10/100) * cart;
    console.log("Net amount:", cart - discount);
}else {
    console.log("Net amount:", cart);
}

//task 15
const isAdmin = true;
if (username === "miad" && psk ==="nopassword"){
    isAdmin? console.log("admin dashboard") : console.log("user dashboard");
}else {
    console.log("please login");
}

//-------------------------Output---------------------------
// Greater than: false
// Less than: true
// Double equal: false
// Tripple equal: false
// Greater than or equal: false
// Less than or equal: true
// Not equal: true
// Not double equal: true
// true
// false
// Take an umbrella
// Positive
// Not a Leap year
// Overspeeding
// no work today
// login successful
// normal
// winter
// Net amount: 500
// admin dashboard