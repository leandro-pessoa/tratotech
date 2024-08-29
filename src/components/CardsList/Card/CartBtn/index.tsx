// funções
import { useAppDispatch, useAppSelector } from '@/features/hooks'
import { addProduct, removeProduct } from '@/features/reducers/cart'
import { getParsedCookies } from '@/utils/jsonCookie'

// states globais
import { selectCartProducts } from '@/features/reducers/cart'

// tipagens externas
import { ICartProduct } from '@/interfaces/ICartProduct'

// ícones
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon as ShoppingCartIconSolid } from '@heroicons/react/24/solid'

// estilos
import '../styles.css'

// tipagem dos props
interface CartBtnProps {
    id: string
    name: string
    description: string
    price: number
    image: string
}

const CartBtn = ({ id, name, description, price, image }: CartBtnProps) => {
    const dispatch = useAppDispatch()

    // itens que estão no carrinho
    const cartProducts = useAppSelector(selectCartProducts)

    // retorna um array com os nomes do produtos
    const cartProductsIds = cartProducts.map((item) => item.product.id)

    // verifica se o produto já foi adicionado no carrinho, tanto no state quanto nos cookies
    const notIncludes =
        !cartProductsIds.includes(id) &&
        !getParsedCookies('cart')?.find(
            (item: { product: { id: string } }) => item.product.id === id
        )

    // produto que será adicionado ao carrinho
    const newProduct: ICartProduct = {
        product: { id, name, description, price, image },
        quantity: 1,
    }

    // adiciona um item ao carrinho caso não esteja adicionado
    // ou remove um item do carrinho caso esteja adicionado
    const addOrRemoveToCart = () => {
        if (notIncludes) {
            // dispatch da ação de adicionar ao carrinho
            dispatch(addProduct(newProduct))
        } else {
            // dispatch para remover do state global
            dispatch(removeProduct(id))
        }
    }

    return (
        <button className='favorite-cart' onClick={addOrRemoveToCart} aria-label={notIncludes ? 'Adicionar ao carrinho' : 'Remover do carrinho'}>
            {notIncludes ? (
                <ShoppingCartIcon className='icon icon--dark' />
            ) : (
                <ShoppingCartIconSolid className='icon text-tech-500 dark:text-tech-300' />
            )}
        </button>
    )
}

export default CartBtn
