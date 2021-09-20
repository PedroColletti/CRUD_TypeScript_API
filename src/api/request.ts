import axios from 'axios';

const baseURL = "https://gorest.co.in/public-api/"

const request = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        Accepet: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ad4afe46d6c688dca44495357268479f0e8a771e5fc94bcfd58fb45a9b6b008b'
    }
});

export default request;