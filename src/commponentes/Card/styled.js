import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #B409F0;
  border-radius: 5px;
  box-shadow: 1px 1px black;
  margin: 30px 25px;
  padding: 10px;
  width: 14vw;
  height: 40vh;
  backgorund-color: grey;


`;


export const ProdutoNome = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 0px;

`;

export const ProdutoP = styled.p`
  display: flex;
  justify-content: left;
  font-family: sans-serif;
  font-size: 1,5em;
  font-weight: 600;
  text-align: left;
  
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

width: 7vw;
height: 15vh;
`