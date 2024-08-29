// funções
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import regexTest from '@/utils/regexTest'

// tipagens
import { RootState } from '../store'
import { IProduct } from '@/interfaces/IProduct'
import { ICartProduct } from '@/interfaces/ICartProduct'

// tipagem dos states
interface State {
    searchValue: string
    searchResults: IProduct[]
    cartResults: ICartProduct[]
}

// declaração dos states
const initialState: State = {
    searchValue: '',
    searchResults: [],
    cartResults: [],
}

// criação do slice
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // define o payload como o valor de pesquisa
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        // faz a filtragem do array definido no payload e atribui o resultado ao 'searchResults'
        setSearchResults: (state, action: PayloadAction<IProduct[]>) => {
            state.searchResults = action.payload.filter((product) =>
                regexTest(product.name, state.searchValue)
            )
        },
        // apaga todos os registros do array de resultados
        clearSearchResults: (state) => {
            state.searchResults = []
        },
        // realiza a busca em uma lista com itens que estao no carrinho
        setCartResults: (state, action: PayloadAction<ICartProduct[]>) => {
            state.cartResults = action.payload.filter((item) =>
                regexTest(item.product.name, state.searchValue)
            )
        },
        // apaga os resultados do carrinho
        clearCartResults: (state) => {
            state.cartResults = []
        },
    },
})

// export do reducer
export const searchReducer = searchSlice.reducer

// export das actions
export const { setSearchValue, setSearchResults, clearSearchResults, setCartResults, clearCartResults } =
    searchSlice.actions

// export dos states
export const selectSearchValue = (state: RootState) => state.search.searchValue
export const selectSearchResults = (state: RootState) =>
    state.search.searchResults
export const selectCartResults = (state: RootState) => state.search.cartResults
