import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import RoomList from "./components/RoomList/RoomList";
import React from "react";
import Login from "./components/NavBar/Login/Login";
import Home from "./components/NavBar/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
