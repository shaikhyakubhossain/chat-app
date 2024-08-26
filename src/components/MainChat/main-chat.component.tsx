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

    const containerOfMessageOutputRef = useRef<null | HTMLDivElement>(null);
    const containerOfInputRef = useRef<null | HTMLDivElement>(null);

    let socket: WebSocket;

    useEffect(() => {

        document.addEventListener("keyup", handleKeydown, true);
        // console.log("useEffect for WS");

        shouldSetupSocket && setupSocket();
        shouldSetupSocket = false;

        return () => {
        // console.log("useEffectReturn");
        document.removeEventListener("keyup", handleKeydown, true);
        // console.log("unmounting useEffect for WS");
        ws && socket.close();
        }
        

    }, [ws]);

    useEffect(() => {

        handleScrollToBottom();

    }, [serverMessage]);

    const handleKeydown = (event: KeyboardEvent) => {
        if(event.key === "Enter"){
            sendMessage();
        }
    }

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
            // console.log("Received", (data));
            if (data.type === "message") {
                // console.log("message", data);
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
        if((containerOfInputRef.current?.children[1].children[0] as HTMLInputElement).value.length <= 250){
            const inputValue = (containerOfInputRef.current?.children[1].children[0] as HTMLInputElement);
            // console.log(inputValue.value)
            if(ws && containerOfInputRef.current?.children[1].children[0] && inputValue.value !== ""){
                ws.send(inputValue.value);
                inputValue.value = "";
                // console.log(inputValue.value);
            }
            else{
                !ws && console.log("no server");
            }
        }
        else{
            (containerOfInputRef.current?.children[0] as HTMLDivElement).style.display = "block";
            setTimeout(() => {
                (containerOfInputRef.current?.children[0] as HTMLDivElement).style.display = "none";
            }, 2000)
            console.log("message too long");
        }
        
    }

    const handleScrollToBottom = () => {
        if(containerOfMessageOutputRef.current?.children[0]){

            containerOfMessageOutputRef.current.children[0].scrollTop = containerOfMessageOutputRef.current?.children[0].scrollHeight;
        
        }
    }

    return (
        <div className={`${styles.mainContainer} text-center mx-auto`} ref={containerOfMessageOutputRef}>
            {ws ? <ChatBox serverMessage={serverMessage} /> : <div className="mb-auto bg-lime-600 text-white rounded p-2">Connecting to the server...</div>}
            <div className='flex justify-center '>
                <div ref={containerOfInputRef} className="w-3/4 mx-auto">
                    <div className={`${styles.messageTooLongError} mb-auto bg-red-500 text-white rounded p-2`}>max 250 char, Message too long</div>
                    <MessageInput sendMessageFunction={sendMessage}/>
                </div>
                <div>
                    {clientsOnline && <div className="bg-slate-500 text-white rounded p-2">Clients Online: {clientsOnline}</div>}
                </div>
            </div>
        </div>
    );
}