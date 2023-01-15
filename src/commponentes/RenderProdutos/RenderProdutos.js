import Card from "../Card/Card"
import {Container} from "./styled"



function RenderProdutos  (produtos, pesquisaNome, pesquisaPrecoMin, pesquisaPrecoMax, adicionaProduto, tela, setTelas)  {


    return (

    <Container>
        {console.log(produtos)}
    {produtos
    .filter((produto) => {
        return produto.name.toLowerCase().includes(pesquisaNome.toLowerCase())
      })
    .filter((produto) => {
        return produto.value >= pesquisaPrecoMin
      })
    .filter((produto) => {
      if (pesquisaPrecoMax){
        return produto.value <= pesquisaPrecoMax
      } else {
        return produto.value
      }
    
    })
    .map((produto) => {
        return(
    
          <div key={produto.id}>
           <Card produto={produto} adicionaProduto={adicionaProduto}/>
          </div>
        )
      })
    }
    <button onClick={()=> {setTelas(tela.telaCarrinho)}}>Ir para o carrinho</button>

    </Container>
    )
  }

  export default RenderProdutos;