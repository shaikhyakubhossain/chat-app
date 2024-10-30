const localHost = "http://localhost:4000";
const liveHost = "https://chat-app-backend-83vn.onrender.com";

export const getUrl = () => {
        if (window.location.hostname === "localhost") {
            return localHost;
        } else {
            return liveHost;
        }
}