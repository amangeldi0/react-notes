import {FC} from 'react';
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {theme} from "../redux/Theme/ThemeSlice";
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
                    <div className="note__edit"></div>
                    <div className="note__delete"></div>
                </div>
            </div>
        </div>
    );
};

export default Note;