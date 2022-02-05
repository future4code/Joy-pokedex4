import axios from "axios";
import { base_URL } from "../constants/urls";

export const request = axios.create({
    baseURL : base_URL
});

const Base_URL = "https://pokeapi.co/api/v2/pokemon"
const IdPokemon = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

export const detalhaPokemon = async () =>{// ao chamar essa função, preciso passar o id do pokemon tanto no async quanto no onclick da sua chamada
    try {
        const {data} = await axios.get(`${Base_URL}/${IdPokemon}`)
        return data
    } catch (error) {
        throw new Error(error)
    }
} 