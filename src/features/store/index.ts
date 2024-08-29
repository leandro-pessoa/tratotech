// funções
import { configureStore } from '@reduxjs/toolkit'

// reducers
import { cartReducer } from '../reducers/cart'
import { favoriteReducer } from '../reducers/favorites'
import { searchReducer } from '../reducers/search'
import { headerReducer } from '../reducers/header'

// declaração da store
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoriteReducer,
        search: searchReducer,
        header: headerReducer
    },
})

// export das tipagens baseadas na store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
