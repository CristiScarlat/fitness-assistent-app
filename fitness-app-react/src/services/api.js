import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'content-type': 'text/json'
        }
    
})

const getFilterData = () => {
    return api.get('/filter-terms?category=all');
}

export { getFilterData }