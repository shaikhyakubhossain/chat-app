"use client";
import { createSlice } from "@reduxjs/toolkit";

interface triggerComponentRerenderStateType {
    rerenderFriendList: boolean
}

const initialState: triggerComponentRerenderStateType = {
    rerenderFriendList: false
}

export const triggerComponentRerenderSlice = createSlice({
    name: "triggerComponentRerender",
    initialState,
    reducers: {
        toggleFriendListRerender: (state) => {
            state.rerenderFriendList = !state.rerenderFriendList
        }
    }
});

export const {toggleFriendListRerender} = triggerComponentRerenderSlice.actions;

export default triggerComponentRerenderSlice.reducer;