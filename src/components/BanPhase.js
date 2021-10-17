import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './BanPhase.css';
import cuisineData from './FilterPhase/data/cuisineData';
import fetchRestaurants from './fetchRestauants';
import Restaurants from './Data/restaurants';
import RestaurantCard from './restaurantCard';
import {useHistory} from 'react-router-dom';
import decisionList from './Data/finalList';

const containerStyle = {
  width: "64.5vw",
  height: "100vh",
  left: "0vw",
};

const options = {
    zoomControl: false,
    disableDefaultUI: true,
}

const center = {
  lat: 43.879014,
  lng: -79.3935609
};

let finalList = [];

const BanPhase = () => {

  let history = useHistory();

  const [renderList, setList] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:  process.env.REACT_APP_GOOGLE_API_KEY,
  })

  const first = () => {
    return new Promise((resolve) => {
      cuisineData.map((cuisine) => {
        if (cuisine.selected) {
          fetchRestaurants(cuisine.name);
        }
      })
      resolve();
    });
  }

  const second = () => {
    return new Promise((resolve) => {

      const finalExists = (element) => {
        return finalList.some(function(el) {
          return el.name === element.name && el.address === element.address;
        }); 
      }

      console.log(Restaurants)
      while(finalList.length < ((Restaurants.length > 3) ? 3 : Restaurants.length)) {
        let random = Math.floor(Math.random()*((Restaurants.length > 10) ? 10 : Restaurants.length));
        if(!finalExists(Restaurants[random])) {
          finalList.push(Restaurants[random]);
        }
      }

      console.log(finalList);
      setList(finalList)
      resolve();
    });
  }

  setTimeout(() => {
    second()
  }, 500);
  first();

  
  // const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map)
  // }, [])
  
  // const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null)
  // }, [])

  // onLoad={onLoad}
  // onUnmount={onUnmount}
  return (
      <div className = 'filterPhase'>
          <section className = 'selectionScreen'>
          <h1 id="introduction"> Here are some restaurants that fits your criterias,
          click ban to toggle ban or share the plans with your friends. If you have
          more than 1 open options, we will randomly decide for you! </h1>
            {renderList && renderList.map((Restaurant) => {
              console.log(Restaurant.location.location.lat)
                return (
                    <RestaurantCard restaurant = {Restaurant} rend />
                )
            })}
          </section>
          <section className="buttonScreen">
          <button type="button"
          onClick={() => {
            history.push({
              pathname:"/final",
              state:{finalList: finalList}
          });
          }}
           className="confirmButton ">Confirm</button>

          </section>
          <div className="mapContainer">
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              options={options}
          >
            {renderList && renderList.map((Restaurant) => {
                if(!Restaurants.ban) {
                  return(<Marker position ={{ lat: Restaurant.location.location.lat, lng: Restaurant.location.location.lng}} />)
                }
              })}
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
          </GoogleMap>
          </div>
      </div>
  )

}

export default BanPhase;