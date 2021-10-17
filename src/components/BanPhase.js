import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './BanPhase.css';
import cuisineData from './FilterPhase/data/cuisineData';
import fetchRestaurants from './fetchRestauants';
import Restaurants from './Data/restaurants';

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

<<<<<<< HEAD
const BanPhase = () => {

  cuisineData.map((cuisine) => {
    if(cuisine.selected) {
      fetchRestaurants(cuisine.name);
    }
  })

  console.log(Restaurants)

=======
function MyComponent() {
>>>>>>> 31b2501ff09733f57775f6d99a5ce0f7ddf920ac
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:  process.env.REACT_APP_GOOGLE_API_KEY,
  })
  
  const [map, setMap] = React.useState(null)
  
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
  return isLoaded ? (
      <div className = 'filterPhase'>
          <section className = 'selectionScreen'>
              
          </section>
          <section className="buttonScreen">
          <button type="button" className="continueButton">Continue</button>

          </section>
          <div className="mapContainer">
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              options={options}
          >
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
          </GoogleMap>
          </div>
      </div>
  ) : <></>
}

export default BanPhase;