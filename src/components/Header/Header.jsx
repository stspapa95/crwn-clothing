import React, { useState } from "react";

import { Box, IconButton, Popover } from "@mui/material";
import MainButton from "../@core/MainButton/MainButton";
import SignInForm from "../SignInForm/SignInForm";
import { Link } from "react-router-dom";

import bag from "../../assets/24 - Bag.svg";
import logo from "../../assets/crown.svg";
import classes from "./header.module.css";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display={"flex"} mb={4}>
      <Link to={"/"}>
        <Box>
          <img
            src={logo}
            alt={""}
            style={{ paddingLeft: 20, cursor: "pointer" }}
          />
        </Box>
      </Link>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ marginLeft: "auto" }}
      >
        <Link to={"/shop"} className={classes.link}>
          <MainButton
            fontSize={"13px"}
            padding={"0 20px 0 20px"}
            backgroundHover={"rgba(45, 45, 45, 0.04)"}
            title={"Shop"}
          />
        </Link>
        <MainButton
          fontSize={"13px"}
          padding={"0 20px 0 20px"}
          backgroundHover={"rgba(45, 45, 45, 0.04)"}
          title={"Contact"}
        />
        <MainButton
          fontSize={"13px"}
          padding={"0 20px 0 20px"}
          backgroundHover={"rgba(45, 45, 45, 0.04)"}
          title={"Sign in"}
        />
        <Box style={{ paddingLeft: 20 }}>
          <IconButton onClick={handleClick}>
            <img src={bag} alt={""} style={{ cursor: "pointer" }} />
          </IconButton>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <SignInForm setAnchorEl={setAnchorEl}/>
          </Popover>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;