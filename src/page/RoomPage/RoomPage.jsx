import "./RoomPage.scss";
import RoomPageChat from "../../components/RoomPageChat/RoomPageChat";
import RoomPagePlayerList from "../../components/RoomPagePlayerList/RoomPagePlayerList";
import RoomPageQuizz from "../../components/RoomPageQuizz/RoomPageQuizz";
const RoomPage = () => {
  return (
    <>
      <div className="room_container">
        <RoomPageQuizz />
        <RoomPageChat />
        <RoomPagePlayerList />
      </div>
    </>
  );
};

export default RoomPage;
