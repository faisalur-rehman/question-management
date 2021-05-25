import React from "react";
import "./AllScreens.css";
import { Link } from "react-router-dom";

const AllScreens = () => {
  return (
    <div>
      <div>
        <Link to="/login">
          <button className="screen-button">Screen 1</button>
        </Link>
      </div>
      <div>
        <Link to="/screen2">
          <button className="screen-button">Screen 2</button>
        </Link>
      </div>
      <div>
        <Link to="/screen4">
          <button className="screen-button">Screen 4</button>
        </Link>
      </div>
      <div>
        <Link to="/screen5">
          <button className="screen-button">Screen 5</button>
        </Link>
      </div>
      <div>
        <Link to="/screen6">
          <button className="screen-button">Screen 6</button>
        </Link>
      </div>
      <div>
        <Link to="/screen7">
          <button className="screen-button">Screen 7</button>
        </Link>
      </div>
      <div>
        <Link to="/screen8">
          <button className="screen-button">Screen 8</button>
        </Link>
      </div>
      <div>
        <Link to="/screen9">
          <button className="screen-button">Screen 9</button>
        </Link>
      </div>
      <div>
        <Link to="/screen10">
          <button className="screen-button">Screen 10</button>
        </Link>
      </div>
      <div>
        <Link to="/screen11">
          <button className="screen-button">Screen 11</button>
        </Link>
      </div>
      <div>
        <Link to="/screen13">
          <button className="screen-button">Screen 13</button>
        </Link>
      </div>
      <div>
        <Link to="/screen14">
          <button className="screen-button">Screen 14</button>
        </Link>
      </div>

      <div>
        <Link to="/screen15">
          <button className="screen-button">Screen 15</button>
        </Link>
      </div>
      <div>
        <Link to="/screen16">
          <button className="screen-button">Screen 16</button>
        </Link>
      </div>
      <div>
        <button className="screen-button">Screen 18</button>
      </div>
      <div>
        <button className="screen-button">Screen 19</button>
      </div>
    </div>
  );
};

export default AllScreens;
