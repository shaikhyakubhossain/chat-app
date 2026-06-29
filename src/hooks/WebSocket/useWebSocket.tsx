import { useState, useEffect, useCallback } from "react";

type webSocketDateType = {
  type: string;
  data: string;
  client?: string;
  clientsOnline?: string;
};

type serverMessageType = { sentBy: string | undefined; message: string };

const useWebSocket = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [messagesList, setMessagesList] = useState<serverMessageType[]>([]);
  const [clientsOnline, setClientsOnline] = useState<string | undefined>("");

  const sendData = useCallback((socket: WebSocket, dataType: string, data: string) => {
    const messageData = {
      type: dataType,
      data: data,
    };
    socket.send(JSON.stringify(messageData));
  }, []);

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
    setLoading(true);
    setError(null);
    const authDetail = localStorage.getItem("authDetail");
    socket = new WebSocket("wss://chat-app-backend-83vn.onrender.com/");
    // socket = new WebSocket("ws://localhost:4000");
    socket.onopen = () => {
      console.log("connected to server");
      setWs(socket);
      setLoading(false);
      if (authDetail){
        sendData(socket, "auth", authDetail);
      }
    };

     socket.onerror = (event) => {
    console.error("WebSocket error", event);
    setError("Failed to connect to server");
    setLoading(false);
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
      setLoading(false);
    };
  }

  const sendMessage = (message: string, messageType: string) => {
    sendData(socket, messageType, message);
  };

  const clearMessagesList = (): void => {
    setMessagesList([]);
  };

  const modifyMessageList = (data: serverMessageType[]): void => {
    setMessagesList(data);
  };

  return {
    loading,
    error,
    ws,
    messagesList,
    clientsOnline,
    sendMessage,
    clearMessagesList,
    modifyMessageList
  };
};

export default useWebSocket;
