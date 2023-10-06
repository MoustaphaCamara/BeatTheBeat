import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../ui/InputButtonRoom/InputButton";
import "./CreateRoom.scss";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const CreateRoom = () => {
	const [room, setRoom] = useState("");
	const [author, setAuthor] = useState("")

	const joinRoom = () => {
		if (room !== "") {
			socket.emit("join_room", room);
		}
	};

	return (
		<div>
			<div className="container-inputs">
				<div className="side-create-room">
					<h3>Pseudo</h3>
					<input
							type="text"
							placeholder="pseudo"
							name="text"
							onChange={(event) => {
								setAuthor(event.target.value);
							}}
						/>
				</div>

				<div className="side-join-room">
					<h3>Rejoindre un salon</h3>
					<div className="input-pseudo">
						<input
							type="text"
							placeholder="#"
							name="text"
							className={`input small`}
							onChange={(event) => {
								setRoom(event.target.value);
							}}
						/>
						<Link to={`/waiting_room?room=${room}&author=${author}`}>
							<button onClick={joinRoom}>Join</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateRoom;
