import Banner from "../../components/Banner/Banner";
import CreateRoom from "../../components/CreateRoom/CreateRoom";
import RoomList from "../../components/RoomList/RoomList";
import Ranking from "../../components/Ranking/Ranking";

import "./home.scss";

function Home() {
  return (
    <>
      <Banner />

      <div className="home_container">
        <div className="left_part">
          <CreateRoom />
          <RoomList />
        </div>
        <div className="right_part">
          <Ranking />
        </div>
      </div>
    </>
  );
}

export default Home;
