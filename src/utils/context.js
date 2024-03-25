import axios from "axios";
import { myNewsApi } from "./apiKey";

const api_key = myNewsApi

const baseUrl = 'https://newsapi.org/v2'

const breakingUrl = `${baseUrl}/top-headlines?country=us&apiKey=${api_key}`;
const recommendedUrl = `${baseUrl}/top-headlines?country=us&category=technology&apiKey=${api_key}`;

const searchUrl = (query) => `${baseUrl}/everything?q=${query}&apiKey=${api_key}`

export const discoverQueryUri = query => `${baseUrl}/top-headlines?country=us&category=${query}&apiKey=${api_key}`

const newApiCall = async (endpoints, params) => {
    const options = {
        method: 'GET',
        url: endpoints,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options)
        return response.data;
    } catch (error) {
        console.log(error)
        return {};
    }
    
}

export const fetchBreakingNews = async () => {
    return await newApiCall(breakingUrl)
}

export const fetchRecommendedNews = async () => {
    return await newApiCall(recommendedUrl)
}

export const fetchDiscoverNews = async (query) => {
    return await newApiCall(discoverQueryUri(query))
}

export const searchUrlQuery = async query => {
    const endpoint = searchUrl(query)
    return await newApiCall(endpoint)
}


