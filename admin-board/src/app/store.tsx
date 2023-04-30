import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit";

import userProfileReducer from "./auth/authSlicer";
import rootReducer from './rootReducer'

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
  },
  middleware
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch();

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

