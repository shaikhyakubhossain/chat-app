const localHost = "http://localhost:4000";
const liveHost = "https://chat-app-backend-83vn.onrender.com";

export const getUrl = () => {
    console.log("window.location.hostname", window.location.hostname);
        if (window.location.hostname === "localhost") {
            return localHost;
        } else {
            return liveHost;
        }
}