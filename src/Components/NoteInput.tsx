import {FC, useState} from 'react';
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {theme} from "../redux/Theme/ThemeSlice";
import {addNote, NoteSliceItem} from "../redux/Note/NoteSlice";
import { v4 as uuidv4 } from 'uuid';

const dat = new Date()
const date = {
    day: dat.getDate().toString(),
    year: dat.getFullYear().toString(),
    month: dat.getMonth() + 1
}
const NoteInput:FC = () => {
    const [title, setTitle] = useState<string>('');
    const [note, setNote] = useState<string>('');

    const themeState = useAppSelector(theme)
    const dispatch = useAppDispatch()


    const newNote = (event: any) => {
        event.preventDefault()
        const newNoteData:NoteSliceItem = {
            id: uuidv4(),
            title,
            note,
            date: `${date.day}/${date.month}/${date.year}`
        }
        dispatch(addNote(newNoteData))
        setNote('')
        setTitle('')
    }

    return (
        <>
            <form
                className={themeState ? 'note__input__container__black' : 'note__input__container'}
                onSubmit={newNote}
            >
                <div className="note__write">
                    <input
                        required
                        type="text"
                        placeholder='Write title...'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <textarea
                        required
                        placeholder='Write note'
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                    />
                </div>
                <div className="note__save">
                    <button className="save" type='submit'>save</button>
                </div>

            </form>
        </>
    );
};

export default NoteInput;