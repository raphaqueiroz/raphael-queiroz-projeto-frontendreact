import { useState } from "react";
import {CardsContainer, ProdutoNome, ProdutoP, Botao, BotaoNum, Numbers, Imagem } from "./styled";

function Card ({produtos, adicionaProduto}) {

  const [qntCarrinho, setQntCarrinho] = useState(1)


    function add () {
        adicionaProduto(produtos, qntCarrinho)
        setQntCarrinho(1)
        alert("Item adicionado!")

    }
    function somar (){

        setQntCarrinho(qntCarrinho + 1)
    }

    function subtrair () {
        qntCarrinho > 1 ?
        setQntCarrinho(qntCarrinho - 1) :
        setQntCarrinho(1)
    }

     return(
      
        <CardsContainer>
        <Imagem src={produtos.url} alt={produtos.name}/>
        <ProdutoNome>{produtos.name}</ProdutoNome>
        <ProdutoP>R$: {produtos.value}</ProdutoP>
        <Numbers>
          <BotaoNum onClick={somar}>+</BotaoNum>
          <ProdutoP>{qntCarrinho}</ProdutoP>
          <BotaoNum onClick={subtrair}>-</BotaoNum>
        </Numbers>

        <Botao onClick={()=>add()}>adicionar ao carrinho</Botao>
        </CardsContainer>
    
     )
}

export default Card;