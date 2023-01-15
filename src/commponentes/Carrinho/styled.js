import styled from "styled-components";

export const Main = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;





`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: flex-end;
  align-items: start;
  margin: 30px 25px;
  padding: 10px;
  width: 14vw;
  height: 20vh;
  border: 1px solid black;

`;


export const ProdutoNome = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-weight: normal;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0px;

`;

export const ProdutoP = styled.p`
  display: flex;
  justify-content: left;
  font-family: sans-serif;
  font-size: smaller;
  font-weight: normal;
  text-align: left;
  margin: 2px
  
`;

export const Botao = styled.button`

  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  background-color: #530470;
  color: white;
  text-weight: bold;  
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid black;
  cursor: pointer;

`;
export const BotaoNum = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
margin: 10px;
width: 2,5vw;
height: 4vh;
background: #ffffff;
border-radius: 8px;
border: 1px solid black;
cursor: pointer;
`

export const Numbers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center
` 

export const Imagem = styled.img`

width: 8vw;
height: 20vh;
border: 1px solid black
`

export const Empty = styled.h2`
display: flex;
flex-direction: column;
justify-items: center;
text-align: center;
align-items: center;
`
export const H2 = styled.h2`
display: flex;
flex-direction: column;
justify-items: center;
text-align: center;
align-items: center;
`