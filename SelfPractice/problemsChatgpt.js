//task 1
const numbers = [23, 34, 65, 75, 34, 75, 27, 96, 45, 75];
let _length = numbers.length;
let sum = 0;
let highest = -Infinity;
let lowest = Infinity;
let fail = 0;

for(const number of numbers){
    sum+=number;
    if(number>highest){
        highest = number;
    }
    if(number < lowest){
        lowest = number;
    }
    if (number <= 33){
        fail++;
    }
}

console.log("Average:", sum/_length);
console.log("Highest number:", highest);
console.log("Lowest number:", lowest);
console.log("Total fail:", fail);
console.log("Total pass:", _length-fail);


//task 2
const numberArr = [2, 4, 6, 1, 3, 5, 0, 20, -1, 0, -4];
let even = 0;
let odd = 0;
let positive = 0;
let negative = 0;
let zero = 0;

for(const number of numberArr){
    if(number === 0) {
        zero++;
    }
    if(number > 0){
        positive++;
        if(number % 2 === 0){
            even++;
            console.log('even:', number);
        }else{
            odd++;
            console.log('odd:', number);
        }
    }
    if (number < 0) {
        negative++;
    }
}

console.log("total even:", even);
console.log("total odd:", odd);
console.log("positive:", positive);
console.log("negative:", negative);
console.log("total zero:", zero);


//task 3
let secondLargest = -Infinity;
let secondSmallest = Infinity;
for(const number of numbers){
    if(number !== highest && number > secondLargest){
        secondLargest = number;
    }
    
    if(number !== lowest && number < secondSmallest){
        secondSmallest = number;
    }
}

console.log(numbers);
console.log("largest:", highest);
console.log("smallest:", lowest);
console.log("second largest:", secondLargest);
console.log("second smallest:", secondSmallest);

//task 4
const frequencyNum = [1,2,2,3,3,3,4,4,5];
let uniqueNum = [];
let count = 0;

for(const number of frequencyNum){
    if(!uniqueNum.includes(number)){
        uniqueNum.push(number)
    }
}

for(const num of uniqueNum){
    count = 0;
    for(const num2 of frequencyNum){
        if(num === num2){
            count++;
        }
    }
    console.log(num, "x", count, "times")
}