import React from 'react';
import Navbar from "../Components/Navbar";
import {useAppSelector} from "../redux/hooks";
import {theme} from "../redux/Theme/ThemeSlice";
import Search from "../Components/Search";
import Note from "../Components/NoteInput";
import NoteList from "../Components/NoteList";
const App = () => {
    const themeState = useAppSelector(theme)
    return (
        <div className='wrapper'>
            <Navbar />
            <div className={themeState ? 'wrapper__container__black' : 'wrapper__container'}>
                <Search />
                <NoteList />
            </div>
        </div>
    );
};

export default App;