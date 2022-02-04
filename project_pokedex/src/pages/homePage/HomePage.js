import * as services from "../../services/apiRequestAxios";
import { useEffect, useState } from "react";
import {Container, ContainerCards} from "./styles";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";

export default function HomePage(){

    const [pokemons, setPokemons] = useState([])

    let listPokemons = []
    let promises = []
    for(let i = 1; i<= 20; i++){
        promises.push(
            services.request.get(`${i}`)
            .then(({data}) => listPokemons.push(data))
            .catch(err => console.log(err.response.data))
        )
    }
    console.log(pokemons)
    useEffect(()=>{
        Promise.all(promises).then(() => setPokemons(listPokemons));
    },[])
    
    return(
        <Container>
            <Header/>
            <ContainerCards>
                {pokemons.map(pokemon =>{
                        return(
                            <Card
                                key={pokemon.name}
                                alt={pokemon.name}
                                img={pokemon.sprites.front_default}
                                name={pokemon.name}
                            />
                        )
                    }
                )}
            </ContainerCards>
        </Container>
    )
}