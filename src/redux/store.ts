import { configureStore} from '@reduxjs/toolkit';
import themeSlice from "./Theme/ThemeSlice";
import searchSlice from "./Search/SearchSlice";

export const store = configureStore({
  reducer: {
    themeSlice,
    searchSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

