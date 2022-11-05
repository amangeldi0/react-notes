import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeSlice from "./Theme/ThemeSlice";

export const store = configureStore({
  reducer: {
    themeSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
