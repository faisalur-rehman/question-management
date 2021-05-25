import React from "react";
import image from "./images/pexels-eduardo-dutra-2115217.jpg";
import logo from "./images/Group 1033.svg";
import "./css/Login.css";

const Login = () => {
  return (
    <div class="container-login loginn">
      <div class="wrap-login">
        <div class="login-pic">
          <img src={image} alt="IMG" />
        </div>

        <form class="login-form">
          <span class="login-form-title">
            <img class="title-img" src={logo} alt="" />
            <span class="bold">MED</span>quest
          </span>
          <div class="login-from-inner">
            <div class="wrap-input">
              <label for="email">Email</label>
              <input class="input" type="text" name="email" />
            </div>
            <div class="wrap-input">
              <label for="password">Password</label>
              <input class="input" type="password" name="password" />
            </div>

            <div class="login-form-btn">
              <button class="login-btn">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
