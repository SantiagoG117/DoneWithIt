import client from "./client";

/* 
    API Layer: 
    Contains the details and logic for GET, POST, PUT, DELETE requests to the API server holding all the listings

    Apisauce: 
    Lightweight library for making HTTP request to API. It provides a simplified interface for making API calls 
    and it is built on top of Axios
*/



const endpoint = '/listings';

//? GET: Logic for getting the listings from the server*/
const getListings = () => client.get(endpoint);  

//? POST:  Logic for posting a listing to the server*/
const addListing = (listing) => {
    /* 
        Each HTTP request has a special header called content-type, which tells the server what kind of data we are going to send.
        For uploading files or images we must use a special content type called multipart/form-data. This tells the server that we
        are sending a large request whose body can be divided into multiple parts. 

        Since we are uploading images instead of a plain JavaScript object we should send a FormData. By using a FormData object API sauce
        internally will set the content-type header to multipart/formdata
    */

    
    const data = new FormData();
    
    data.append("title", listing.title);
    data.append("price", listing.price);
    data.append("categoryId", listing.category.value);
    data.append("description", listing.description);
    
    //Each listing can have one or more images. Iterate over the images array
    listing.images.forEach((image, index) =>
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image,
            
        })
    )
    
    //Each listing may have a location object, which we should serialized as a string.
    if(listing.location)
        data.append('location', JSON.stringify(listing.location) )
    
   // Post the listing and return its promise
   return client.post(endpoint, data, {headers: { 'Content-Type': 'multipart/form-data' }})
}
    
export default {
    getListings,
    addListing,
}