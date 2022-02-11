import {useHistory} from "react-router-dom";
import {useContext} from "react";
import { Context } from "../../global/context";
import Header from "../../components/header/Header"
import Card from "../../components/card/Card";
import {Container, ContainerCards} from "./styles";

export default function PokedexPage(){

    const context = useContext(Context)
    const history = useHistory()

    const pokemonsFilter = context.pokemons.filter((pokemon) => {
        return pokemon.added === true
    })

    // const newPokemon = pokemonsFilter.map((pokemon) => {
    //     console.log(pokemon.name)
    // })

    const goToHome = () => {
        history.push("/")
    }

    const goToDetails = (id) =>{
        history.push(`/details/${id}`)
    }

    return(
        <Container>
            <Header
                navigation={goToHome}
                title={"Lista de Pokemons"}
            />  
            <ContainerCards>
                {pokemonsFilter.map(pokemon =>{
                            return(
                                <Card
                                    key={pokemon.name}
                                    alt={pokemon.name}
                                    img={pokemon.sprites.front_default}
                                    name={pokemon.name}
                                    handler={pokemon.added}
                                    add={() => context.addOrRemovePokemon(pokemon.id)}
                                    details={() => goToDetails(pokemon.id)}
                                />
                            )
                        }
                    )}
            </ContainerCards>
                
            
        </Container>
    )
}