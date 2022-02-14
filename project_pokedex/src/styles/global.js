import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  h1, p, button{
    font-family: roboto;
    color: rgba(61, 62, 62, 1);
    color: white;
  }

  ::placeholder {
  color: white;
  font-family: roboto;
  font-size: 1rem;
}
`