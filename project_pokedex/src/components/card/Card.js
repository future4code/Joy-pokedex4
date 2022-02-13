import {Container, ContainerContents, ContainerInfoCard, BtnMain, BtnAddOrRemove} from "./styles";

export default function Card(props){
    return(
        <Container>
            <ContainerContents>
                <ContainerInfoCard>
                    <img alt={props.alt} src={props.img}/>
                    <p>{props.name.toUpperCase()}</p>
                    <BtnMain onClick={props.details}>Detalhes</BtnMain>                
                </ContainerInfoCard>
                
            </ContainerContents>
                <BtnAddOrRemove 
                    onClick={props.add} 
                    handler={props.handler}
                    colorRemove={"#9818D6"}
                    colorAdd={"#2cbc63"}
                >
                    {props.handler ? "Remover" : "Adicionar"}
                </BtnAddOrRemove>
        </Container>
    )
}