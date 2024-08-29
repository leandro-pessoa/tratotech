// funções
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { addInCookie, getParsedCookies, removeInCookie } from '@/utils/jsonCookie'
import { removeCookie } from '@/utils/cookies'

// tipagens externas
import { ICartProduct } from '@/interfaces/ICartProduct'
import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// tipagem dos states
interface State {
    products: ICartProduct[]
}

// declaração dos states
const initialState: State = {
    products: getParsedCookies('cart') || []
}

// criação do slice e reducers
const cartSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // adiciona um item, que é definido pelo payload, ao carrinho
        addProduct: (state, action: PayloadAction<ICartProduct>) => {
            state.products = [...state.products, action.payload]

            // adicao do produto aos cookies
            addInCookie(action.payload, 'cart')

            // feedback
            toast.success('Item adicionado ao carrinho', {
                toastId: 0,
            })
        },
        // remove um item do carrinho baseado no id
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (item) => item.product.id !== action.payload
            )
            // remocao do produto dos cookies
            removeInCookie(action.payload, 'cart')
            // feedback
            toast.warning('Produto removido do carrinho')
        },
        // adiciona a quantidade em 1 de um item
        addQuantity: (state, action: PayloadAction<string>) => {
            state.products.map((item) => {
                if (item.product.id === action.payload) {
                    item.quantity += 1
                }
                return item
            })
        },
        // remove a quantidade em 1 e, quando chega em 0, o item é removido do carrinho
        removeQuantity: (state, action: PayloadAction<string>) => {
            state.products.map((item) => {
                if (item.product.id === action.payload) {
                    if (item.quantity === 1) {
                        state.products = state.products.filter(
                            (item) => item.product.id !== action.payload
                        )
                        // remocao do produto dos cookies
                        removeInCookie(action.payload, 'cart')
                        
                        // feedback
                        toast.warning('Produto removido do carrinho')
                    } else {
                        item.quantity -= 1
                    }
                }
                return item
            })
        },
        // remove todos os itens do carrinho
        clearCart: (state) => {
            state.products = []
            removeCookie('cart')
        }
    },
})

// export dos reducers
export const cartReducer = cartSlice.reducer

// export das actions
export const { addProduct, removeProduct, addQuantity, removeQuantity, clearCart } =
    cartSlice.actions

// export dos states
export const selectCartProducts = (state: RootState) => state.cart.products
