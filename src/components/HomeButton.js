import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { Nav } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HomeButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.removeItem("user_session");
  };

  return (
    <AppBar position="dynamic">
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          <IconButton color="inherit" href="/contacts" onClick={handleOpen}>
            Home
          </IconButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HomeButton;
