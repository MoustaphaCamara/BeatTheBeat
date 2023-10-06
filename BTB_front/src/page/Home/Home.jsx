import Banner from "../../components/Banner/Banner";
import CreateRoom from "../../components/CreateRoom/CreateRoom";
import RoomList from "../../components/RoomList/RoomList";
import Ranking from "../../components/Ranking/Ranking";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.scss";

function Home() {
  const [auth, setAuth] = useState(false);
  console.log("check auth", auth);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8081", {
        cookie: { token: Cookies.get("token") },
      })
      .then((res) => {
        console.log("check api", res);
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Message);
        }
      });
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          Cookies.remove("token");
          window.location.reload(true);
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {auth ? (
        <>
          <Banner />
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
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
      ) : (
        <>
          <Banner />
          <h3>{message}</h3>

          <Link to="/login" className="btn btn-primary">
            <h3>No auth : Login Now</h3>
          </Link>
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
      )}
    </>
  );
}

export default Home;
