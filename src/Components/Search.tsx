import {FC, useState} from 'react';
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {theme} from "../redux/Theme/ThemeSlice";
import {changeSearch} from "../redux/Search/SearchSlice";

const Search: FC = () => {
    const dispatch = useAppDispatch()
    const themeState = useAppSelector(theme)
    const [search, setSearch] = useState<string>('');
    return (
        <div className={themeState ? 'search__container__black' : 'search__container'}>
            <input
                type="text"
                placeholder='Search notes...'
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value)
                    dispatch(changeSearch(search))
                }}
            />
        </div>
    );
};

export default Search;