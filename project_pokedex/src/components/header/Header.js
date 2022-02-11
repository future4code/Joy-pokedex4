import {Container, BtnHeader} from "./styles";

export default function Header(props){
    return(
        <Container>
            <h1>Pokédex</h1>
            <BtnHeader onClick={props.navigation}>{props.title}</BtnHeader>
        </Container>
    )
}