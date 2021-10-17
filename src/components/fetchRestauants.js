import Restaurants from './Data/restaurants';
var axios = require('axios');

const restaurantExists = (name, address) => {
  return Restaurants.some(function(el) {
    return el.name === name && el.address === address;
  }); 
}

const fetchRestaurants = (query) => {


  var config = {
    method: 'get',
    url: 'https://powerful-earth-75418.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.879014%2C-79.3935609&radius=2500&type=restaurant&keyword=' +  query + '&key=' + process.env.REACT_APP_GOOGLE_API_KEY,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    let restaurantResult = (JSON.parse(JSON.stringify(response.data.results)));
    // console.log(restaurantResult)
    restaurantResult.map((Restaurant) => {
      let RestaurantObj = {
        name:Restaurant.name, 
        price:Restaurant.price_level,
        rating:Restaurant.rating,
        total_rating:Restaurant.user_ratings_total,
        address:Restaurant.vicinity,
        openNow:Restaurant.opening_hours,
        location:Restaurant.geometry, 
        cuisine:query
      }
      if (!restaurantExists(RestaurantObj.name, RestaurantObj.address)) {
        Restaurants.push(RestaurantObj);
      }
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default fetchRestaurants;
