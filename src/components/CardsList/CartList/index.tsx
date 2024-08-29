// componentes
import Card from '../Card'

// states globais
import { selectCartProducts } from '@/features/reducers/cart'
import { selectCartResults } from '@/features/reducers/search'

// funções
import { useAppSelector } from '@/features/hooks'

const CartList = () => {
    // itens do carrinho
    const cartProducts = useAppSelector(selectCartProducts)

    // resultados da pesquisa
    const cartResults = useAppSelector(selectCartResults)

    return (
        <>
            {cartResults.length >= 1
                ? cartResults.map((item) => (
                      <Card
                          {...item.product}
                          key={item.product.id}
                          cart={true}
                          quantity={item.quantity}
                      />
                  ))
                : cartProducts.map((item) => (
                      <Card
                          {...item.product}
                          key={item.product.id}
                          cart={true}
                          quantity={item.quantity}
                      />
                  ))}
        </>
    )
}

export default CartList
