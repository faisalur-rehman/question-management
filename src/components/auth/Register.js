import React, { useState } from "react";
import image from "../Login/images/pexels-eduardo-dutra-2115217.jpg";
import logo from "../Login/images/Group 1033.svg";
import "../Login/css/Login.css";
import useApi from "../../hooks/useApi";
import * as projectApi from "../../apis/project";
import { useHistory } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleName({ target }) {
    setName(target.value);
  }
  function handleRole({ target }) {
    setRole(target.value);
  }
  function handleEmail({ target }) {
    setEmail(target.value);
  }
  function handlePassword({ target }) {
    setPassword(target.value);
  }

  const auth = useApi(projectApi.register);
  async function handleSubmit(e) {
    console.log(email, password, role, name);
    e.preventDefault();
    try {
      await auth.request({ email, password, role, name });
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
              <label>Name</label>
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="wrap-input">
              <label>Email</label>
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
            <div className="wrap-input">
              <label>Role</label>
              <input
                className="input"
                type="text"
                value={role}
                onChange={handleRole}
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

export default Register;
