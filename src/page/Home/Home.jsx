import Navbar from "../../components/NavBar/NavBar"
import Banner from "../../components/Banner/Banner"
import CreateRoom from "../../components/CreateRoom/CreateRoom"
import RoomList from "../../components/RoomList/RoomList"
import Ranking from "../../components/Ranking/Ranking"

import "./home.scss"

function Home() {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="grid-container-home">
        <CreateRoom className="create-room-grid"/>
        <Ranking className="ranking-grid"/>
        <RoomList className="roomList-grid"/>
      </div>
    </>
  );
}

export default Home;
