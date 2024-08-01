"use client";
import { useEffect, useRef, useState } from "react";
import styles from './main-chat.module.scss';


type webSocketDateType = { type: string, data: string, client: string };

type serverMessageType = { sentBy: string, message: string,};

let shouldSetupSocket = true;

export default function MainChat(): JSX.Element {

    const [ws, setWs] = useState<WebSocket | null>(null);
    const [serverMessage, setServerMessage] = useState<serverMessageType[]>([]);

    const messageOutputRef = useRef<null | HTMLDivElement>(null);
    const inputRef = useRef<null | HTMLInputElement>(null);

    let socket: WebSocket;

    useEffect(() => {

        console.log("useEffect");

        shouldSetupSocket && setupSocket();
        shouldSetupSocket = false;

        return () => {
        console.log("useEffectReturn");
        ws && socket.close();
        }
        

    }, []);

    const setupSocket = () => {

    socket = new WebSocket("ws://localhost:4000");


        console.log('setupSocket');
        socket.onopen = () => {
            console.log("Connected to the server");
            setWs(socket);
        };

        socket.onmessage = (event) => {
            const data: webSocketDateType = JSON.parse(event.data);
            console.log("Received a message from the server", (data.data));
            switch (data.type) {
                case "message":
                    setServerMessage((prev) =>  [ ...prev, {sentBy:data.client, message:data.data} ]);
                    break;
                default:
                    break;
            }
            
        }

        socket.onclose = () => {
            console.log("Disconnected from the server");
        }

    }


    const sendMessage = () => {
        if(ws && inputRef.current && inputRef.current.value !== ""){
            ws.send(inputRef.current.value);         
        }
        else{
            !ws && console.log("no server");

        }
    }

    return (
        <div className={`${styles.mainContainer} text-center w-1/3 mx-auto`}>
            <h1 className="text-3xl font-bold">Main Chat</h1>
            <div ref={messageOutputRef} className={`${styles.messageOutput} flex flex-col justify-end h-64 mx-auto bg-gray-400 overflow-auto inset-0 s text-2xl`}>
                {
                    serverMessage.map((item, index):JSX.Element => {
                        return <div key={index} className=" text-right">{item.sentBy + ": " + item.message}</div>
                    })
                }
            </div>
            <div className='flex justify-center '>
                <div>
                    <input ref={inputRef} className={`${styles.messageInput} h-12 text-black`} type="text" placeholder="Enter message..."/>
                </div>
                <div>
                    <button onClick={sendMessage} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 my-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">send</button>
                </div>
            </div>
        </div>
    );
}