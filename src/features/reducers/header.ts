// funções
import { createSlice } from '@reduxjs/toolkit'

// tipagens
import { RootState } from '../store'
import { PayloadAction } from '@reduxjs/toolkit'

// tipagem dos states
interface State {
    searchPosition: boolean
    verticalNav: boolean
}

// declaracao inicial dos states
const initialState: State = {
    searchPosition: false,
    verticalNav: false
}

// criacao do slice
const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setSearchPosition: (state, action: PayloadAction<boolean>) => {
            state.searchPosition = action.payload
        },
        setVerticalNav: (state, action: PayloadAction<boolean>) => {
            state.verticalNav = action.payload
        }
    },
})

// export do reducer
export const headerReducer = headerSlice.reducer

// export das actions
export const { setSearchPosition, setVerticalNav } = headerSlice.actions

// export dos states
export const selectSearchPosition = (state: RootState) => state.header.searchPosition
export const selectVerticalNav = (state: RootState) => state.header.verticalNav

