import {Container, BtnHeader} from "./styles";

export default function Header(props){
    return(
        <Container>
            {props.logo}
            <BtnHeader onClick={props.navigation}>{props.title}</BtnHeader>
        </Container>
    )
}