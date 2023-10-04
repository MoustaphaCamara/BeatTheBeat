import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import CreateRoom from "./components/CreateRoom/CreateRoom";
import Ranking from "./components/Ranking/Ranking";

import RoomList from "./components/RoomList/RoomList";
import React from "react";
import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomPage from "./page/RoomPage/RoomPage";

function App() {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/room" element={<RoomPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
