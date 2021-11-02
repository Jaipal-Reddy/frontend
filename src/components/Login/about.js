/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import HomeButton from "../HomeButton";

class about extends Component {
  render() {
    return (
      <div>
        <HomeButton />

        <div>
          <h2>About Us</h2>
        </div>
        <p>SolutionCompany</p>
        <p>Chennai</p>
      </div>
    );
  }
}

export default about;
