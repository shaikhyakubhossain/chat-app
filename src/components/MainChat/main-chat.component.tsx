"use client";
import { useEffect, useRef, useState } from "react";
import styles from './main-chat.module.scss';
import ChatBox from "../ChatBox/chat-box.component";


type webSocketDateType = { type: string, data: string, client: string, clientsOnline?: string };

type serverMessageType = { sentBy: string, message: string,};

let shouldSetupSocket = true;

export default function MainChat(): JSX.Element {

    const [ws, setWs] = useState<WebSocket | null>(null);
    const [serverMessage, setServerMessage] = useState<serverMessageType[]>([]);
    const [clientsOnline, setClientsOnline] = useState<string | undefined>("");

    // const messageOutputRef = useRef<null | HTMLDivElement>(null);
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

    socket = new WebSocket("wss://chat-app-backend-83vn.onrender.com/");
    // socket = new WebSocket("ws://localhost:4000");

        console.log('setupSocket');
        socket.onopen = () => {
            console.log("Connected to the server");
            setWs(socket);
        };

        socket.onmessage = (event) => {
            const data: webSocketDateType = JSON.parse(event.data);
            console.log("Received", (data));
            if (data.type === "message") {
                console.log("message", data);
                setServerMessage((prev) => [...prev , { sentBy: data.client, message: data.data }]);
            }
            else if (data.type === "clientsOnline") {
                
                setClientsOnline(data.clientsOnline);
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
        <div className={`${styles.mainContainer} text-center mx-auto`}>
            <h1 className="text-3xl font-bold">Main Chat</h1>
            {ws ? <ChatBox serverMessage={serverMessage} /> : <div>Connecting...</div>}
            <div className='flex justify-center '>
                <div>
                    <input ref={inputRef} className={`${styles.messageInput} h-12 text-black`} type="text" placeholder="Enter message..."/>
                </div>
                <div>
                    <button onClick={sendMessage} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 my-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">send</button>
                </div>
                <div>
                    <div>Clients Online: {clientsOnline}</div>
                </div>
            </div>
        </div>
    );
}