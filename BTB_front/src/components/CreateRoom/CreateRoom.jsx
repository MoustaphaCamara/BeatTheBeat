import Input from "../ui/InputButtonRoom/InputButton";
import "./CreateRoom.scss";


const CreateRoom = () => {
	return (
		<div>
			<div className="container-inputs">
				<div className="side-create-room">
					<h3>Pseudo</h3>
					<Input placeholder="pseudo" button="Create room"/>
				</div>

				<div className="side-join-room">
					<h3>Rejoindre un salon</h3>
					<Input placeholder="#" button="Join" size="small" />
				</div>
			</div>
		</div>
	);
};

export default CreateRoom;
