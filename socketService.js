import { io } from "socket.io-client";

const socket = io("192.168.1.10:3000");

export default socket;
