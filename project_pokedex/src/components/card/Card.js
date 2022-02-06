import {Container, ContainerInfoCard, ContainerButtons} from "./styles";

export default function Card(props){
    return(
        <Container>
            <ContainerInfoCard>
                <img alt={props.alt} src={props.img}/>
                <p>{props.name.toUpperCase()}</p>
            </ContainerInfoCard>
            <ContainerButtons>
                <button onClick={props.add}>
                    {props.handler ? "Remover" : "Adicionar"}
                </button>               
                <button onClick={props.details}>Detalhes</button>
            </ContainerButtons>
            
        </Container>
    )
}