import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import Profil from "./page/Profil/Profil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomPage from "./page/RoomPage/RoomPage";
import NavBar from "./components/NavBar/NavBar";
import Win from "./page/Win/Win";
import WaitingRoom from "./page/WaitingRoom/WaitingRoom";
import Register from "./page/Login/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/room" element={<RoomPage />}></Route>
          <Route path="/waiting_room" element={<WaitingRoom />}></Route>
          <Route path="/profil" element={<Profil />}></Route>
          <Route path="/win" element={<Win />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
