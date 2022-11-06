import {FC, useState} from 'react';
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {theme} from "../redux/Theme/ThemeSlice";

import trash from '../assets/trash.svg'
import edit from '../assets/edit.svg'
import whiteEdit from '../assets/white-edit.svg'
import whiteTrash from '../assets/white-trash.svg'
import {editNote, NoteSliceItem, removeNote} from "../redux/Note/NoteSlice";


interface IPropsForNote {
    props: {
        id: string;
        title:string;
        note:string;
        date: string;
    }

}



const Note: FC<IPropsForNote> = ({props}) => {
    const {id, title, note, date} = props
    const [not, setNot] = useState<boolean>(false);
    const [titles, setTitles] = useState<string>(title);
    const [notes, setNotes] = useState<string>(note);
    const dispatch = useAppDispatch()
    const themeState = useAppSelector(theme)


    const changeNote = () => {
        const editNoteVariable: NoteSliceItem = {
            id,
            title: titles,
            note: notes,
            date
        }
        dispatch(editNote(editNoteVariable))
        setNot(false)
    }
    return (
        <>
            {
                not
                    ?
                    <form
                        onSubmit={() => changeNote()}
                        className={themeState ? 'note__container__black' : 'note__container'}>
                        <div className="note__content">
                            <input
                                required
                                className="note__input"
                                value={titles}
                                onChange={(event) => setTitles(event.target.value)}
                            />
                            <textarea
                                required
                                className="note__textarea"
                                value={notes}
                                onChange={(event) => setNotes(event.target.value)}
                            />
                        </div>
                        <div className="note__info">
                            <button
                                type='submit'
                                className='save' style={{margin: '0 auto'}}>save</button>
                        </div>
                    </form>
                    :
                    <div className={themeState ? 'note__container__black' : 'note__container'}>
                        <div className="note__content">
                            <div className="note__title">{title}</div>
                            <div className="note__note">{note}</div>
                        </div>
                        <div className="note__info">
                            <div className="note__date">{date}</div>
                            <div className="note__buttons">
                                <div className="note__edit" onClick={() => setNot(true)}>
                                    <img src={themeState ? whiteEdit : edit} alt="edit"/>
                                </div>
                                <div className="note__delete" onClick={() => dispatch(removeNote(id))}>
                                    <img src={themeState ? whiteTrash : trash} alt="trash"/>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Note;