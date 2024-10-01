"use client";
import { createSlice} from '@reduxjs/toolkit';

interface mainLoadingStateType {
    showLoading: boolean
}

const initialState: mainLoadingStateType = {
    showLoading: false
}

export const mainLoadingSlice = createSlice({
    name: "mainLoading",
    initialState,
    reducers: {
        setShowLoadingTrue: (state) => {
            state.showLoading = true;
        },
        setShowLoadingFalse: (state) => {
            state.showLoading = false;
        },
        toggleShowLoading: (state) => {
            state.showLoading === true ? state.showLoading = false : state.showLoading = true;
        }
    }
})

export const {setShowLoadingTrue, setShowLoadingFalse, toggleShowLoading} = mainLoadingSlice.actions;

export default mainLoadingSlice.reducer;