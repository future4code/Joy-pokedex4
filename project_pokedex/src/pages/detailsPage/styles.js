import styled from "styled-components";

export const Header = styled.div`
  width: 87%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 auto 30px auto;
`;

export const BTNVoltar = styled.button`
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
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
`;

export const Col1 = styled.div`
  display: flex;
  width: 13%;
  height: 100%;
  flex-direction: column;
`;

export const DivPokemon = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgPokemon = styled.img`
  width: 100%;
  height: 100%;
`

export const Col2 = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 10px 18px #888888;
`;

export const InfoPokemon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Col3 = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
`;

export const TypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 10px 18px #888888;
`;

export const MoveDiv = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 10px 18px #888888;
`;

export const AtaqueDiv = styled.div`
  display: flex;
  flex-direction: column;

`

export const H5 = styled.p`
  margin-top: 10px;
`
