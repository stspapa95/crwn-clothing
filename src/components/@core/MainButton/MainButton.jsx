import React from "react";
import { Button, styled } from "@mui/material";

function MainButton({
  title,
  onClick,
  padding = "8px 16px",
  color = "#2D2D2D",
  backgroundHover = "transparent",
  background = "#FFF",
  fontSize = "14px",
  fullWidth = false,
  variant = "text"
}) {
  const MyButton = styled(Button)({
    color: color,
    background: background,
    padding: padding,
    borderRadius: "1px",
    fontSize: fontSize,
    fontFamily: "Gotham Book, sans-serif",
    "&:hover": {
      background: backgroundHover,
    },
  });
  return (
    <MyButton
      disableRipple
      onClick={onClick}
      fullWidth={fullWidth}
      variant={variant}
    >
      {title}
    </MyButton>
  );
}

export default MainButton;