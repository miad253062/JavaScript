function distance(a, b){
    return a > b ? a - b : b - a;
}

function closestMap(arr, target){
    let map = {}
    for(const number of arr){
        if(!map[number]){
            map[number] = distance(number, target);
        }
    }
    return map;
}   

function closestNumber(arr, target){
    let cmap = closestMap(arr, target)
    let theNumber = 0;
    let closestNum = Infinity;
    for(const key in cmap){
        if(closestNum > cmap[key]){
            closestNum = cmap[key];
            theNumber = key;
        }
    }
    return Number(theNumber);
}
console.log(closestNumber([6, 10], 8));