import {
    Container, 
    ContainerContents, 
    ContainerInfoCard, 
    BtnMain, 
    BtnAddOrRemove, 
    ContainerName,
    ContainerButton,
    ContainerImg, 
    Img
} from "./styles";

export default function Card(props){
    return(
        <Container>
            <ContainerContents>
                <ContainerInfoCard>
                    <ContainerImg>
                        <Img alt={props.alt} src={props.img}/>
                    </ContainerImg>
                    <ContainerName>
                        <p>{props.name.toUpperCase()}</p>
                    </ContainerName>
                    <ContainerButton>
                        <BtnMain onClick={props.details}>Detalhes</BtnMain>           
                    </ContainerButton>
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