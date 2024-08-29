// funções
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { addInCookie, removeInCookie, getParsedCookies } from '@/utils/jsonCookie'

// tipagens externas
import { IProduct } from '@/interfaces/IProduct'
import { RootState } from '../store'

// tipagem dos states
interface State {
    favoritesList: IProduct[]
}

// declaração dos states
const initialState: State = {
    favoritesList: getParsedCookies('favorites') || []
}

// criação do slice e reducers
const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        // adiciona um produto à lista de favoritos
        addFavorite: (state, action: PayloadAction<IProduct>) => {
            state.favoritesList = [...state.favoritesList, action.payload]
            addInCookie(action.payload, 'favorites')
            toast.success('Produto adicionado aos favoritos', {
                toastId: 1
            })
        },
        // remove um produto da lista de favoritos
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoritesList = state.favoritesList.filter((favorite) => favorite.id !== action.payload)
            removeInCookie(action.payload, 'favorites')
            toast.warning('Produto removido dos favoritos')
        },
    },
})

// export dos reducers
export const favoriteReducer = favoriteSlice.reducer

// export das actions
export const { addFavorite, removeFavorite } = favoriteSlice.actions

// export dos states
export const selectFavoritesList = (state: RootState) => state.favorites.favoritesList
