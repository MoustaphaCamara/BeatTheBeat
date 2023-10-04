import { useState } from "react";
import "./RoomPagePlayerList.scss";

const RoomPagePlayerList = () => {
  const [players, setPlayers] = useState([
    "Pseudo1",
    "Pseudo2",
    "Pseudo3",
    "Pseudo4",
  ]);
  return (
    <div className="players_container">
      <h3>
        PLAYER : <span>4/5</span>
      </h3>
      <div className="players">
        {players.map((player, index) => (
          <div className="player" key={index}>
            {player}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomPagePlayerList;
