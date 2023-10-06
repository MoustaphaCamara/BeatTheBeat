import "./Login.scss";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", values, {})
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          Cookies.set("token", res.data.token);
          navigate("/");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred during login.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="login-container d-flex">
        <div className="bg-white p-3 rounded w-50">
          <Link to="/">
            <img
              src="src\assets\beatthe-transformed-modified-PhotoRoom.png-PhotoRoom.png"
              alt="logo"
              className="logo"
            />
          </Link>
          <h2 className="sign">Sign-In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong className="pass">Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                autoComplete="off"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="form-control rounded-0"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong className="pass">Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                autoComplete="off"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className="form-control rounded-0"
              ></input>
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Log in
            </button>
            <p className="justify-content-center align-items-center">
              You are agree to our terms and policies
            </p>
            <Link to="/register" className="signIn-button  ">
              <span className="text"> Register</span>
            </Link>
          </form>
        </div>
      </div>
      <div className="login-image">
        <img src="src\assets\loginImg.png" alt="loginImg" />
      </div>
    </div>
  );
}
