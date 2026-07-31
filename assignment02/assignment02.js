//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  if(Number.isNaN(teamAGoals) || Number.isNaN(teamBGoals)){
    return "Invalid";
  }
  
  if(typeof teamAGoals === "number" && typeof teamBGoals === "number"){
    if(teamAGoals === teamBGoals){
        return "Draw";
    }else if(teamAGoals > teamBGoals){
        return "Team A Won";
    }else{
        return "Team B Won";
    }
  }
  return "Invalid";
}


//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
  if(Array.isArray(weights) !== true){
    return "Invalid";
  }
    
  let sum = 0;
  for(const weight of weights){
    if(typeof weight !== 'number' || Number.isNaN(weight)){
        return "Invalid";
    }
    sum+=weight;
  }
  if(sum <= 400){
    return true;
  }
  return false;
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== 'number' || Number.isNaN(tokensUsed)){
        return "Invalid";
    }

    if(tokensUsed < 0){
        return "Invalid";
    }

    const netUsed = tokensUsed - 500;
    if(netUsed > 0){
        const chargeApplied = netUsed / 100;
        return Math.floor(chargeApplied) * 5;
    }
    
    return 0;
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants)){
        return "Invalid";
    }
    
    if(restaurants.length === 0){
        return "Invalid";
    }

    for(const property of restaurants){
        if(!property.hasOwnProperty('name') || !property.hasOwnProperty('rating')){
            return "Invalid";
        }
    }


    let maxRating = restaurants[0].rating;
    let nameOfRestaurant = restaurants[0].name;

    for(const restaurant of restaurants){
        if(restaurant.rating > maxRating){
            maxRating = restaurant.rating;
            nameOfRestaurant = restaurant.name
        }
    }
    return nameOfRestaurant.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  const _length = times.length;
  for (const time of times) {
    if (typeof time !== "number" || Number.isNaN(time)) {
      return "Invalid";
    }
    total += time;
  }

  return total / _length;
}

