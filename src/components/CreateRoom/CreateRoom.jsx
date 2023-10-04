import "./CreateRoom.scss";

const CreateRoom = () => {
	return (
		<div>
			<div className="container-inputs">
				<div className="side-create-room">
					<h3>Pseudo</h3>
					<div className="input-pseudo">
						<input type="text" placeholder="pseudo" name="text" className="input" />
						<button>Create Room</button>
					</div>
				</div>

				<div className="side-join-room">
					<h3>Rejoindre un salon</h3>
					<div className="input-idRoom">
						<input type="text" placeholder="#" name="text" className="input" />
						<button>Join</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateRoom;
