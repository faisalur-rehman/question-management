import React, { useState } from "react";
import image from "../Login/images/pexels-eduardo-dutra-2115217.jpg";
import logo from "../Login/images/Group 1033.svg";
import "../Login/css/Login.css";
import useApi from "../../hooks/useApi";
import * as projectApi from "../../apis/project";
import { useHistory } from "react-router";

const SuperUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleName({ target }) {
    setName(target.value);
  }

  function handleEmail({ target }) {
    setEmail(target.value);
  }
  function handlePassword({ target }) {
    setPassword(target.value);
  }

  const superUser = useApi(projectApi.createSuperUser);
  async function handleSubmit(e) {
    console.log(email, password, name);
    e.preventDefault();
    try {
      await superUser.request({ email, password, name });
      history.push("/login");
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
              <label for="email">Name</label>
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={handleName}
              />
            </div>
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
              <label>Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <div className="login-form-btn">
              <button className="login-btn">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SuperUser;
