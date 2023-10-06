import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./RoomPageChat.scss";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const RoomPageChat = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const room = searchParams.get("room");
	const author = searchParams.get("author");

	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);

	const sendMessage = async () => {
		if (message !== "") {
			const messageData = {
				room: room,
				author: author,
				message: message,
			};

			console.log("sending messageData:", messageData);
			await socket.emit("send_message", messageData);
		}
	};

	useEffect(() => {
		socket.on("receive_message", (data) => {
			setMessageList((list) => [...list, data]);
		});
	}, [socket, author]);

	console.log(messageList);

	return (
		<div>
			<div className="chat_container">
				<div className="chat_message">
					{messageList?.map((messageContent, index) => {
						return (
							<p key={index} className="chat_pseudo">
								{messageContent.author} : <span>{messageContent.message}</span>
							</p>
						);
					})}
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
