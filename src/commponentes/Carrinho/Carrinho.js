import { somaCarrinho } from "../../Functions/functions";
import { tela } from "../../Utils/Utils";
import { CardsContainer, ProdutoNome, ProdutoP, Main, Imagem, Empty, H2} from "./styled";

function Carrinho ({carrinho, remover, finalizarCompra, setTelas}) {

  function carrinhoCheio() {
    return(
      <div>
        {carrinho.map(
          (produto)=>{
            return(
                  <Main key={produto.id}>
                    <Imagem src={produto.url} alt={produto.name}/>
                    <CardsContainer key={produto.id}>
                      <ProdutoNome>{produto.name}</ProdutoNome>
                      <ProdutoP>Id: {produto.id}</ProdutoP>
                      <ProdutoP>Preço un/kg: {produto.preco}</ProdutoP>
                      <ProdutoP>Quantidade: {produto.quantidade}</ProdutoP>
                      <ProdutoP>total: {produto.totalItem}</ProdutoP>
                      <button onClick={() => remover (produto)}>Remover produto</button>
                    </CardsContainer>
                  </Main>
                )
              })}

        <p>total: {somaCarrinho(carrinho)}</p>
        <button onClick={()=> {finalizarCompra()}}>Finalizar compra</button>
      </div>
          )
  }

  function carrinhoVazio() {
    return(
      <>
       <Empty>Carrinho Vazio!</Empty>
      <button onClick={()=> {setTelas(tela.telaInicial)}}>Ir para o Início</button>
      </>
    )
  }
   return (
    <>
    <H2>Carrinho</H2>

    {carrinho.length > 0 ? 
        carrinhoCheio() : carrinhoVazio()
        }
    </>
    )
  }
export default Carrinho;