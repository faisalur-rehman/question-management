import io from "socket.io-client";

const WS_URL = "http://localhost:8000";
const socket = io.connect(WS_URL);

export { socket };
