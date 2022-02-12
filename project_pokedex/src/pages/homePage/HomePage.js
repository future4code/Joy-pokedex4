import {useContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { Context } from "../../global/context";
import {Container, ContainerCards, ContainerPagination, Logo} from "./styles";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import ReactPaginate from 'react-paginate';
import "../../styles/pagination.css";
import logo from "../../assets/logoList.png";

export default function HomePage(){
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffSet] = useState(0);
    const context = useContext(Context)
    const history = useHistory()
    
    const itemsPerPage = context.pokemons.length / 7.5
    useEffect(()=>{
        const endOffSet = itemOffSet + itemsPerPage;
        setCurrentItems(context.pokemons?.slice(itemOffSet, endOffSet));
        setPageCount(Math.ceil(context.pokemons?.length / itemsPerPage));

    }, [itemOffSet, itemsPerPage])

    const handlePageClick = ({selected}) =>{
        const newOffSet = selected * itemsPerPage % context.pokemons?.length;
        setItemOffSet(newOffSet);
    }
    
    const goToDetails = (id) =>{
        history.push(`/details/${id}`)
    }
    
    const goToPokedex = () =>{
        history.push("/pokedex")
    }

    const updateCurrentItem = (id, item) =>{
        const listCurrentItems = [...currentItems]
        const listAllPokemons = [...context.pokemons]
        const pokemon = item

        const newList = listCurrentItems.map(pokemon =>{
            if(pokemon.id === id){
                return ({...pokemon, added: !pokemon.added })
            }
            return(pokemon)            
        })
        
        const index = listAllPokemons.findIndex(item => item.id === id)
        
        if(index >= 0){
            listAllPokemons[index] = {...pokemon, added: !pokemon.added }
        }
        setCurrentItems(newList)
        context.setPokemons(listAllPokemons)        
    }


    return(
        <Container>
            <Header
                logo={<Logo alt={"logotipo"} src={logo}/>}
                header={"Lista de Pokémons"} 
                navigation={goToPokedex} 
                title={"Ir para Pokedéx"}
            />
            <ContainerCards>
                {currentItems?.map(pokemon =>{
                        return(
                            <Card
                                key={pokemon.name}
                                alt={pokemon.name}
                                img={pokemon.sprites.front_default}
                                name={pokemon.name}
                                handler={pokemon.added}
                                add={() => updateCurrentItem(pokemon.id, pokemon)}
                                details={() =>goToDetails(pokemon.id)}
                            />
                        )
                    }
                )}
            </ContainerCards>
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
                />
            </ContainerPagination>
        </Container>
    )
}