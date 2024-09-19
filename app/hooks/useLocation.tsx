import { useEffect, useState } from "react";
import * as Location from 'expo-location';

//Custome hook: Encapsulate some state and some logic behind that state in a single function
const useLocation = () => {
    //State
    const [location, setLocation] = useState<any>();

    //Logic on the state
    const getLocation = async () => {
        try {
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if(!granted)
                return
            //Get the latitude and longitude of the last known location of the user
            const result = await Location.getLastKnownPositionAsync();
            const latitude = result?.coords.latitude;
            const longitude = result?.coords.longitude;
    
            setLocation({latitude, longitude});
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        getLocation();
  }, [])

  return location;
};

export default useLocation;