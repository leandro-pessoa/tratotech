// componentes
import Banner from '@/components/Banner'
import CardsList from '@/components/CardsList'
import Subtotal from './Subtotal'
import FinishShopping from './FinishShopping'
import Empty from '@/components/Empty'

// funções
import { useAppSelector } from '@/features/hooks'

// states globais
import { selectCartProducts } from '@/features/reducers/cart'

const Cart = () => {
    // state dos produtos adicionados ao carrinho
    const cartProducts = useAppSelector(selectCartProducts)

    return (
        <>
            <Banner
                title='Carrinho'
                description='Confira os produtos que você adicionou ao carrinho.'
            />
            {cartProducts.length >= 1 ? (
                <section className='alternative-bg-colors'>
                    <div className='pb-5 cards-container'>
                        <CardsList cart={true} />
                        <Subtotal />
                        <FinishShopping />
                    </div>
                </section>
            ) : (
                <Empty
                    title='O carrinho está vazio'
                    text='Navegue pelas categorias abaixo para adicionar itens ao
                        seu carrinho:'
                />
            )}
        </>
    )
}

export default Cart
