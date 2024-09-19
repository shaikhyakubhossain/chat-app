'use client';
import { configureStore } from "@reduxjs/toolkit";
import mainMobileWindowSlice from "./features/MainMobileWindow/mainMobileWindowSlice";
import navActiveChatSlice from "./features/navActiveChat/navActiveChatSlice";
import authDetailSlice from './features/AuthDetail/authDetailSlice';

export const store = configureStore({
    reducer: {
        mainMobileWindow: mainMobileWindowSlice,
        navActiveChat: navActiveChatSlice,
        authDetail: authDetailSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch