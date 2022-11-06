import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface NoteSliceItem {
    id:string
    title: string,
    note: string,
    date: string
}
interface NoteSliceType {
    notes: NoteSliceItem[]
}

const initialState:NoteSliceType = {
    notes: [
        {
            id: '122',
            title: 'My first note',
            note: 'something kasjfhdlkasdhf;as jsdhfkja sdlfal;;ashf ;akshdfkj sdf;lhs;f sadfjsk flhsdkjfh sf;asdfhlkj',
            date: '2016/12/19'
        },
        {
            id: '132',
            title: 'My second note',
            note: 'something',
            date: '2017/12/19'
        }
    ]
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
        removeNote(state, action:PayloadAction<NoteSliceItem>){
            state.notes = state.notes.filter(item => item.id !== action.payload.id)
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