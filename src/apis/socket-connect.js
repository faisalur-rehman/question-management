import io from "socket.io-client";

const WS_URL = "https://presenter-alarm-restapi.herokuapp.com/";
const socket = io.connect(WS_URL);

export { socket };
