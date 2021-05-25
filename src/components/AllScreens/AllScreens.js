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
        <button className="screen-button">Screen 6</button>
      </div>
      <div>
        <button className="screen-button">Screen 7</button>
      </div>
      <div>
        <button className="screen-button">Screen 8</button>
      </div>
      <div>
        <button className="screen-button">Screen 9</button>
      </div>
      <div>
        <button className="screen-button">Screen 10</button>
      </div>
      <div>
        <button className="screen-button">Screen 11</button>
      </div>
      <div>
        <button className="screen-button">Screen 13</button>
      </div>
      <div>
        <button className="screen-button">Screen 14</button>
      </div>
      <div>
        <button className="screen-button">Screen 15</button>
      </div>
      <div>
        <button className="screen-button">Screen 16</button>
      </div>
      <div>
        <button className="screen-button">Screen 17</button>
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
