import { useState } from "react";
import Ranking from "../Ranking/Ranking";
import Room from "./Room/Room";
import "./RoomList.scss";
const Rooms = () => {
  const [number, setNumber] = useState([1, 2, 3]);
  return (
    <>
      <div>Toutes les rooms</div>
      <ul>
        {number.map((index) => (
          <Room number={index} />
        ))}
      </ul>
      <Ranking />
    </>
  );
};

export default Rooms;
