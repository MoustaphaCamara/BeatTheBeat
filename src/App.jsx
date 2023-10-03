import "./App.scss";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import RoomList from "./components/RoomList/RoomList";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <RoomList />
    </>
  );
}

export default App;
