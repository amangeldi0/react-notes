import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface SearchSliceType {
    search: string
}
const initialState:SearchSliceType = {
    search: ''
}

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch(state, action:PayloadAction<string>){
            state.search = action.payload
        }
    }
})

const {reducer, actions} = SearchSlice
export const search = (state: RootState) => state.searchSlice.search

export const {changeSearch} = actions
export default reducer;