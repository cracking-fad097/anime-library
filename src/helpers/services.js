import axios from "axios";

export const getAnimes = async() => {
    const url = `https://kitsu.io/api/edge/anime`;
    const response = await axios.get(url)
    return response
}

export const getById = async(id) => {
    const url = `https://kitsu.io/api/edge/anime/${id}`;
    const response = await axios.get(url)
    return response
}