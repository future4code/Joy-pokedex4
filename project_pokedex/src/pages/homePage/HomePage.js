import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../global/context";
import { BeatLoader } from "react-spinners";
import ReactPaginate from 'react-paginate';
import { 
    Container, 
    ContainerCards, 
    ContainerPagination, 
    Logo, 
    Spinner,
    ContainerInput,
    Input
} from "./styles";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import logo from "../../assets/logoList.png";
import "../../styles/pagination.css";

export default function HomePage() {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffSet] = useState(0);
    const [query, setQuery] = useState("");
    
    const context = useContext(Context)
    const history = useHistory()
    const loading = context.pokemons
    const itemsPerPage = Math.ceil(context.pokemons.length / 7.5)
    console.log(context.pokemons)
    useEffect(() => {
        const endOffSet = itemOffSet + itemsPerPage;
        setCurrentItems(context.pokemons?.slice(itemOffSet, endOffSet));
        setPageCount(Math.ceil(parseInt(context.pokemons?.length / itemsPerPage)));

    }, [itemOffSet, itemsPerPage, query, pageCount])

    const handlePageClick = ({ selected }) => {
        const newOffSet = selected * itemsPerPage % context.pokemons?.length;
        setItemOffSet(newOffSet);
        scrollTop()
    }

    const scrollTop = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'  
        })
    }

    const onChangeQuery = ({ target }) => {
        setQuery(target.value)
    }
    
    const goToDetails = (id) => {
        history.push(`/details/${id}`)
    }

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const updateCurrentItem = (id, choice) => {
        const listCurrentItems = [...currentItems]
        const listAllPokemons = [...context.pokemons]
        const index = listAllPokemons.findIndex(item => item.id === id)
        const pokemon = choice

        const newList = listCurrentItems.map(pokemon => {
            if (pokemon.id === id) {
                return ({ ...pokemon, added: !pokemon.added })
            }
            return (pokemon)
        })

        if (index >= 0) {
            listAllPokemons[index] = { ...pokemon, added: !pokemon.added }
        }

        setCurrentItems(newList)
        context.setPokemons(listAllPokemons)
    }

    return (
        <Container>
            <Header
                logo={<Logo alt={"logotipo"} src={logo} />}
                header={"Lista de Pokémons"}
                navigation={goToPokedex}
                title={"Ir para Pokedéx"}
            />
            <ContainerInput>
                <Input
                    placeholder={"Buscar"}
                    value={query}
                    onChange={onChangeQuery}
                />
            </ContainerInput>
            {loading.length !== 0 ?
                <div>
                    <ContainerCards>
                        {query === "" ?
                            currentItems?.map(pokemon => {
                                return (
                                    <Card
                                        key={pokemon.name}
                                        alt={pokemon.name}
                                        img={pokemon.sprites.other.dream_world.front_default}
                                        name={pokemon.name}
                                        handler={pokemon.added}
                                        add={() => updateCurrentItem(pokemon.id, pokemon)}
                                        details={() => goToDetails(pokemon.id)}
                                    />
                                )
                            }
                            ) :
                            context.pokemons?.filter(pokemon => {
                                return pokemon.name.toLowerCase().includes(query.toLowerCase())
                            })
                            .map(pokemon => {
                                return (
                                    <Card
                                        key={pokemon.name}
                                        alt={pokemon.name}
                                        img={pokemon.sprites.other.dream_world.front_default}
                                        name={pokemon.name}
                                        handler={pokemon.added}
                                        add={() => updateCurrentItem(pokemon.id, pokemon)}
                                        details={() => goToDetails(pokemon.id)}
                                    />
                                )
                            })
                        }
                    </ContainerCards>
                    {query === "" ?
                        <ContainerPagination>
                            <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                activeClassName={"paginationActive"}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={2}
                            />
                        </ContainerPagination> : null
                    }

                </div> :
                <Spinner>
                    <BeatLoader color="#00a5da" />
                </Spinner>

            }
        </Container>
    )
}
