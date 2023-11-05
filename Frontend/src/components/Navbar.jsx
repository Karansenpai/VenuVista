import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { userInfo } from "../../atoms/userInfo";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = useRecoilValue(userInfo);
  const setUser = useSetRecoilState(userInfo);

  const navbarStyle = {
    backgroundColor: "#333", // Background color
    color: "white", // Text color
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  if (user.isLoading) {
    return <div>Loading</div>;
  }

  if (user.userId) {
    return (
      <Box>
        <AppBar position="static" sx={navbarStyle}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href="/" style={linkStyle}>
                Venue Vista
              </a>
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/restaurants");
              }}
            >
              List Restaurants
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/hotelpage");
              }}
            >
              Dashboard
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.setItem("token", null);
                setUser({
                  _id: null,
                  isLoading: false,
                });
                navigate("/");
              }}
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  return (
    <Box>
      <AppBar position="static" sx={navbarStyle}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/" style={linkStyle}>
            Venue Vista
            </a>
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/restaurants");
            }}
          >
            List Restaurants
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
