import { useState } from "react";
import Ranking from "../Ranking/Ranking";
import Room from "./Room/Room";
import "./RoomList.scss";
const Rooms = () => {
  const [roomProps, setRoomProps] = useState([
    {
      pseudo: "Askralos",
      idRoom: 2790,
      nbPlayer: 4,
      totalPlayer:5, 
  },
  {
    pseudo: "Carter",
    idRoom: 9865,
    nbPlayer: 2,
    totalPlayer:8, 
  },
  {
    pseudo: "Askralos",
    idRoom: 2790,
    nbPlayer: 4,
    totalPlayer:5, 
},
{
  pseudo: "Askralos",
  idRoom: 2790,
  nbPlayer: 4,
  totalPlayer:5, 
},
  ])
  return (
    <>
    <div className="container-room">
      <h1>Rooms</h1>
      <div className="grid-room">
        {roomProps.map((prop, index) => (
          <Room key={index} pseudo={prop.pseudo} idRoom={prop.idRoom} nbPlayer={prop.nbPlayer} totalPlayer={prop.totalPlayer}  />
        ))}
      </div>
    </div>
   
      <Ranking />
    </>
  );
};

export default Rooms;
