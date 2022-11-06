import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export interface NoteSliceItem {
    id:string
    title: string,
    note: string,
    date: string
}
interface NoteSliceType {
    notes: NoteSliceItem[]
}

const initialState:NoteSliceType = {
    notes: []
}


const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote(state, action:PayloadAction<NoteSliceItem>){
            state.notes.push({
                ...action.payload
            })
        },
        removeNote(state, action:PayloadAction<string>){
            state.notes = state.notes.filter(item => item.id !== action.payload)
        },
        editNote(state, action:PayloadAction<NoteSliceItem>){
            state.notes = state.notes.map(item => {
                if (item.id === action.payload.id){
                    item.title = action.payload.title
                    item.note = action.payload.note
                }
                return item
            })
        }
    }
})


const {reducer, actions} = noteSlice
export const {addNote, removeNote, editNote} = actions
export const noteList = (state:RootState) => state.noteSlice.notes
export default reducer