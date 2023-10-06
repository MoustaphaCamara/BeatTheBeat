import { Link } from "react-router-dom";
import { useState } from "react";
import "./CreateRoom.scss";

const CreateRoom = () => {
  const [room, setRoom] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div>
      <div className="container-inputs">
        <div className="side-create-room">
          <h3>Pseudo</h3>
          <input
            className="create_room_input"
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
              className="input small create_room_input"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <Link to={`/waiting_room?room=${room}&author=${author}`}>
              <button className="create_room_button">Join</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
