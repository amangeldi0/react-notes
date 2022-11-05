import { configureStore} from '@reduxjs/toolkit';
import themeSlice from "./Theme/ThemeSlice";
import searchSlice from "./Search/SearchSlice";
import noteSlice from "./Note/NoteSlice"

export const store = configureStore({
  reducer: {
    themeSlice,
    searchSlice,
    noteSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

