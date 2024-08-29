
// realiza a formatação do preço para o Real
const formattedPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price)
}

export default formattedPrice