import {useHistory} from "react-router-dom";
import {useContext} from "react";
import { Context } from "../../global/context";
import Header from "../../components/header/Header"
import Card from "../../components/card/Card";
import {Container, ContainerCards, Logo} from "./styles";
import logo from "../../assets/logoPokedex.png";

export default function PokedexPage(){

    const context = useContext(Context)
    const history = useHistory()

    const pokemonsFilter = context.pokemons.filter((pokemon) => {
        return pokemon.added === true
    })
    
    const goToHome = () => {
        history.push("/")
    }

    const goToDetails = (id) =>{
        history.push(`/details/${id}`)
    }

    return(
        <Container>
            <Header
                logo={<Logo alt={"logotipo"} src={logo} onClick={goToHome}/>}
                navigation={goToHome}
                title={"Lista de Pokemons"}
            />  
            <ContainerCards>
                {pokemonsFilter.map(pokemon =>{
                            return(
                                <Card
                                    key={pokemon.name}
                                    alt={pokemon.name}
                                    img={pokemon.sprites.other.dream_world.front_default}
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