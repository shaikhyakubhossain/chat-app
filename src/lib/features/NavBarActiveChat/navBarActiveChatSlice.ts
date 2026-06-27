"use client";
import { createSlice } from "@reduxjs/toolkit";

interface navBarActiveChatStateType {
    title: string | null,
    status: string | null,
    type: string | null
}

const initialState: navBarActiveChatStateType = {
    title: null,
    status: null,
    type: null,
}

export const navBarActiveChatSlice = createSlice({
    name: "navBarActiveChat",
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

export const {setTitle, setStatus, setType} = navBarActiveChatSlice.actions;

export default navBarActiveChatSlice.reducer;