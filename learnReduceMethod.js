let numbers = [1, 1, 2, 3, 2, 3, 6, 5, 5, 5, 5, 50];
let sum = numbers.reduce((acc, currentValue) => { return acc +=currentValue}, 0);
console.log("Total:", sum);

let avg = numbers.reduce((acc, currentValue) => {return acc += currentValue}, 0) / numbers.length;
console.log("Average:", avg)


let frequencyOfNumbers = numbers.reduce((acc, currentValue) => {
    if(acc[currentValue]){
        acc[currentValue]++;
    }else{acc[currentValue] = 1;}
    

    return acc;
    
}, {});

console.log("Frequency:", frequencyOfNumbers);


let numbers2 = [5, 6, 1, 9, 10];
let mergeArr = [...numbers, ...numbers2].reduce((acc, currentElement, index) => {
    if(!acc.includes(currentElement)){
        acc.push(currentElement);
    }
    return acc;
}, [])


console.log("Merge Array:", mergeArr);