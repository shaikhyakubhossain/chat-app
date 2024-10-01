"use client";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setShowLoadingTrue, setShowLoadingFalse } from "@/lib/features/MainLoading/mainLoadingSlice";

export default function Loading(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowLoadingTrue());

        return () => {
            dispatch(setShowLoadingFalse());
        }
    },[])
}