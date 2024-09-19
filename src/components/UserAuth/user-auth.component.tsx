"use client";
import styles from "./user-auth.module.scss";
import { useEffect, useState } from "react";
import AuthInput from "../AuthInput/auth-input.component";
import Btn from "../Btn/btn.component";

import { useDispatch } from "react-redux";
import { setDetail } from "@/lib/features/AuthDetail/authDetailSlice";

type dataToSendType = {
  username: string;
  password: string;
};

type responseDataType = {
  error: string;
}

export default function UserAuth(): JSX.Element {

  const dispatch = useDispatch();

  const [authType, setAuthType] = useState<null | string>("login");
  const [responseData, setResponseData] = useState<responseDataType | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false)

  const handleLoginOrSignUp = (dataToSend: dataToSendType) => {
    setShowLoading(true);
      // fetch(`https://chat-app-backend-83vn.onrender.com/${authType}`, {
        fetch(`http://localhost:4000/${authType}`, {
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
          console.log(data);
          setResponseData(data);
          setShowLoading(false);
          if(!data.error){
            dispatch(setDetail(data))
            localStorage.setItem("authDetail", JSON.stringify(data));
          }
        });
      })
      .catch((err) => {
        console.log("err", err);
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
      {<AuthInput type={authType} submit={handleLoginOrSignUp} error={responseData?.error ? responseData.error : null} isLoading={showLoading} />}
    </div>
  );
}
