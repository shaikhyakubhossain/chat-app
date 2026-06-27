"use client";
import { createSlice } from "@reduxjs/toolkit";

interface navActiveChatStateType {
    title: string | null,
    status: string | null,
    type: string | null
}

const initialState: navActiveChatStateType = {
    title: null,
    status: null,
    type: null,
}

export const navActiveChatSlice = createSlice({
    name: "navActiveChat",
    initialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        setType(state, action) {
            state.type = action.payload
        }
    }
});

export const {setTitle, setStatus, setType} = navActiveChatSlice.actions;

export default navActiveChatSlice.reducer;