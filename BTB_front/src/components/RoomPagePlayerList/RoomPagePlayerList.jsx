import { useState } from "react";
import "./RoomPagePlayerList.scss";

const RoomPagePlayerList = () => {
  const [players, setPlayers] = useState([
    {
      pseudo: "Askralos",
      points: "44",
    },
    {
      pseudo: "Carter",
      points: "44",
    },
    {
      pseudo: "Fromage",
      points: "38",
    },
    {
      pseudo: "GucciBaby",
      points: "25",
    },
  ]);
  return (
    <div className="players_container">
      <h3>
        PLAYERS : <span>4/5</span>
      </h3>
      <div className="players">
        {players.map((player, index) => (
          <div className="player" key={index}>
            {player.pseudo} <span>{player.points}pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomPagePlayerList;
