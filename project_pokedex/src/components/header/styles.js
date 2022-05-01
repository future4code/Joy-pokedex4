import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    height: 15vh;
`

export const BtnHeader = styled.button`
    border: none;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    padding: 10px;
    color: #fff;
    background-color: #ff3030;

    :hover{
        background-color: #252525;
    }
`