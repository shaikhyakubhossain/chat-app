"use client";
import { createSlice} from '@reduxjs/toolkit';

interface mainMobileWindowStateType {
    isOpen: boolean
}

const initialState: mainMobileWindowStateType = {
    isOpen: false
}

export const mainMobileWindowSlice = createSlice({
    name: "mainMobileWindow",
    initialState,
    reducers: {
        setTrue: (state) => {
            state.isOpen = true;
        },
        setFalse: (state) => {
            state.isOpen = false;
        },
        toggle: (state) => {
            state.isOpen === true ? state.isOpen = false : state.isOpen = true;
        }
    }
})

export const {setTrue, setFalse, toggle} = mainMobileWindowSlice.actions;

export default mainMobileWindowSlice.reducer;