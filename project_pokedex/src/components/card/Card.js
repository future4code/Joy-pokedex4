import {Container, ContainerInfoCard, ContainerButtons, BtnMain} from "./styles";

export default function Card(props){
    return(
        <Container>
            <ContainerInfoCard>
                <img alt={props.alt} src={props.img}/>
                <p>{props.name.toUpperCase()}</p>
            </ContainerInfoCard>
            <ContainerButtons>
                <BtnMain>Adicionar</BtnMain>
                <BtnMain>Detalhes</BtnMain>
            </ContainerButtons>
            
        </Container>
    )
}