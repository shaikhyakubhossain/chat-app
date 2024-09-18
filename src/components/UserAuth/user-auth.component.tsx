"use client";
import styles from "./user-auth.module.scss";
import { useState } from "react";
import AuthInput from "../AuthInput/auth-input.component";
import Btn from "../Btn/btn.component";

type dataToSendType = {
  username: string;
  password: string;
};

export default function UserAuth(): JSX.Element {

  const [authType, setAuthType] = useState<null | string>("login");
  const [data, setData] = useState<string>("");

  const handleLoginOrSignUp = (dataToSend: dataToSendType) => {
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
        console.log(res.json().then((data) => console.log(data)));
        if(res.status === 400){
          setData(res.status.toString());
        }
        else if(res.status === 200){
          setData(res.status.toString());
        }
      });
  };

  return (
    <div className={`${styles.mainContainer} w-3/4 m-auto`}>
      <div className="font-bold text-5xl text-center mb-4">
        Welcome to Chat App!
      </div>
      <div className="flex justify-center">
        <div>
          <Btn
            customTW="bg-green-500 mr-2"
            onClick={() => setAuthType("login")}
          >
            login
          </Btn>
        </div>
        <div>
          <Btn
            customTW="bg-green-500 ml-2"
            onClick={() => setAuthType("register")}
          >
            Create Account
          </Btn>
        </div>
      </div>
      {<AuthInput type={authType} submit={handleLoginOrSignUp} status={data} />}
    </div>
  );
}
