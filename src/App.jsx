import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import CreateRoom from "./components/CreateRoom/CreateRoom"
import Ranking from "./components/Ranking/Ranking"

import RoomList from "./components/RoomList/RoomList";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      
      <div className="grid-container-home">
        <CreateRoom />
        <RoomList />
        <Ranking />
      </div>
      
    </>
  );
}

export default App;
