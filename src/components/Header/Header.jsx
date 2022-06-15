import React, { useRef, useState } from "react";

import { Box, IconButton, Popover } from "@mui/material";
import Button from "../@core/Button/Button";
import SignInForm from "../SignInForm/SignInForm";
import { Link } from "react-router-dom";

import cartLogo from "../../assets/24 - Bag.svg";
import crownLogo from "../../assets/crown.svg";
import classes from "./Header.module.css";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef();

  const handleOpen = () => {
    setAnchorEl(ref.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display={"flex"} mb={4}>
      <Link to={"/"}>
        <Box>
          <img
            src={crownLogo}
            alt={"Crown Clothing"}
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
        <Box ref={ref}>
          <Button
            title={"Sign in"}
            padding={"0 20px 0 20px"}
            backgroundHover={"rgba(45, 45, 45, 0.04)"}
            onClick={handleOpen}
          />
        </Box>
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
        <IconButton style={{paddingLeft: 12}}>
          <img src={cartLogo} alt={"Cart"} style={{ cursor: "pointer" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Header;
