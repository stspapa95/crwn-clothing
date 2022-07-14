import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import BasicTextField from "../@core/BasicTextField/BasicTextField";
import Button from "../@core/Button/Button";
import {
  createAuthUserDoc,
  createAuthUserWithEmailAndPassword,
} from "../../utilities/firebase/firebase";

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
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formFields;
  const isDisabled = firstName === "" || lastName === "" || email === "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //Clear Form Fields
  const handleClearForm = () =>
    setFormFields({ firstName: "", lastName: "", email: "", password: "" });

  const handleSubmitForm = async () => {
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (response) {
        await createAuthUserDoc(response.user, {
          displayName: `${firstName} ${lastName}`,
        });
        handleClearForm();
      }
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        console.log(e.message);
      } else {
        console.log("Error encountered during creating user!");
      }
      handleClearForm();
    }
  };

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
          <Grid item container flexDirection={"column"} lg={5} xl={5}>
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
          <Grid item container flexDirection={"column"} xl={7} lg={7}>
            <Grid container spacing={3}>
              <Grid item lg={6} xl={6}>
                <BasicTextField
                  fullWidth
                  label={"First Name"}
                  // error
                  // helperText={"THIS FIELD IS REQUIRED"}
                  placeHolder={"First Name"}
                  name={"firstName"}
                  value={firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item lg={6} xl={6}>
                <BasicTextField
                  fullWidth
                  label={"Last Name"}
                  // error
                  // helperText={"THIS FIELD IS REQUIRED"}
                  placeHolder={"Last Name"}
                  name={"lastName"}
                  value={lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item lg={6} xl={6}>
                <BasicTextField
                  fullWidth
                  label={"Email"}
                  // error
                  // helperText={"THIS FIELD IS REQUIRED"}
                  name={"email"}
                  value={email}
                  onChange={handleChange}
                  placeHolder={"Email"}
                />
              </Grid>
              <Grid item lg={6} xl={6}>
                <BasicTextField
                  fullWidth
                  label={"Password"}
                  placeHolder={"Password"}
                  name={"password"}
                  value={password}
                  onChange={handleChange}
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
                      By clicking "Create Account" you agree to our{" "}
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
                  onClick={handleSubmitForm}
                  disabled={isDisabled}
                  variant={"contained"}
                  backgroundColor={"#FFD700"}
                  fontWeight={"bold"}
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
