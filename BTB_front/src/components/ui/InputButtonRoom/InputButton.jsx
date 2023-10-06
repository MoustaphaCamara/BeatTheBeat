/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./InputButton.scss";

import io from "socket.io-client";
import { Link, useLocation } from "react-router-dom";
const socket = io.connect("http://localhost:3001");

const Input = ({ placeholder, button, size }) => {
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idRoom = searchParams.get("room");
    const player = searchParams.get("player");

    const sendMessage = () => {
        socket.emit("send_message", { message: "hello" });
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            alert(data.message);
        });
    }, [socket]);

    return (
        <div className="input-pseudo">
            <input type="text" placeholder={placeholder} name="text" className={`input ${size}`} />
            <Link to={`/waiting_room?room=${idRoom}&playerRoom=${player}`}>
                <button onClick={sendMessage}>{button}</button>
            </Link>
        </div>
    );
};

export default Input;