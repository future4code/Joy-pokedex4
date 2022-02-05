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
  Spinner,
  ColAtributos,
  ColValores,
  ColValoresStatus,
  Containerr,
  ContainerBody,
} from "./styles";
import { useEffect, useState } from "react";
import { detalhaPokemon } from "../../services/apiRequestAxios";
import { BeatLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from './../homePage/styles';

export default function DetailsPage() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const detalharPokemon = async () => {
    const response = await detalhaPokemon();
    response && setPokemon(response);
    setLoading(false);
  };

  useEffect(() => {
    detalharPokemon();
  }, []);

  const acionaToastify = () => {
    toast.success("Pokemon adicionado com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  return (
    <ContainerBody>
      <Header>
        <BTNVoltar onClick={() => history.push("/")}>Voltar</BTNVoltar>
        <NomePokemon>{pokemon.name}</NomePokemon>
        <BTNAdiciona onClick={acionaToastify}>Adicionar</BTNAdiciona>
      </Header>
      <CardDetalhes>
        {loading ? (
          <Spinner>
            <BeatLoader color="#00a5da" />
          </Spinner>
        ) : (
          <>
            <Col1>
              <DivPokemon>
                <ImgPokemon src={pokemon?.sprites?.front_default}></ImgPokemon>
              </DivPokemon>
              <DivPokemon>
                <ImgPokemon src={pokemon?.sprites?.back_default}></ImgPokemon>
              </DivPokemon>
            </Col1>
            <Col2>
              <div>
                <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                  Stats
                </h3>
              </div>
              <div>
                <InfoPokemon>
                  <ColAtributos>
                    <h5>hp:</h5>
                  </ColAtributos>
                  <ColValores>
                    <ColValoresStatus
                      style={{
                        width: `${pokemon?.stats?.[0].base_stat}%`,
                      }}
                    >
                      {pokemon?.stats?.[0].base_stat}
                    </ColValoresStatus>
                  </ColValores>
                </InfoPokemon>
                <InfoPokemon>
                  <ColAtributos>
                    <h5>attack:</h5>
                  </ColAtributos>
                  <ColValores>
                    <ColValoresStatus
                      style={{
                        width: `${pokemon?.stats?.[1].base_stat}%`,
                      }}
                    >
                      {pokemon?.stats?.[1].base_stat}
                    </ColValoresStatus>
                  </ColValores>
                </InfoPokemon>
                <InfoPokemon>
                  <ColAtributos>
                    <h5>defense:</h5>
                  </ColAtributos>
                  <ColValores>
                    <ColValoresStatus
                      style={{
                        width: `${pokemon?.stats?.[2].base_stat}%`,
                      }}
                    >
                      {pokemon?.stats?.[2].base_stat}
                    </ColValoresStatus>
                  </ColValores>
                </InfoPokemon>
                <InfoPokemon>
                  <ColAtributos>
                    <h5>special-attack:</h5>
                  </ColAtributos>
                  <ColValores>
                    <ColValoresStatus
                      style={{
                        width: `${pokemon?.stats?.[3].base_stat}%`,
                      }}
                    >
                      {pokemon?.stats?.[3].base_stat}
                    </ColValoresStatus>
                  </ColValores>
                </InfoPokemon>
                <InfoPokemon>
                  <ColAtributos>
                    <h5>special-defense:</h5>
                  </ColAtributos>
                  <ColValores>
                    <ColValoresStatus
                      style={{
                        width: `${pokemon?.stats?.[4].base_stat}%`,
                      }}
                    >
                      {pokemon?.stats?.[4].base_stat}
                    </ColValoresStatus>
                  </ColValores>
                </InfoPokemon>
                <InfoPokemon>
                  <ColAtributos>
                    <h5>speed:</h5>
                  </ColAtributos>
                  <ColValores>
                    <ColValoresStatus
                      style={{
                        width: `${pokemon?.stats?.[5].base_stat}%`,
                      }}
                    >
                      {pokemon?.stats?.[5].base_stat}
                    </ColValoresStatus>
                  </ColValores>
                </InfoPokemon>
              </div>
            </Col2>
            <Col3>
              <TypeDiv>
                <div>
                  <h3 style={{ textAlign: "center" }}>Tipo</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "10px",
                  }}
                >
                  {pokemon?.types?.map((tipo, index) => {
                    return <H5 key={index}>{tipo.type.name}</H5>;
                  })}
                </div>
              </TypeDiv>
              <MoveDiv>
                <div>
                  <h3 style={{ textAlign: "center" }}>Principais Ataques</h3>
                </div>
                <div>
                  <InfoPokemon>
                    <AtaqueDiv>
                      {pokemon?.moves
                        ?.map((ataque, index) => (
                          <H5 key={index}>{ataque.move.name}</H5>
                        ))
                        .filter((ataque, index) => index < 5)}
                    </AtaqueDiv>
                  </InfoPokemon>
                </div>
              </MoveDiv>
            </Col3>
          </>
        )}
      </CardDetalhes>
      <ToastContainer autoClose={2000} />
    </ContainerBody>
  );
}