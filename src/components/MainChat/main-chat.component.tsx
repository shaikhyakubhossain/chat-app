"use client";
import { useEffect, useRef, useState } from "react";
import styles from './main-chat.module.scss'

export default function MainChat(): JSX.Element {

    const [ws, setWs] = useState<WebSocket | null>(null);
    const [serverMessage, setServerMessage] = useState<string[]>(["hi"]);

    const messageOutputRef = useRef<null | HTMLDivElement>(null);
    const inputRef = useRef<null | HTMLInputElement>(null);

    useEffect(() => {

        const socket = new WebSocket("ws://localhost:4000");

        socket.onopen = () => {
            console.log("Connected to the server");
            setWs(socket);
        };

        socket.onmessage = (event) => {
            console.log("Received a message from the server", event.data);
            setServerMessage((prev) =>  [ ...prev, event.data ]);
            
        }

        socket.onclose = () => {
            console.log("Disconnected from the server");
        }

        return () => {
            socket.close();
        }
        

    }, []);


    const sendMessage = () => {
        if(ws && inputRef.current && inputRef.current.value !== ""){
            ws.send(inputRef.current.value);         
        }
        else{
            !ws && console.log("no server");

        }
    }

    return (
        <div className={`${styles.mainContainer} text-center`}>
            <h1>Main Chat</h1>
            <div ref={messageOutputRef} className={`${styles.messageOutput} `}>
                {
                    serverMessage.map((item, index):JSX.Element => {
                        return <div key={index}>{item}</div>
                    })
                }
            </div>
            <div className='flex justify-center'>
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