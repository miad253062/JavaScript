// for (let i = 1; i < 5; i++) {
//     console.log(i);
// }

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// let age = 20;

// if (age = 18) {
//     console.log("You can vote.");
// }

let age = 20;

if (age >= 18) {
    console.log("You can vote.");
}


// function add(a, b) {
//     let sum = a + b;
// }

// console.log(add(10, 5));

function add(a, b) {
    return a + b;
}

console.log(add(10, 5));


// const fruits = ["Apple", "Banana", "Orange"];

// for (let i = 1; i <= fruits.length; i++) {
//     console.log(fruits[i]);
// }

const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// let i = 0;

// while (i < 5) {
//     console.log(i);
// }

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// const user = {
//     name: "Alice",
//     age: 22
// };

// console.log(user.Name);


const user = {
    name: "Alice",
    age: 22
};

console.log(user.name);



const arr1 = [1,2,3];
const arr2 = [...arr1];


arr2.push(4);
console.log(arr1);
console.log(arr2);


function total(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(total([1, 2, 3]));


const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 25 }
];

function getAdults(users) {
    let adults = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            adults.push(users[i].name);
        }
    }

    return adults;
}

console.log(getAdults(users));



const a = [10, 20];
const b = Array.from(a);

a.push(30);

console.log(a);
console.log(b);