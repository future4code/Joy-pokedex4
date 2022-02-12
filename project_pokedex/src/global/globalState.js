import * as services from "../services/apiRequestAxios";
import { useEffect, useState } from "react";
import { Context } from "../global/context";

export default function GlobalState(props){    
    const [pokemons, setPokemons] = useState([])

    let listPokemons = []
    let promises = []
    for(let id = 1; id<= 150; id++){
        promises.push(
            services.request.get(`${id}`)
            .then(({data}) => listPokemons.push(data))
            .catch(err => console.log(err.response.data))
        )
    }

    useEffect(()=>{
        Promise.all(promises).then(() => setPokemons(listPokemons.map(
                    pokemon => ({...pokemon, added: false })
                )
            )
        );        
    },[])
    
    const addOrRemovePokemon = (id) =>{
        const list = [...pokemons]

        const newList = list.map(pokemon =>{
            if(pokemon.id === id){
                return ({...pokemon, added: !pokemon.added })
            }
            return(pokemon)            
        })
        setPokemons(newList)
    }
    return(
        <Context.Provider value={{pokemons, addOrRemovePokemon, setPokemons}}>
            {props.children}
        </Context.Provider>
    )
}