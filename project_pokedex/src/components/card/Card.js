import {Container, ContainerInfoCard, ContainerButtons, BtnMain} from "./styles";

export default function Card(props){
    return(
        <Container>
            <ContainerInfoCard>
                <img alt={props.alt} src={props.img}/>
                <p>{props.name.toUpperCase()}</p>
            </ContainerInfoCard>
            <ContainerButtons>
                <BtnMain onClick={props.add}>
                    {props.handler ? "Remover" : "Adicionar"}
                </BtnMain>
                <BtnMain onClick={props.details}>Detalhes</BtnMain>
            </ContainerButtons>
            
        </Container>
    )
}