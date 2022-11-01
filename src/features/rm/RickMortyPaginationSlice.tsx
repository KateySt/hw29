import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {AppDispatch, RickMortyListState} from "../../storege/store";

interface RickMortyState {
    listOfCharacterOnPage: any
}

const initialState: RickMortyState = {
    listOfCharacterOnPage: {},
}

export const RickMortyPaginationSlice = createSlice({
    name: 'rickMorty',
    initialState,
    reducers: {
        cleanCharacter: (state) => {
            state.listOfCharacterOnPage = []
        },
        getCharacter: (state, action: PayloadAction<number>) => {
            state.listOfCharacterOnPage = action.payload
        },
    },
})

export const {cleanCharacter, getCharacter} = RickMortyPaginationSlice.actions

export const getCharacterAsync = (page: number) => (dispatch: AppDispatch) => {
    axios.get(`character/?page=${page}`).then(data => {
        dispatch(getCharacter(data.data))
    }).catch((err) => console.log("Don`t have this page", err));
}

export const selectCharList = (state: RickMortyListState) => state.rickMorty.listOfCharacterOnPage

export default RickMortyPaginationSlice.reducer