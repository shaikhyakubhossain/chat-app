'use client';
import { configureStore } from "@reduxjs/toolkit";
import mainMobileWindowSlice from "./features/MainMobileWindow/mainMobileWindowSlice";
import navActiveChatSlice from "./features/navActiveChat/navActiveChatSlice";
import authDetailSlice from './features/AuthDetail/authDetailSlice';
import mainLoadingSlice from "./features/MainLoading/mainLoadingSlice";

export const store = configureStore({
    reducer: {
        mainMobileWindow: mainMobileWindowSlice,
        navActiveChat: navActiveChatSlice,
        authDetail: authDetailSlice,
        mainLoading: mainLoadingSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch