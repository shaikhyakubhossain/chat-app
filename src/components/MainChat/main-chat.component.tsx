"use client";
import { useEffect, useRef, useState } from "react";
import styles from './main-chat.module.scss';
import ChatBox from "../ChatBox/chat-box.component";
import MessageInput from "../MessageInput/message-input.component";


type webSocketDateType = { type: string, data: string, client: string, clientsOnline?: string };

type serverMessageType = { sentBy: string, message: string,};

let shouldSetupSocket = true;

export default function MainChat(): JSX.Element {

    const [ws, setWs] = useState<WebSocket | null>(null);
    const [serverMessage, setServerMessage] = useState<serverMessageType[]>([]);
    const [clientsOnline, setClientsOnline] = useState<string | undefined>("");

    // const messageOutputRef = useRef<null | HTMLDivElement>(null);
    const containerOfInputRef = useRef<null | HTMLDivElement>(null);

    let socket: WebSocket;

    useEffect(() => {

        // console.log("useEffect");

        shouldSetupSocket && setupSocket();
        shouldSetupSocket = false;

        return () => {
        // console.log("useEffectReturn");
        ws && socket.close();
        }
        

    }, []);

    const setupSocket = () => {

    socket = new WebSocket("wss://chat-app-backend-83vn.onrender.com/");
    // socket = new WebSocket("ws://localhost:4000");

        // console.log('setupSocket');
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
        const inputValue = (containerOfInputRef.current?.children[0].children[0] as HTMLInputElement).value;
        console.log(inputValue)
        if(ws && containerOfInputRef.current?.children[0].children[0] && inputValue !== ""){
            ws.send(inputValue);
        }
        else{
            !ws && console.log("no server");

        }
    }

    return (
        <div className={`${styles.mainContainer} text-center mx-auto mt-16 absolute left-0 right-0 bottom-0`}>
            {ws ? <ChatBox serverMessage={serverMessage} /> : <div>Connecting...</div>}
            <div className='flex justify-center '>
                <div ref={containerOfInputRef} className="w-3/4 mx-auto">
                    <MessageInput sendMessageFunction={sendMessage}/>
                </div>
                <div>
                    {clientsOnline && <div>Clients Online: {clientsOnline}</div>}
                </div>
            </div>
        </div>
    );
}