function calculateBill(amount, taxRate = 0.05) {
  return amount + amount * taxRate;
}

function buildProfileCard(user) {
  return `${user.name ? user.name : "(Missing)"}\n${user.title ? user.title : "(Missing)"} at ${user.company ? user.company : "(Missing)"}`;
}


const getLowestPrice = (prices) =>{
    if(!Array.isArray(prices) || prices.length === 0){
        return "Invalid"
    } 
    return Math.min(...prices);
}


const swapValues = (a, b) =>{
    [b, a] = [a, b];
    return [a, b];
}


const getEmployeeDept = (employee) => {
    let isValidObject = (typeof employee === 'object' && !Array.isArray(employee) && employee !== null)? true : false;

    if(!isValidObject){
        return "Invalid";
    }

    const {job: {title, department} = {}} = employee;

    return {title, department}
}

const promoteEmployee = (employee, newTitle) => {
    const {name} = employee;
    return {name, newTitle};   
}


const sumAllPrices = (prices) => {
    return prices.reduce((acc, currentValue) => {return acc += currentValue},0);
}


const getManagerName = (employee) => {
    return employee.manager?.name;
}


function splitFirstRest(arr){
    const [first, ...rest] = arr;
    return {first, rest}
}


const cloneAndUpdate = (arr, index, newValue) => {
    const newArr = [...arr];
    newArr[index] = newValue;

    return  newArr;
}