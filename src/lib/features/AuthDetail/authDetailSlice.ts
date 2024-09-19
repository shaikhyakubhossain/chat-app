"use client";
import { createSlice } from "@reduxjs/toolkit";


interface authDetailStateType {
    username: string | null,
    token: string | null
}

const initialState: authDetailStateType = {
    username: null,
    token: null
}

const authDetailSlice = createSlice({
    name: "authDetail",
    initialState,
    reducers: {
        setDetail: (state, action) => {
            state.username = action.payload.username
            state.token = action.payload.token
        }
    }
})

export const { setDetail } = authDetailSlice.actions;

export default authDetailSlice.reducer