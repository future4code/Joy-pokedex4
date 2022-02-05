import {Container, ContainerInfoCard, ContainerButtons} from "./styles";

export default function Card(props){
    return(
        <Container>
            <ContainerInfoCard>
                <img alt={props.alt} src={props.img}/>
                <p>{props.name.toUpperCase()}</p>
            </ContainerInfoCard>
            <ContainerButtons>
                <button>Adicionar</button>
                <button>Detalhes</button>
            </ContainerButtons>
            
        </Container>
    )
}