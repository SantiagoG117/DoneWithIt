import { create } from 'apisauce';

/* Access to the database */

//Creates an instance of our API. 
const apiClient = create({
    baseURL: 'http://192.168.68.124:9000/api'
});

export default apiClient;