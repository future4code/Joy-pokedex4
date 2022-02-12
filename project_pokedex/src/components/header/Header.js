import {Container} from "./styles";

export default function Header(props){
    return(
        <Container>
            <h1>{props.header}</h1>
            <button onClick={props.navigation}>{props.title}</button>
        </Container>
    )
}