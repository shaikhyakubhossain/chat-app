"use client";
import { createSlice } from "@reduxjs/toolkit";

type Status = "online" | "offline" | null;

interface navBarActiveChatStateType {
    title: string | null,
    status: Status,
    type: string | null
    clientsOnline: string | null
}

const initialState: navBarActiveChatStateType = {
    title: null,
    status: null,
    type: null,
    clientsOnline: null
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
        },
        setClientsOnline(state, action) {
            state.clientsOnline = action.payload
        }
    }
});

export const {setTitle, setStatus, setType, setClientsOnline} = navBarActiveChatSlice.actions;

export default navBarActiveChatSlice.reducer;