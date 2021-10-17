import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyles from '../mapStyles';
import './BanPhase.css';
import cuisineData from './FilterPhase/data/cuisineData';
import useGeolocation from './useGeoLocation';

const containerStyle = {
  width: "70vw",
  height: "100vh",
  left: "30vw",
};

const options = {
    styles: mapStyles,
    zoomControl: false,
    disableDefaultUI: true,
}

console.log(window.location.lat);

const center = {
  lat: window.location.lat,
  lng: window.location.lng
};

console.log(process.env.REACT_APP_GOOGLE_API_KEY);

function MyComponent() {
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
      <div>
          <div className="sidePanel">

          </div>
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
  ) : <></>
}

export default React.memo(MyComponent)