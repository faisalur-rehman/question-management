import React, { useState } from "react";
import image from "./images/pexels-eduardo-dutra-2115217.jpg";
import logo from "./images/Group 1033.svg";
import "./css/Login.css";
import { useHistory } from "react-router";
import useApi from "../../hooks/useApi";
import * as projectApi from "../../apis/project";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleEmail({ target }) {
    setEmail(target.value);
  }
  function handlePassword({ target }) {
    setPassword(target.value);
  }

  const login = useApi(projectApi.login);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await login.request({ email, password });
      if (data.role === "superuser") {
        localStorage.setItem("super-user-token", data.token);
        history.push("/register");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        history.push("/projects");
      }
    } catch (_) {}
  }
  return (
    <div className="container-login loginn">
      <div className="wrap-login">
        <div className="login-pic">
          <img src={image} alt="IMG" />
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <span className="login-form-title">
            <img className="title-img" src={logo} alt="" />
            <span className="bold">MED</span>quest
          </span>
          <div className="login-from-inner">
            <div className="wrap-input">
              <label for="email">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="wrap-input">
              <label for="password">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <div className="login-form-btn">
              <button className="login-btn">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
