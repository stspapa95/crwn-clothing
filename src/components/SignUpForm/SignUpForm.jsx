import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import BasicTextField from "../@core/BasicTextField/BasicTextField";
import Button from "../@core/Button/Button";

const exclusiveAccessText = [
  { id: 1, name: "Product Pricing" },
  { id: 2, name: "Designer Discounts" },
  { id: 3, name: "Real-time availability" },
  { id: 4, name: "And much more!" },
];

const StyledCheckBox = styled(Checkbox)({
  "&.MuiCheckbox-root": {
    color: "#2D2D2D",
  },
});

function SignUpForm() {
  return (
    <Fragment>
      <Box style={{ margin: "0 105px" }}>
        <Box style={{ marginBottom: 16 }}>
          <Typography
            variant={"h1"}
            style={{ fontFamily: "Chronicle Light, sans-serif", fontSize: 40 }}
          >
            Sign Up
          </Typography>
        </Box>
        <Grid container display={"flex"}>
          <Grid
            item
            container
            flexDirection={"column"}
            lg={4.5}
            xl={4.5}
          >
            <Grid item>
              <Typography
                style={{
                  fontFamily: "Chronicle Light, sans-serif",
                  fontSize: 20,
                  color: "#2D2D2D",
                }}
              >
                After creating a login account, you will have{" "}
                <b>exclusive access</b> to:
                <ul>
                  {exclusiveAccessText.map((info) => (
                    <li key={info.id} style={{ marginBottom: 16 }}>
                      {info.name}
                    </li>
                  ))}
                </ul>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container flexDirection={"column"} xl={7.5} lg={7.5}>
            <Grid container spacing={3}>
              <Grid item lg={6} xl={6}>
                <BasicTextField
                  fullWidth
                  label={"First Name"}
                  error
                  helperText={"THIS FIELD IS REQUIRED"}
                  placeHolder={"First Name"}
                />
              </Grid>
              <Grid item lg={6} xl={6}>
                <BasicTextField
                  fullWidth
                  label={"Last Name"}
                  error
                  helperText={"THIS FIELD IS REQUIRED"}
                  placeHolder={"Last Name"}
                />
              </Grid>
              <Grid item lg={6} xl={6}>
                <BasicTextField
                  fullWidth
                  label={"Email"}
                  error
                  helperText={"THIS FIELD IS REQUIRED"}
                  placeHolder={"Email"}
                />
              </Grid>
              <Grid item lg={6} xl={6}>
                <BasicTextField
                  fullWidth
                  label={"Password"}
                  placeHolder={"Password"}
                  adornment={true}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<StyledCheckBox disableRipple />}
                  label={
                    <Typography
                      style={{ fontFamily: "Gotham Book", fontSize: 14 }}
                    >
                      By clicking "Create Login" you agree to our{" "}
                      <b>Privacy Policy</b> and <b>Terms and conditions</b>.
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xl={6} lg={6}>
                <Box />
              </Grid>
              <Grid item xl={6} lg={6}>
                <Button
                  title={"Create Account"}
                  fullWidth
                  variant={"contained"}
                  backgroundColor={"#FFD700"}
                  backgroundHover={"rgb(255, 167, 0)"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default SignUpForm;
