import { configureStore } from '@reduxjs/toolkit'
import RickMortyReducer from '../features/rm/RickMortyPaginationSlice'

export const store = configureStore({
    reducer: {
        rickMorty: RickMortyReducer,
    },
})

export type RickMortyListState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch