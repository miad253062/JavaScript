console.log("hello for 5 times");
for (let i = 0; i<5; i++) {
    console.log("Hello")
}

console.log("printing 1 to 10 with for loop");
for (let i = 1; i<=10; i++) {
    console.log(i);
}

console.log("countdown from 10 to 1");
let count = 10;
while(count > 0) {
    console.log(count);
    count--;
}

console.log("loop is running msg for 7 times")
count = 1;
while(count <= 7){
    console.log(count, "loop is running");
    count++;
}


console.log("even number from 1 to 30");
for(let i = 1; i <= 30; i++){
    if(i%2 === 0) {
        console.log(i);
    }
}

console.log("sum from 1 to 20");
let sum = 0;
for (let i = 0; i <= 20; i++){
    sum+=i;
}

console.log(sum);

console.log("Multiplication table");
let number = 3;
for(let i = 1; i<=10; i++) {
    console.log(number, "x", i, "=", number*i);
}

console.log("countdown from 20");
for(let i = 20; i > 0; i--) {
    console.log(i);
}


console.log("sum of even number");
let sum2 = 0;
for(let i = 2; i<=50; i++) {
    if(i%2 === 0) {
        sum2+=i;
    }
}
console.log("sum of 2 to 50:", sum2);


console.log("break statement");
for(let i = 0; i<=50; i++) {
    if(i > 30){
        break;
    }
    console.log(i);
}

console.log("continue statement");
for(let i = 1; i<=20; i++) {
    if(i%4 === 0) {
        continue;
    }
    console.log(i);
}

console.log("do while");
count = 0;
do {
    console.log(count);
    count++;
}while(count >= 10);


console.log("comparing loop types");

console.log("for loop");
for(let i = 1; i<=5; i++){
    console.log(i);
}

console.log("while loop");
count = 1;
while(count<=5) {
    console.log(count);
    count++;
}

console.log("do while loop");
count = 1;
do {
    console.log(count);
    count++;
}while (count <= 5);

console.log("mini challenge");
for(let i = 1; i<=100; i++) { 
    if (i % 5 === 0) continue;
    if(i > 40) break;
    console.log(i);
}