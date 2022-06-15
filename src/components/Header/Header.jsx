import React, { useState } from "react";

import { Box, IconButton, Popover } from "@mui/material";
import Button from "../@core/Button/Button";
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
          <Button
            title={"Shop"}
            padding={"0 20px 0 20px"}
            backgroundHover={"rgba(45, 45, 45, 0.04)"}
          />
        </Link>
        <Button
          title={"Contact"}
          padding={"0 20px 0 20px"}
          backgroundHover={"rgba(45, 45, 45, 0.04)"}
        />
        <Button
          title={"Sign in"}
          padding={"0 20px 0 20px"}
          backgroundHover={"rgba(45, 45, 45, 0.04)"}
          onClick={handleClick}
        />
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
          <SignInForm setAnchorEl={setAnchorEl} />
        </Popover>
        <Box style={{paddingLeft: 12}}>
          <IconButton>
            <img src={bag} alt={""} style={{ cursor: "pointer" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;