import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 230px;
    height: 300px;
    margin: 1rem 0 1rem 0 ;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: rgba(0, 0, 0, 0.3);
`
export const ContainerContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 220px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 25px;
    margin: 1rem 0 1rem 0 ;
    transition: 300ms ease-in-out;
    
    :hover{   
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transition: 300ms ease-in-out;
        transform: scale(1.1);
    }        
`
export const ContainerInfoCard = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
`

export const BtnMain = styled.button`
    outline: none;
    border: none;
    padding: 10px;
    color: #ffffff;
    border-radius: 8px;
    background-color: #ff3030;
    transition: all 0.2s;
    cursor: pointer;
    
    :hover{
        background-color: #252525;
    }
`
export const BtnAddOrRemove = styled.button`
    outline: none;
    border: none;
    padding: 10px;
    color: #ffffff;
    border-radius: 8px;
    background-color: ${props => props.handler ? props.colorRemove : props.colorAdd};
    transition: all 0.2s;
    cursor: pointer;
    
    :hover{
        background-color: #252525;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
`
export const ContainerImg = styled.div`
    display: flex;
    height: 50%;
    justify-items: center;
`
export const ContainerName = styled.div`
    display: flex;
    height: 15%;
`
export const ContainerButton = styled.div`
    display: flex;
    height: 20%;
`
