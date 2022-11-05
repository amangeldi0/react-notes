import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {useAppSelector} from "../hooks";

interface ThemeInitialType {
    theme: boolean
}
const initialState: ThemeInitialType = {
    theme: false
}

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme(state){
            state.theme = !state.theme
        }
    }
})
const {reducer, actions} = ThemeSlice
export const theme = (state: RootState) => state.themeSlice.theme

export const {changeTheme} = actions
export default reducer