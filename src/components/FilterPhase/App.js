import React from "react";
import DistanceFilter from "./components/distanceFilter";
import FoodFilter from "./components/foodFilter";
import PriceFilter from "./components/priceFilter";
import './FilterPhasePage.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {useHistory} from 'react-router-dom';


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

const FilterPhase = () => {

    let history = useHistory();

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
                <FoodFilter />
                <PriceFilter />
                <DistanceFilter />
            </section>
            <section className="buttonScreen">
            <button onClick={() => {
            history.push("/ban");
            }}
            type="button"
            className="continueButton">Continue</button>

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

export default FilterPhase;