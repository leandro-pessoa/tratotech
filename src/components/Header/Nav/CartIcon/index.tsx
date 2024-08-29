// states globais
import { selectCartProducts } from '@/features/reducers/cart'
import { useMemo, useState } from 'react'

// funções
import { useAppSelector } from '@/features/hooks'

// ícones
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const CartIcon = () => {
    // states
    const [cartProductsTotal, setCartProductsTotal] = useState<number>(0)

    // produtos do carrinho
    const cartProducts = useAppSelector(selectCartProducts)

    useMemo(() => {
        // verifica se há itens no carrinho
        if (cartProducts.length >= 1) {
            // retorna um array com as quantidades
            const cartProductsQuantity = cartProducts.map(
                (item) => item.quantity
            )

            // soma todas as quantidades
            const result = cartProductsQuantity.reduce(
                (acc, current) => acc + current
            )

            // seta o state, que será utilizado para a visualização
            setCartProductsTotal(result)
        } else {
            setCartProductsTotal(0)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartProducts.length])

    return (
        <>
            <ShoppingCartIcon className='icon' />
            {cartProductsTotal >= 1 && (
                <span className='absolute -right-2 top-3 bg-tech-800 dark:bg-tech-500 rounded-full text-sm w-[20px] text-center'>
                    {cartProductsTotal}
                </span>
            )}
        </>
    )
}

export default CartIcon
