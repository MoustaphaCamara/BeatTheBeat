import RoomPageChat from "../../components/RoomPageChat/RoomPageChat";
import RoomPagePlayerList from "../../components/RoomPagePlayerList/RoomPagePlayerList";
import WaitingRoomOptions from "../../components/WaitingRoomOptions/WaitingRoomOptions";
import "./WaitingRoom.scss";
const WaitingRoom = () => {
  return (
    <>
      <div className="room_container">
        <WaitingRoomOptions />
        <RoomPagePlayerList />
        <RoomPageChat />
      </div>
    </>
  );
};

export default WaitingRoom;
