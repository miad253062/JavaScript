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

console.log(topRatedRestaurant([
  { name: "Chillox", rating: -4.9 },
  { name: "Sultan's Dine", rating: -4.8 },
  { name: "Hello", rating: -3}
]))

console.log(topRatedRestaurant([
  { name: "Chillox", rating: -4.9 },
  { name: "Sultan's Dine", rating: -4.8 },
  {}
]))

