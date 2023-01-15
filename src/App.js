import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './commponentes/header/Header';
import RenderProdutos from './commponentes/RenderProdutos/RenderProdutos';
import produtos from "./produtos/produtos.json";
import Card from './commponentes/Card/Card';
import Carrinho from './commponentes/Carrinho/Carrinho';
import Footer from './commponentes/Footer/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import { tela } from './Utils/Utils';

export const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
` 
export const Container = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`

function App() {
  const [pesquisaNome, setPesquisaNome] = useState("");
  const [pesquisaPrecoMin, setPesquisaPrecoMin] = useState("");
  const [pesquisaPrecoMax, setPesquisaPrecoMax] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [telas, setTelas] = useState(tela.telaInicial)
  


  useEffect( () => {

    const savedData = JSON.parse(localStorage.getItem("cart"))
    if(savedData){
      setCarrinho(savedData)
    } else {
      setCarrinho([])
    }
      
      }, []
  )


  useEffect(() => {
    if(carrinho.length !== 0){
      localStorage.setItem("cart", JSON.stringify(carrinho));
    }
    }, [carrinho])
  
  const exibirProdutos = () => {

    return (
    <Container>
    {produtos
    .filter((produtos) => {
        return produtos.name.toLowerCase().includes(pesquisaNome.toLowerCase())
      })
    .filter((produtos) => {
        return produtos.value >= pesquisaPrecoMin
      })
    .filter((produtos) => {
      if (pesquisaPrecoMax){
        return produtos.value <= pesquisaPrecoMax
      } else {
        return produtos.value
      }
    
    })
    .map((produtos) => {
        return(
    
          <div key={produtos.id}>
           <Card produtos={produtos} adicionaProduto={adicionaProduto}/>
          </div>
        )
      })
    }
    <button onClick={()=> {setTelas(tela.telaCarrinho)}}>Ir para o carrinho</button>
    </Container>
    )
  }

  const carro = () => {
    return(
      <div>
        <Container>  
          <Carrinho carrinho={carrinho}  remover={removeProduto} finalizarCompra={finalizarCompra} setTelas={setTelas}/>
        </Container>
      </div>
    )
  }

  const telaFinal = () => {
    return (
    <div>
      <h1>Tela Final!</h1>

      <button onClick={()=> {setTelas(tela.telaInicial)}}>Ir para o início</button>
      
    </div>
    )
  }
  


  const adicionaProduto = (produto, qntCarrinho) => {
    const item = {
      id: produto.id,
      name: produto.name,
      preco: produto.value,
      totalItem: qntCarrinho * produto.value,
      quantidade: qntCarrinho

    }
    setCarrinho([...carrinho, item])
  }

  const removeProduto = (itemDeletado) => {

    const novoCarrinho = carrinho.filter(
      (item) => item.id !== itemDeletado.id);

    setCarrinho(novoCarrinho);
  }

  const finalizarCompra = () => {
    setCarrinho([]);
    localStorage.clear();
    setTelas(tela.telaFinal)
  }

  const carregarTela = () => {
    switch (telas) {
      case tela.telaInicial: 
        return  exibirProdutos()

        
      
      case tela.telaCarrinho:
        return carro()

      case tela.telaFinal:
        return telaFinal()
    
      default:
        return exibirProdutos()
    }
  }
  return (
    

      <div>
        <Header setPesquisaNome={setPesquisaNome} setPesquisaPrecoMin={setPesquisaPrecoMin} setPesquisaPrecoMax={setPesquisaPrecoMax}/>
            
        {carregarTela()}
        <Footer/>

      </div>
    
  );
}

export default App;
