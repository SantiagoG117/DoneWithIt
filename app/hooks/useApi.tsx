import { ApiResponse } from "apisauce";
import { useState } from "react";

/* Hook: Encapsulates state and logic inside a reusable function */

const useApi = (apiFunction) => {

    //?State: variables to store the current state of the request to the server and the items that we get
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    
    //?Logic: Load the items from the api (Logic around the state)
    const request = async  () => {

        //Call to passed api function and set the loading animation.
        setLoading(true);
        const response = await apiFunction(); //* At this line we are actually calling the target api function
        setLoading(false);

        
        //Case if the call to the API server was unsuccessfull
        if(!response.ok) return setError(true); //*Promises are always resolve even if we get an error. We can verify if the response got an error by calling the ok method
        
        //Case if the call to the API server was successfull
        setError(false);
        setData(response.data); //*response.data holds the data returned by the response. Set that data to the state of the listings
    }

    // ? Expose the state and logic build inside the hook so other controllers can call it
    return { data, error, loading, request}
}

export default useApi;