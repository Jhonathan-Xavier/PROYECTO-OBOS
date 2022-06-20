import axios from "axios";

export default axios.create({
    //baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    baseURL: 'https://dev-api.datumtrack.com/url-builder/v1',
});