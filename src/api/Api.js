import axios from 'axios';
import { base_url } from '../contants/base';

const http = axios.create({
    baseURL: base_url
})

export const Api = {
    getCars: () => http.get('cars'),
    deleteCars: () => http.delete('cars'),
    postCars: () => http.post('cars')
} 

export default Api;