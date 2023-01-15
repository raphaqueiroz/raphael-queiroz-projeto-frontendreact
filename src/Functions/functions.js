export const somaCarrinho = (carrinho) => {
    const total = carrinho.reduce((acumulador, item) => acumulador + item.totalItem, 0)

    return total
    }