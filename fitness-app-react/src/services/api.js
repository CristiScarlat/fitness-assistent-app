import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'content-type': 'text/json'
        }
    
})

const buildParamsFromObj = (obj) => {
    const arrParams = Object.keys(obj).map(key => `${key}=${obj[key]}`)
    return `?${arrParams.join('&')}`
}

const getExercises = (paramsObj) => {
    const params =  buildParamsFromObj(paramsObj);
    return api.get(`/exercises${params}`)
}

const getFilterData = (category) => {
    return api.get(`/filter-terms?category=${category || "all"}`);
}

const getCategoryValues = (category) => {
    return api.get(`/${category}`);
}

export { getFilterData, getExercises, getCategoryValues }