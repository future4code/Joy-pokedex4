import {useContext} from "react";
import {useHistory} from "react-router-dom";
import { Context } from "../../global/context";
import {Container, ContainerCards} from "./styles";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";

export default function HomePage(){

    const context = useContext(Context)
    const history = useHistory()
    
    const goToDetails = (id) =>{
        history.push(`/details/${id}`)
    }
    
    const goToPokedex = () =>{
        history.push("/pokedex")
    }

    return(
        <Container>
            <Header 
                navigation={goToPokedex} 
                title={"Ir para Pokedéx"}
            />
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
                                details={() =>goToDetails(pokemon.id)}
                            />
                        )
                    }
                )}
            </ContainerCards>
        </Container>
    )
}