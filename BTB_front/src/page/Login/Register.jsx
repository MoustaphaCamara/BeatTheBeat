import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.scss";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8081/register", values, {}).then((res) => {
      if (res.data.Status === "Success") {
        navigate("/login");
      } else {
        alert("Error");
      }
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
              className="logo2"
            />
          </Link>
          <h2 className="nam2">Sign-Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong className="nam">Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong className="nam">Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong className="nam">Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className="form-control rounded-0"
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              {" "}
              Sign up
            </button>
            <p>You are agree to our terms and policies</p>
            <Link to="/login" className="Login-button">
              <span className="text"> Login</span>
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

export default Register;
