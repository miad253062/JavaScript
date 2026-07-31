function isElevatorSafe(weights) {
  if(Array.isArray(weights) !== true){
    return "Invalid";
  }
  
  let sum = 0;
  for(const weight of weights){
    if(typeof weight !== 'number'){
        return "Invalid";
    }
    sum+=weight;
  }
  if(sum <= 400){
    return true;
  }
  return false;
}

console.log(isElevatorSafe([12, 399]))
