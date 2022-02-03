import {
  BTNAdiciona,
  BTNVoltar,
  CardDetalhes,
  Col1,
  Col2,
  Col3,
  Header,
  DivPokemon,
  InfoPokemon,
  MoveDiv,
  NomePokemon,
  TypeDiv,
  ImgPokemon,
  AtaqueDiv,
  H5,
} from "./styles";
import "../../styles/global.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailsPage() {
  const IdPokemon = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${IdPokemon}/`)
      .then((res) => setPokemon(res.data))
      .catch();
  }, []);

  // console.log(pokemon);

  // const ataques = () => {
  //   for (let i = 0; i <= 5; i++) {
  //     console.log(pokemon.moves?.[i].move.name);
  //   }
  // };
  return (
    <>
      <Header>
        <BTNVoltar>Voltar</BTNVoltar>
        <NomePokemon>{pokemon.name}</NomePokemon>
        <BTNAdiciona>Adicionar</BTNAdiciona>
      </Header>
      <CardDetalhes>
        <Col1>
          <DivPokemon>
            <ImgPokemon src={pokemon.sprites?.front_default}></ImgPokemon>
          </DivPokemon>
          <DivPokemon>
            <ImgPokemon src={pokemon.sprites?.back_default}></ImgPokemon>
          </DivPokemon>
        </Col1>
        <Col2>
          <div>
            <h3>Stats</h3>
          </div>
          <div>
            <InfoPokemon>
              <h5 style={{marginTop: "10px"}}>hp:</h5>
              <p>{pokemon.stats?.[0].base_stat}</p>
            </InfoPokemon>
            <InfoPokemon>
              <h5 style={{marginTop: "10px"}}>attack:</h5>
              <p>{pokemon.stats?.[1].base_stat}</p>
            </InfoPokemon>
            <InfoPokemon>
              <h5 style={{marginTop: "10px"}}>defense:</h5>
              <p>{pokemon.stats?.[2].base_stat}</p>
            </InfoPokemon>
            <InfoPokemon>
              <h5 style={{marginTop: "10px"}}>special-attack:</h5>
              <p>{pokemon.stats?.[3].base_stat}</p>
            </InfoPokemon>
            <InfoPokemon>
              <h5 style={{marginTop: "10px"}}>special-defense:</h5>
              <p>{pokemon.stats?.[4].base_stat}</p>
            </InfoPokemon>
            <InfoPokemon>
              <h5 style={{marginTop: "10px"}}>speed:</h5>
              <p>{pokemon.stats?.[5].base_stat}</p>
            </InfoPokemon>
          </div>
        </Col2>
        <Col3>
          <TypeDiv>
            <h5>{pokemon.abilities?.[0].ability.name}</h5>
            <h5>{pokemon.abilities?.[1].ability.name}</h5>
          </TypeDiv>
          <MoveDiv>
            <div>
              <h3>Principais Ataques</h3>
            </div>
            <div>
              <InfoPokemon>
                <AtaqueDiv>
                  <H5>{pokemon.moves?.[0].move.name}</H5>
                  <H5>{pokemon.moves?.[1].move.name}</H5>
                  <H5>{pokemon.moves?.[2].move.name}</H5>
                  <H5>{pokemon.moves?.[3].move.name}</H5>
                  <H5>{pokemon.moves?.[4].move.name}</H5>
                  <H5>{pokemon.moves?.[5].move.name}</H5>
                </AtaqueDiv>
              </InfoPokemon>
            </div>
          </MoveDiv>
        </Col3>
      </CardDetalhes>
    </>
  );
}
