<<<<<<< HEAD
import React, { useEffect, useState } from "react";
const useGeolocation = () => {
    const[location, setLocation] = useState({
      loaded: false,
      coordinates: { lat: "", lng: ""}
    });
    
    const onSuccess = location => {
        setLocation({
            loaded: true, 
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        });
    }

    useEffect(() => {
      if(!("geolocation" in navigator)){
          onError({
              code:0,
              message: "Geolocation not supported",
          });
 
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);
    return location;
  };

=======
import React, { useEffect, useState } from "react";

const useGeolocation = () => {
    const[location, setLocation] = useState({
      loaded: false,
      coordinates: { lat: "", lng: ""}
    });
    
    const onSuccess = location => {
        setLocation({
            loaded: true, 
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        });
    }

    useEffect(() => {
      if(!("geolocation" in navigator)){
          onError({
              code:0,
              message: "Geolocation not supported",
          });
 
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);
    return location;
    
  };

>>>>>>> 31b2501ff09733f57775f6d99a5ce0f7ddf920ac
  export default useGeolocation;