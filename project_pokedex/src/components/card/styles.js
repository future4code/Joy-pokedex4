import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 25px;
    margin: 1rem 0 1rem 0 ;
    background-color: #FFFFFF;  
    transition: 300ms ease-in-out;
    
    :hover{   
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        width: 90%;
        height: 90%;
    }        
`
export const ContainerButtons = styled.div`
    display: flex;
    align-self: center;
    gap: .5rem;
    margin: 1.5rem;
`
export const ContainerInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    
    :hover{
        background-color: #252525;
    }
`
