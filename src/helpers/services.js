import axios from "axios";

export const getAnimes = async() => {
    const url = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`;
    const response = await axios.get(url)
    return response
}

export const getById = async(id) => {
    const url = `https://kitsu.io/api/edge/anime/${id}`;
    const response = await axios.get(url)
    return response
}

export const getByName = async(name) => {
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${name}`
    const response = await axios.get(url)
    return response
}