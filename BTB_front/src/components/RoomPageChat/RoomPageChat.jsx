import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./RoomPageChat.scss";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const RoomPageChat = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const room = searchParams.get("room");

	const [message, setMessage] = useState("");
	const [messageReceive, setMessageReceive] = useState("");

	const sendMessage = () => {
		socket.emit("send_message", {message : message, room : room });
	};

	useEffect(() => {
		socket.on("receive_message", (data) => {
			setMessageReceive(data.message);
		});
	}, [socket]);

	return (
		<div>
			<div className="chat_container">
				<div className="chat_message">
					<p className="chat_pseudo">
						Askralos: <span>{messageReceive}</span>{" "}
					</p>
				</div>

				<div className="chat_input">
					<div className="quizz_input">
						<input
							className="input_text"
							type="text"
							placeholder="chat"
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
						<button onClick={sendMessage}>send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomPageChat;
