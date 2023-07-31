import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Miniature Bottle Club
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/events">
          Events
        </Button>
        <Button color="inherit" component={RouterLink} to="/members">
          Members
        </Button>
        <Button color="inherit" component={RouterLink} to="/donate">
          Donate
        </Button>
        <Button color="inherit" component={RouterLink} to="/faq">
          FAQ
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
