import React from "react";
import {IconButton, InputAdornment, styled, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

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
                            value,
                            name,
                            type,
                            onChange,
                            handleShowPassword,
                            showPassword,
                            variant,
                            fullWidth,
                            placeHolder,
                            required,
                            error,
                            helperText,
                            adornment
                        }) {
    return (
        <StyledTextField
            id="outlined-basic"
            label={label}
            value={value}
            onChange={onChange}
            variant={variant}
            name={name}
            type={type}
            fullWidth={fullWidth}
            autoComplete={"off"}
            placeholder={placeHolder}
            required={required}
            error={error}
            helperText={helperText}
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
                        <IconButton disableRipple onClick={handleShowPassword}>
                            <InputAdornment position="end">
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </InputAdornment>
                        </IconButton>
                    ),
                }
            }
            FormHelperTextProps={{
                style: {
                    fontFamily: "Gotham Book",
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "#DF0006"
                }
            }}
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
    required: false,
    onChange: () => {
    },
    value: null,
    name: "",
    type: "text",
    error: false,
    helperText: "",
    placeHolder: "",
    fullWidth: false
}

export default BasicTextField;
