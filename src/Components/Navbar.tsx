import {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {changeTheme} from "../redux/Theme/ThemeSlice";
import {theme} from "../redux/Theme/ThemeSlice";
const Navbar: FC = () => {
    const dispatch = useAppDispatch()
    const themeState = useAppSelector(theme)

    return (
        <nav className={themeState ? 'navbar__wrapper_black' : 'navbar__wrapper'}>
            <div className="navbar__container">
                <div className="navbar__logo" >Notes</div>
                <button
                    className="navbar__button"
                    onClick={() => dispatch(changeTheme())}
                >Change Theme</button>
            </div>
        </nav>
    );
};

export default Navbar;