import styled from "styled-components";

export const Header = styled.div`
  width: 80%;
  height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 15vh;
`
export const ContainerName = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Button = styled.button`
  border-radius: 10px;
  background: white;
  padding: 10px;
  border: none;
  background: #17a2b8;
  cursor: pointer;
  color: white;
  transition: all 0.5s;
  :hover {
    transition: all 0.5s;
    color: black;
    background: #89e2f0;
  }
`;

export const NomePokemon = styled.h1``;

export const BTNAdiciona = styled.button`
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  background: #28a745;
  border: none;
  transition: all 0.5s;
  
  :hover {
    transition: all 0.5s;
    color: black;
    background: #94e5a6;
  }
`;

export const BTNRemove = styled.button`
  border-radius: 10px;
  background: #dc3545;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    transition: all 0.5s;
    color: black;
    background: #f5c6ca;
  }
`;

export const CardDetalhes = styled.div`
  width: 80vw;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    height: 45vh;
  }

  @media (min-width: 600px) and (max-width: 768px){
    display: flex;
    flex-wrap: wrap;
    height: 45vh;
  }
`;

export const Col1 = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  
  @media (max-width: 600px) {
    justify-content: space-evenly;
    display: flex;
    order: 1;
    width: 35%;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    justify-content: space-between;
    display: flex;
    order: 1;
    width: 35%;
  }
`;

export const DivPokemon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e3f8fc;
  border-radius: 5px;
  box-shadow: 5px 10px 18px #888888;
`;

export const ImgPokemon = styled.img`
  width: 145px;
  
  @media (max-width: 600px) {
    width: 80%;    
  }
`;

export const Col2 = styled.div`
  width: 53%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 10px 18px #888888;

  @media (max-width: 600px) {
    display: flex;
    order: 3;
    margin-top: 25px;
    width: 84vw;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    display: flex;
    order: 3;
    margin-top: 25px;
    width: 84vw;
  }
`;

export const InfoPokemon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const ColAtributos = styled.div`
  width: 20%;
`;

export const ColValores = styled.div`
  width: 80%;
  background: #ccc;
  border-radius: 5px;
`;

export const ColValoresStatus = styled.div`
  background: #17a2b8;
  border-radius: 5px;
  color: #ffffff;
  padding-right: 5px;
  text-align: end;
  max-width: 100%;
  transition: 0.4s linear;
  animation: animacao 1s;
  @keyframes animacao {
    from {
      width: 0;
    }
    to {
      max-width: 100%;
    }
  }
`;

export const Col3 = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: flex;
    order: 2;
    width: 60%;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    display: flex;
    order: 2;
    width: 60%;
  }
`;

export const TypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 10px 18px #888888;
`;

export const MoveDiv = styled.div`
  width: 100%;
  height: 70%;
  flex-direction: column;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 10px 18px #888888;

  @media (max-width: 600px) {
    height: 65%;
  }
`;

export const AtaqueDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H5 = styled.p`
  margin-top: 10px;
  color: #17a2b8;
`;

export const Spinner = styled.div`
  width: 94%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerBody = styled.div`
  background-image: radial-gradient(#77a1d3, #79cbca, #e684ae);
  height: 100vh;
`;

export const Logo = styled.img`
    height: 100%;
    cursor: pointer;
`;

export const Img = styled.img`
    width: 50%;
`;