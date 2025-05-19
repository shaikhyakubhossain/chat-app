'use client';
import { configureStore } from "@reduxjs/toolkit";
import mainMobileWindowSlice from "./features/MainMobileWindow/mainMobileWindowSlice";
import navActiveChatSlice from "./features/NavActiveChat/navActiveChatSlice";
import authDetailSlice from './features/AuthDetail/authDetailSlice';
import mainLoadingSlice from "./features/MainLoading/mainLoadingSlice";
import triggerComponentRerenderSlice from "./features/TriggerComponentRerender/triggerComponentRerender";

export const store = configureStore({
    reducer: {
        mainMobileWindow: mainMobileWindowSlice,
        navActiveChat: navActiveChatSlice,
        authDetail: authDetailSlice,
        mainLoading: mainLoadingSlice,
        triggerComponentRerender: triggerComponentRerenderSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch