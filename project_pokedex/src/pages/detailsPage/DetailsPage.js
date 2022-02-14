import {
  BTNAdiciona,
  Button,
  CardDetalhes,
  Col1,
  Col2,
  Col3,
  Header,
  DivPokemon,
  InfoPokemon,
  MoveDiv,
  TypeDiv,
  ImgPokemon,
  AtaqueDiv,
  H5,
  Spinner,
  ColAtributos,
  ColValores,
  ColValoresStatus,
  ContainerBody,
  NomePokemon,
  BTNRemove,
  Logo,
  ContainerLogo,
  ContainerName
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Context } from "./../../global/context";
import logo from "../../assets/LogoDetails.png";

export default function DetailsPage() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const context = useContext(Context);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    checkPokemon(parseInt(id));
    setLoading(false);
  }, []);

  const acionaToastify = (added) => {
    added
      ? toast.success("Pokemon removido com sucesso", {
          theme: "colored",
          className: "toastifySize",
        })
      : toast.success("Pokemon adicionado com sucesso", {
          theme: "colored",
          className: "toastifySize",
        });
  };

  const checkPokemon = (id) => {
    const pokemon = context.pokemons.filter((pokemon) => {
      return pokemon.id === parseInt(id);
    });
    return pokemon
  };

  const addRemPokemon = (added, id) => {
    context.addOrRemovePokemon(id);
    acionaToastify(added);
  };
  
  return (
    <ContainerBody>
      {loading ? (
        <Spinner>
          <BeatLoader color="#00a5da" />
        </Spinner>
      ) : (
        <>
          {context.pokemons
            .filter((poke) => {
              return poke.id === parseInt(id);
            })
            .map((pokemon) => {
              return (
                <ContainerBody key={pokemon.id}>
                  <Header>
                    <ContainerLogo>
                      <Button onClick={() => history.goBack()}>Voltar</Button>
                      <Logo alt={"logotipo"} src={logo} onClick={()=>history.push("/")}/>
                      {pokemon.added ? (
                        <BTNRemove
                          onClick={() => addRemPokemon(pokemon.added, pokemon.id)}
                        >
                          Remover
                        </BTNRemove>
                      ) : (
                        <BTNAdiciona
                          onClick={() => addRemPokemon(pokemon.added, pokemon.id)}
                        >
                          Adicionar
                        </BTNAdiciona>
                      )}
                    </ContainerLogo>
                  </Header>
                    <ContainerName>
                      <NomePokemon>{pokemon.name}</NomePokemon>
                    </ContainerName>
                  <CardDetalhes>
                    <Col1>
                      <DivPokemon>
                        <ImgPokemon
                          src={pokemon.sprites.front_default}
                        ></ImgPokemon>
                      </DivPokemon>
                      <DivPokemon>
                        <ImgPokemon
                          src={pokemon.sprites.back_default}
                        ></ImgPokemon>
                      </DivPokemon>
                    </Col1>
                    <Col2>
                      <div>
                        <h3
                          style={{ textAlign: "center", marginBottom: "20px" }}
                        >
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
                          <h3 style={{ textAlign: "center" }}>
                            Principais Ataques
                          </h3>
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
                  </CardDetalhes>
                  <ToastContainer autoClose={2000} />
                </ContainerBody>
              );
            })}
        </>
      )}
    </ContainerBody>
  );
}
