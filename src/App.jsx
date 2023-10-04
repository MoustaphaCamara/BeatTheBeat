import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import Profil from "./page/Profil/Profil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomPage from "./page/RoomPage/RoomPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/room" element={<RoomPage />}></Route>
          <Route path="/profil" element={<Profil />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
