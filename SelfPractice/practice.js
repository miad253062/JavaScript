function countEvenNumbers(numbers){
    if (!Array.isArray(numbers)){
        return "Invalid";
    }

    for(const num of numbers){
        if(typeof num !== 'number'){
            return "Invalid"
        }
    }

    let count = 0;
    for(const num of numbers){
        if(num % 2 === 0){
            count++;
        }
    }
    return count;
}




function topRatedRestaurant(restaurants){
    if(!Array.isArray(restaurants)){
        return "Invalid";
    }

    if(restaurants.length === 0){
        return "Invalid";
    }

    for(const restaurant of restaurants){
        if(!restaurant.hasOwnProperty('name') || !restaurant.hasOwnProperty('rating')){
            return "Invalid"
        }
    }


    let maxRating = restaurants[0].rating;
    let nameOfRestaurant = restaurants[0].name;


    for(const restaurant of restaurants){
        if(restaurant.rating > maxRating){
            maxRating = restaurant.rating;
            nameOfRestaurant = restaurant.name;
        }
    }

    return nameOfRestaurant;
}




function calculateSalary(employees){
    if(!Array.isArray(employees)){
        return "Invalid";
    }

    if(employees.length === 0){
        return "Invalid";
    }


    for(const employee of employees){
        if(!employee.hasOwnProperty('salary') || typeof employee.salary !== 'number'){
            return "Invalid";
        }
    }

    let totalSalary = 0;
    for(const employee of employees){
        totalSalary+=employee.salary;
    }

    return totalSalary;
}



