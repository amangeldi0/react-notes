import {FC, useEffect} from 'react';
import {useAppSelector} from "../redux/hooks";
import {noteList} from "../redux/Note/NoteSlice";
import Note from "./Note";
import NoteInput from "./NoteInput";
import {isEditableInputOrTextArea} from "@testing-library/user-event/utils/edit/isEditable";
import {search} from "../redux/Search/SearchSlice";

const NoteList:FC = () => {
    const notes = useAppSelector(noteList)
    const filter = useAppSelector(search)
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
    return (
        <div className='note__list'>
            <div className='note__list__container'>
                {
                    notes
                        .filter(item =>
                            item.title.replace(" ", "").toLowerCase().includes(filter.toLowerCase()))
                        .map(item => {
                        return <Note props={item} key={item.id} />
                    })
                }
                <NoteInput />
            </div>
        </div>
    );
};

export default NoteList;