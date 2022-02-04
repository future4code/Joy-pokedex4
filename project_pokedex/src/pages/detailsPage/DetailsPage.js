import {
  BTNAdiciona,
  BTNVoltar,
  CardDetalhes,
  Col1,
  Col2,
  Header,
  ImgPokemon,
  InfoPokemon,
  NomePokemon,
} from "./styles";

export default function DetailsPage() {
  return (
    <>
      <Header>
        <BTNVoltar>Voltar</BTNVoltar>
        <NomePokemon>Nome do Pokemon</NomePokemon>
        <BTNAdiciona>Adicionar</BTNAdiciona>
      </Header>
      <CardDetalhes>
        <Col1>
          <ImgPokemon>Frente</ImgPokemon>
          <ImgPokemon>Costas</ImgPokemon>
        </Col1>
        <Col2>
          <div>
            <h3>Stats</h3>
          </div>
          <div>
              <InfoPokemon>
                  <h5>hp</h5>
                  <p>40</p>
              </InfoPokemon>
              <InfoPokemon>
                  <h5>hp</h5>
                  <p>40</p>
              </InfoPokemon>
              <InfoPokemon>
                  <h5>hp</h5>
                  <p>40</p>
              </InfoPokemon>
              <InfoPokemon>
                  <h5>hp</h5>
                  <p>40</p>
              </InfoPokemon>
              <InfoPokemon>
                  <h5>hp</h5>
                  <p>40</p>
              </InfoPokemon>
              <InfoPokemon>
                  <h5>hp</h5>
                  <p>40</p>
              </InfoPokemon>
          </div>
        </Col2>
      </CardDetalhes>
    </>
  );
}
