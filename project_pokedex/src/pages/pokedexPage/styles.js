import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;    
    background-image: radial-gradient(#77A1D3, #79CBCA, #E684AE );
    height: 100vh;
    width: 100vw;
    overflow: auto;
`
export const ContainerCards = styled.div`
    display: grid;
    gap: 1rem;
    justify-items: center;
    position: relative;
    

    @media(min-width: 1024px){
        grid-template-columns: repeat(5, 1fr);
    }
    @media(min-width: 768px) and (max-width: 1023px){
        grid-template-columns: repeat(3, 1fr);
    }
`
export const Logo = styled.img`
    height: 100%;
    cursor: pointer;
`