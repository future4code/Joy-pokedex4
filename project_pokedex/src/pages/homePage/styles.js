import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;    
    background-image: radial-gradient(#77A1D3, #79CBCA, #E684AE );
`
export const ContainerCards = styled.div`
    display: grid;
    gap: .5rem;
    justify-items: center;
    /* position: relative; */
    

    @media(min-width: 1024px){
        grid-template-columns: repeat(5, 1fr);
    }
    @media(min-width: 768px) and (max-width: 1023px){
        grid-template-columns: repeat(3, 1fr);
    }
`
export const ContainerPagination = styled.div`
    display: flex;
    justify-content: center;
`
export const Logo = styled.img`
    height: 100%;
`
export const Spinner = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    padding: .5rem;
`
export const Input = styled.input`
    display: flex;
    text-align: center;
    width: 230px;
    height: 40px;
    border-radius: 25px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; 
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
`