"use client";
import { useEffect, useRef } from "react";
import styles from './main-chat.module.scss';
import ChatBox from "../ChatBox/chat-box.component";
import MessageInput from "../MessageInput/message-input.component";
import useWebSocket from "@/hooks/WebSocket/useWebSocket";
import { getUrl } from "@/utils/urls";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function MainChat(): JSX.Element {

    const { title } = useSelector((state: RootState) => state.navActiveChat);
    const { token } = useSelector((state: RootState) => state.authDetail);
    
    const { messagesList, clientsOnline, ws, clearMessagesList, modifyMessageList } = useWebSocket();

    const containerOfMessageOutputRef = useRef<null | HTMLDivElement>(null);
    const containerOfInputRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("keyup", handleKeydown, true);
        return () => {
            document.removeEventListener("keyup", handleKeydown, true);
        }
    }, [ws, title]);

    useEffect(() => {
        handleScrollToBottom();
        console.log(messagesList);
    }, [messagesList]);

    useEffect(() => {
        clearMessagesList();
        if(title !== "Public group chat"){
            fetchPrivateMessages();
        }
    }, [title]);

    const fetchPrivateMessages = () => {
        const data = fetch(`${getUrl()}/get-messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                friendName: title
            })
        }).then(res => res.json()).then(data => {
            console.log("fetched new");
            modifyMessageList(data.data);
        })
    }

    const handleKeydown = (event: KeyboardEvent) => {
        if(event.key === "Enter"){
            sendMessage();
        }
    }

    const sendMessage = () => {
        if((containerOfInputRef.current?.children[1].children[0] as HTMLInputElement).value.length <= 150){
            const inputValue = (containerOfInputRef.current?.children[1].children[0] as HTMLInputElement);
            // console.log(inputValue.value)
            if(ws && containerOfInputRef.current?.children[1].children[0] && inputValue.value !== ""){
                ws.send(JSON.stringify({message: inputValue.value, to: title, token}));
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
        if(containerOfMessageOutputRef.current?.children[1]){
            containerOfMessageOutputRef.current.children[1].scrollTop = containerOfMessageOutputRef.current?.children[1].scrollHeight;
        }
    }

    return (
        <div className={`${styles.mainContainer} mx-auto`} ref={containerOfMessageOutputRef}>
            <div>
                    {title === "Public group chat" && clientsOnline && <span className="bg-slate-500 text-white rounded p-2 mx-2">{clientsOnline} {parseInt(clientsOnline) > 1 ? "clients online" : "client online"}</span>}
            </div>
            {ws ? <ChatBox serverMessage={messagesList} /> : <div className="mb-auto bg-lime-600 text-white text-center rounded p-2">Connecting to the server...</div>}
            <div className='flex justify-center '>
                <div ref={containerOfInputRef} className="w-3/4 mx-auto">
                    <div className={`${styles.messageTooLongError} mb-auto bg-red-500 text-white rounded p-2`}>Message too long, max 150 characters</div>
                    <MessageInput sendMessageFunction={sendMessage}/>
                </div>
            </div>
        </div>
    );
}