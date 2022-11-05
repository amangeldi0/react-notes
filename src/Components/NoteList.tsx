import {FC} from 'react';
import {useAppSelector} from "../redux/hooks";
import {noteList} from "../redux/Note/NoteSlice";
import Note from "./Note";

const NoteList:FC = () => {
    const notes = useAppSelector(noteList)
    return (
        <div className='note__list'>
            <div className='note__list__container'>
                {
                    notes.map(item => {
                        return <Note props={item} />
                    })
                }
            </div>
        </div>
    );
};

export default NoteList;