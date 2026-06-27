import { useState, useEffect } from "react";

type webSocketDateType = {
  type: string;
  data: string;
  client?: string;
  clientsOnline?: string;
};

type serverMessageType = { sentBy: string | undefined; message: string };

const useWebSocket = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messagesList, setMessagesList] = useState<serverMessageType[]>([]);
  const [clientsOnline, setClientsOnline] = useState<string | undefined>("");

  let socket: WebSocket;

  useEffect(() => {
    !socket && setupSocket();
    return () => {
      if(socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    }
  }, []);

  const setupSocket = () => {
    const authDetail = localStorage.getItem("authDetail");
    socket = new WebSocket("wss://chat-app-backend-83vn.onrender.com/");
    // socket = new WebSocket("ws://localhost:4000");
    socket.onopen = () => {
      console.log("connected to server");
      setWs(socket);
      if (authDetail){
        socket.send(JSON.stringify({ type: "auth", data: authDetail }));
      }
    };

    socket.onmessage = (event) => {
      let data: webSocketDateType = JSON.parse(event.data);
      if (data.type === "message") {
        setMessagesList((prev) => [
          ...prev,
          { sentBy: data.client, message: data.data },
        ]);
      } else if (data.type === "clientsOnline") {
        setClientsOnline(data.clientsOnline);
      }
    };

    socket.onclose = () => {
      console.log("Disconnected from the server");
    };
  }

  const sendMessage = (message: string, messageType: string) => {
    const messageData = {
      type: messageType,
      data: message,
    };
    socket.send(JSON.stringify(messageData));
  };

  const clearMessagesList = (): void => {
    setMessagesList([]);
  };

  const modifyMessageList = (data: serverMessageType[]): void => {
    setMessagesList(data);
  };

  return {
    ws,
    messagesList,
    clientsOnline,
    sendMessage,
    clearMessagesList,
    modifyMessageList
  };
};

export default useWebSocket;
