import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../../storege/store";

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
        getCharacter: (state, action: PayloadAction<any>) => {
            state.listOfCharacterOnPage = action.payload
        },
    },
})

export const {cleanCharacter, getCharacter} = RickMortyPaginationSlice.actions

export const getCharacterAsync = (page: number) => (dispatch: any) => {
    axios.get(`character/?page=${page}`).then(data => {
        dispatch(getCharacter(data.data))
    }).catch((err) => console.log("Don`t have this page", err));
}

export const selectCharList = (state: RootState) => state.rickMorty.listOfCharacterOnPage

export default RickMortyPaginationSlice.reducer