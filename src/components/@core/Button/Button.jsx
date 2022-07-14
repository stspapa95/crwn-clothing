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
  fontWeight,
  fullWidth,
  variant,
  disabled,
  startIcon,
}) {
  const StyledButton = styled(MuiButton)({
    color: color,
    backgroundColor: backgroundColor,
    padding: padding,
    borderRadius: borderRadius,
    fontWeight: fontWeight,
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
      disabled={disabled}
      startIcon={startIcon || null}
    >
      {title}
    </StyledButton>
  );
}

Button.defaultProps = {
  fullWidth: false,
  variant: "text",
  disabled: false,
  padding: "8px 16px",
  backgroundColor: "#fff",
  fontWeight: "normal",
  backgroundHover: "transparent",
  borderRadius: 1,
  color: "#2D2D2D",
};

export default Button;
