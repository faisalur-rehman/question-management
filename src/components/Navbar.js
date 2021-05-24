import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className="nav-links">
      <Typography className={classes.title} variant="h6" noWrap>
        <img
          src="https://moneyhawk4u.com/wp-content/uploads/2019/01/Untitled-white.png"
          alt="Logo"
        />
      </Typography>
      <div>
        <a href="#" className="hvr-underline-from-center">
          Home
        </a>
        <a className="hvr-underline-from-center">Apply now</a>
        <a href="#" className="hvr-underline-from-center">
          Fix Credit
        </a>
        <a href="#" className="hvr-underline-from-center">
          MH4U
        </a>
        <a href="#" className="hvr-underline-from-center">
          FAQ
        </a>
        <a href="#" className="hvr-underline-from-center">
          Contact Us
        </a>
      </div>
    </div>
  );
}
