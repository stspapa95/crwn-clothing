import React from "react";
import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "11px 0 11px 14px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: 2,
    borderColor: "#2D2D2D",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2D2D2D",
  },
});

function BasicTextField({
  label,
  variant,
  fullWidth,
  placeHolder,
  adornment
}) {
  return (
    <StyledTextField
      id="outlined-basic"
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      autoComplete={"off"}
      placeholder={placeHolder}
      inputProps={{
        style: {
          color: "#2D2D2D",
          fontFamily: "Gotham Book",
          fontSize: 16,
        },
      }}
      InputProps={
        adornment && {
          endAdornment: (
            <IconButton disableRipple>
              <InputAdornment position="end">
                {/*{values.showPassword ? <VisibilityOff /> : <Visibility />}*/}
                <VisibilityOff />
              </InputAdornment>
            </IconButton>
          ),
        }
      }
      InputLabelProps={{
        style: {
          fontFamily: "Gotham Book",
          fontSize: 15,
          color: "#2D2D2D",
        },
      }}
    />
  );
}

BasicTextField.defaultProps = {
  adornment: false,
  placeHolder: "",
  fullWidth: false
}

export default BasicTextField;
