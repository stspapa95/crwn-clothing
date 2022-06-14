import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import BasicTextField from "../@core/BasicTextField/BasicTextField";
import MainButton from "../@core/MainButton/MainButton";
import { Link } from "react-router-dom";
import { signInWithGooglePopup } from "../../utilities/firebase/firebase";

const StyledCheckBox = styled(Checkbox)({
  "&.MuiCheckbox-root": {
    color: "#FFD700",
  },
});

function SignInForm({ setAnchorEl }) {
  const loginGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) setAnchorEl(null);
  };

  return (
    <Card style={{ width: 350, height: "100%" }}>
      <CardContent style={{ padding: "16px 24px 16px 24px" }}>
        <Typography
          style={{
            fontFamily: "Chronicle Light",
            fontSize: 20,
            color: "#2D2D2D",
          }}
        >
          Sign In
        </Typography>
        <Box mt={3} />
        <Grid container flexDirection={"column"} spacing={2}>
          <Grid item>
            <BasicTextField
              label={"Email"}
              variant={"outlined"}
              fullWidth
              placeHolder={"Email"}
              adornment={false}
            />
          </Grid>
          <Grid item>
            <BasicTextField
              label={"Password"}
              variant={"outlined"}
              fullWidth
              placeHolder={"Password"}
              adornment={true}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <StyledCheckBox iconStyle={{ fill: "#FFD700" }} disableRipple />
              }
              label={
                <Typography style={{ fontFamily: "Gotham Book", fontSize: 15 }}>
                  Remember me
                </Typography>
              }
            />
          </Grid>
          <Grid item container display={"flex"} spacing={1}>
            <Grid item sm={6} md={6}>
              <MainButton
                title={"Sign In"}
                fullWidth
                variant={"contained"}
                background={"#FFD700"}
                backgroundHover={"rgb(255, 167, 0)"}
              />
            </Grid>
            <Grid item sm={6} md={6}>
              <Button
                variant={"contained"}
                fullWidth
                style={{ borderRadius: "1px", padding: "8px 16px" }}
                onClick={loginGoogleUser}
              >
                Google
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: 14, fontFamily: "Gotham Book" }}>
              Don't have a login with us?{" "}
              <Link
                to={"/sign-up"}
                style={{
                  fontFamily: "Gotham Bold",
                  color: "#2D2D2D",
                  textDecoration: "none",
                }}
              >
                <span onClick={() => setAnchorEl(null)}>SIGN UP.</span>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SignInForm;
