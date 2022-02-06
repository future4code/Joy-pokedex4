import {useContext} from "react";
import { Context } from "../../context";
import {Container, ContainerCards} from "./styles";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";


export default function HomePage(){

    const context = useContext(Context)
    
    return(
        <Container>
            <Header/>
            <ContainerCards>
                {context.pokemons.map(pokemon =>{
                        return(
                            <Card
                                key={pokemon.name}
                                alt={pokemon.name}
                                img={pokemon.sprites.front_default}
                                name={pokemon.name}
                                handler={pokemon.added}
                                add={() => context.addOrRemovePokemon(pokemon.id)}
                            />
                        )
                    }
                )}
            </ContainerCards>
        </Container>
    )
}