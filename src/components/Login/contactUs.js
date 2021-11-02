import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import React, { Component } from "react";
import HomeButton from "../HomeButton";
// import Navbar from "../Contact/Navbar";
class contactUs extends Component {
  render() {
    return (
      <div>
        <HomeButton />
        <div>
          <h2>Contact Us</h2>
        </div>
        <p>Servicehelp@outlook.com</p>
        <p>PhNO:+91 9587451233</p>
      </div>
    );
  }
}

export default contactUs;
