import React from "react";
import "./Header.css";
import img from "../../Assets/avatar.jpg";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <h3>{props.heading}</h3>
        {props.search && (
          <div className="search-div">
            <input
              className="search"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </div>
        )}

        <div className="profile">
          <img src={img} alt="" />
          <div>
            <h4>Mathew Perry</h4>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
