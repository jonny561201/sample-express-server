import fetch from "node-fetch";


export const getResults = async (albumId) => {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
    const response = await fetch(url);
    return await response.json();
}