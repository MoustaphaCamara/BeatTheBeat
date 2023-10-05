import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import RoomList from "./components/RoomList/RoomList";
import React from "react";
import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./page/Login/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
