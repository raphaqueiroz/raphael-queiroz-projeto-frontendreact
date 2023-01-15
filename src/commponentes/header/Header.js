import styled from "styled-components"
import { Title, Frase, CampoInput, Inputs, Container } from "./style"

function Header (props) {
    

    return(
        <Container>
            <Title>Ralph Express</Title>

            <Frase>As melhores porcarias do mercado</Frase>

            <Inputs>
                <CampoInput onChange={(e)=>{props.setPesquisaNome(e.target.value)}} placeholder="O que você procura?" ></CampoInput>
                <CampoInput onChange={(e)=>{props.setPesquisaPrecoMin(e.target.value)}} placeholder="Preço mínimo?" type="number" ></CampoInput>
                <CampoInput onChange={(e)=>{props.setPesquisaPrecoMax(e.target.value)}} placeholder="Preço máximo?" type="number" ></CampoInput>
            </Inputs>
            

        </Container>
    )
}

export default Header;