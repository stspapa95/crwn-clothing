import React from "react";
import { Button as MuiButton, styled } from "@mui/material";

function Button({
  title,
  onClick,
  padding,
  color,
  borderRadius,
  backgroundHover,
  backgroundColor,
  fullWidth,
  variant,
  startIcon,
}) {

  const StyledButton = styled(MuiButton)({
    color: color,
    backgroundColor: backgroundColor,
    padding: padding,
    borderRadius: borderRadius,
    fontFamily: "Gotham Book, sans-serif",
    "&:hover": {
      background: backgroundHover,
    },
  });

  return (
    <StyledButton
      disableRipple
      onClick={onClick}
      fullWidth={fullWidth}
      variant={variant}
      startIcon={startIcon || null}
    >
      {title}
    </StyledButton>
  );
}

Button.defaultProps = {
  fullWidth: false,
  variant: "text",
  padding: "8px 16px",
  backgroundColor: "#fff",
  backgroundHover: "transparent",
  borderRadius: 1,
  color: "#2D2D2D",
};

export default Button;