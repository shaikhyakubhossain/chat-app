"use client";
import styles from "./user-auth.module.scss";
import { useEffect, useState, useRef } from "react";
import AuthInput from "../AuthInput/auth-input.component";
import Btn from "../Btn/btn.component";
import Toast from "../Toast/toast.component";
import { getUrl } from "@/utils/urls";

import { useDispatch } from "react-redux";
import { setDetail } from "@/lib/features/AuthDetail/authDetailSlice";
import { setShowLoadingTrue, setShowLoadingFalse } from "@/lib/features/MainLoading/mainLoadingSlice";

type dataToSendType = {
  username: string;
  password: string;
};

export default function UserAuth(): JSX.Element {

  const dispatch = useDispatch();

  const [authType, setAuthType] = useState<null | string>("login");
  const [toast, setToast] = useState<boolean>(false);
  const serverMessageRef = useRef<string | null>(null);

  const handleLoginOrSignUp = (dataToSend: dataToSendType) => {
    dispatch(setShowLoadingTrue());
      fetch(`${getUrl()}/${authType}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: dataToSend.username,
          password: dataToSend.password,
        }),
      }).then((res) => {
        res.json().then((data) => {
          dispatch(setShowLoadingFalse());
          if(!data.error){
            dispatch(setDetail(data))
            localStorage.setItem("authDetail", JSON.stringify(data));
          }
          else{
            serverMessageRef.current = data.error;
            setToast(true);
          }
        });
      })
      .catch((err) => {
        // console.log("err", err);
        dispatch(setShowLoadingFalse());
      });
  };

  useEffect(() => {
    let authDetail;
    if(localStorage.getItem("authDetail") !== null){
      authDetail = JSON.parse(localStorage.getItem("authDetail")!);
      dispatch(setDetail(authDetail));
    }
  },[])

  return (
    <div className={`${styles.mainContainer} w-3/4 m-auto`}>
    <Toast show={toast} message={serverMessageRef.current} hide={() => setToast(false)} />
      <div className="font-bold text-5xl text-center mb-4">
        Welcome to Chat App!
      </div>
      <div className="flex flex-wrap justify-center">
        <div>
          <Btn
            customTW="bg-green-500 my-3 mx-2"
            onClick={() => setAuthType("login")}
          >
            login
          </Btn>
        </div>
        <div>
          <Btn
            customTW="bg-green-500 my-3 mx-2"
            onClick={() => setAuthType("register")}
          >
            Create Account
          </Btn>
        </div>
      </div>
      {<AuthInput type={authType} submit={handleLoginOrSignUp}/>}
    </div>
  );
}
