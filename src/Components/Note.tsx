import {FC} from 'react';
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {theme} from "../redux/Theme/ThemeSlice";

import trash from '../assets/trash.svg'
import edit from '../assets/edit.svg'
import whiteEdit from '../assets/white-edit.svg'
import whiteTrash from '../assets/white-trash.svg'

interface IPropsForNote {
    props: {
        title:string;
        note:string;
        date: string;
    }

}



const Note: FC<IPropsForNote> = ({props}) => {
    const {title, note, date} = props
    const themeState = useAppSelector(theme)
    return (
        <div className={themeState ? 'note__container__black' : 'note__container'}>
            <div className="note__content">
                <div className="note__title">{title}</div>
                <div className="note__note">{note}</div>
            </div>
            <div className="note__info">
                <div className="note__date">{date}</div>
                <div className="note__buttons">
                    <div className="note__edit">
                        <img src={themeState ? whiteEdit : edit} alt="edit"/>
                    </div>
                    <div className="note__delete">
                        <img src={themeState ? whiteTrash : trash} alt="trash"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Note;