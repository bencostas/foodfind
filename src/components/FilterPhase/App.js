import React from "react";
import DistanceFilter from "./components/distanceFilter";
import FoodFilter from "./components/foodFilter";
import PriceFilter from "./components/priceFilter";
import './FilterPhasePage.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: "80vw",
    height: "100vh",
    left: "20vw",
  };
  
  const options = {
      zoomControl: false,
      disableDefaultUI: true,
  }
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

function FilterPhase () {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:  process.env.REACT_APP_GOOGLE_API_KEY,
    })
    
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return isLoaded ? (
        <div className = 'filterPhase'>
            <section id = 'selectionScreen'>
                <FoodFilter />
                <PriceFilter />
                <DistanceFilter />
            </section>
            <section>
            <button type="button"className="continueButton">Continue</button>

            </section>
            <div className="mapContainer">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
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