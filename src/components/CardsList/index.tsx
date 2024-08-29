// componentes
import Card from './Card'
import CartList from './CartList'
import ProductNotFound from './ProductNotFound'

// tipagens externas
import { IProduct } from '@/interfaces/IProduct'

// funções
import { useAppDispatch, useAppSelector } from '@/features/hooks'
import { useEffect } from 'react'

// states globais
import {
    clearCartResults,
    clearSearchResults,
    selectSearchResults,
    selectSearchValue,
    setCartResults,
    setSearchResults,
    selectCartResults,
} from '@/features/reducers/search'
import { selectCartProducts } from '@/features/reducers/cart'

// tipagem dos props
interface CardsListProps {
    products?: IProduct[]
    homeProducts?: IProduct[]
    cart: boolean
}

const CardsList = ({ products, homeProducts, cart }: CardsListProps) => {
    const dispatch = useAppDispatch()

    // resultados de uma pesquisa, caso tenha sido realizada
    const searchResults = useAppSelector(selectSearchResults)

    // valor do input de pesquisa (@/components/Header/Nav/Search)
    const searchValue = useAppSelector(selectSearchValue)

    // produtos do carrinho
    const cartProducts = useAppSelector(selectCartProducts)

    // resultados do carrinho
    const cartResults = useAppSelector(selectCartResults)

    useEffect(() => {
        // realiza a pesquisa dos produtos quando o input de pesquisa (@/components/Header/Nav/Search) é alterado
        if (searchValue.length >= 1) {
            dispatch(setSearchResults(products || []))
            dispatch(setCartResults(cartProducts || []))
        }
        // quando o input é totalmente apagado, o array de resultados é limpo
        else {
            dispatch(clearSearchResults())
            dispatch(clearCartResults())
        }
    }, [searchValue, dispatch, products, cartProducts])

    return (
        <section className='alternative-bg-colors center flex-col py-10'>
            {
                // quando ha um valor pesquisado e nao ha um resultado, sera exibido um feedback de nao encontrado
                // caso exista resultado, a lista de resultados sera exibida
                searchValue.length >= 1 &&
                searchResults.length === 0 &&
                cartResults.length === 0 ? (
                    <ProductNotFound />
                ) : (
                    <>
                        {
                            // exibe um texto ao realizar uma pesquisa
                            searchValue.length >= 1 &&
                                (searchResults.length >= 1 ||
                                    cartResults.length >= 1) && (
                                    <h2 className='common-text block text-lg lg:text-xl font-light mb-10'>
                                        Resultados da pesquisa:
                                    </h2>
                                )
                        }

                        <ul
                            className={`${
                                !cart && 'cards-container'
                            } grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7`}
                            id='cards-list'
                        >
                            {
                                // caso haja resultados de uma pesquisa, são renderizados os resultados
                                searchResults.length >= 1
                                    ? searchResults.map((product) => (
                                          <Card
                                              {...product}
                                              key={product.id}
                                              cart={cart}
                                          />
                                      ))
                                    : // caso não, ou são renderizados os produtos da página inicial, em que há um tratamento específico
                                    homeProducts
                                    ? homeProducts.map((product) => (
                                          <Card
                                              {...product}
                                              key={product.id}
                                              cart={cart}
                                          />
                                      ))
                                    : // ou são renderizados os produtos definidos como props
                                      products &&
                                      products.map((product) => (
                                          <Card
                                              {...product}
                                              key={product.id}
                                              cart={cart}
                                          />
                                      ))
                            }
                            {cart && <CartList />}
                        </ul>
                    </>
                )
            }
        </section>
    )
}

export default CardsList
