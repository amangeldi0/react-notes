import {FC} from 'react';
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {theme} from "../redux/Theme/ThemeSlice";

const NoteInput:FC = () => {
    const themeState = useAppSelector(theme)
    return (
        <>
            <div className={themeState ? 'note__input__container__black' : 'note__input__container'}>
                <div className="note__write">
                    <input type="text" placeholder='Write title...'/>
                    <textarea placeholder='Write note'/>
                </div>
                <div className="note__save">
                    <button className="save">save</button>
                </div>

            </div>
        </>
    );
};

export default NoteInput;