import React, {useState} from "react";
import {Link} from "react-router-dom";

import {
    Box,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    Grid,
    styled,
    Typography,
} from "@mui/material";

import BasicTextField from "../@core/BasicTextField/BasicTextField";
import Button from "../@core/Button/Button";
import {
    createAuthUserDoc,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../utilities/firebase/firebase";
import {ReactComponent as GoogleIcon} from "../../assets/24 - google icon.svg";

const StyledCheckBox = styled(Checkbox)({
    "&.MuiCheckbox-root": {
        color: "#FFD700",
    },
});

function SignInForm({setAnchorEl}) {
    const [formFields, setFormFields] = useState({email: "", password: ""});
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const {email, password} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
        setError(null)
    };

    const handleShowPassword = () => {
        setShowPassword((prevState => !prevState))
    };

    const loginGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        if (response) {
            const {user} = response;
            await createAuthUserDoc(user);
            setAnchorEl(null);
        }
    };

    const loginWithEmailAndPassword = async () => {
        await signInAuthUserWithEmailAndPassword(email, password).then((res) => {
            setTimeout(() => setAnchorEl(null), 700);
        }).catch((e) => {
            switch (e.code) {
                case "auth/invalid-email":
                    setError("INVALID EMAIL OR PASSWORD")
                    break
                case "auth/wrong-password":
                    setError("INVALID EMAIL OR PASSWORD")
                    break
                default:
                    setError("USER NOT FOUND")
            }
        });
    };

    return (
        <Card style={{width: 350, height: "100%"}}>
            <CardContent style={{padding: "16px 24px"}}>
                <Typography
                    style={{
                        fontFamily: "Chronicle Light",
                        fontSize: 20,
                        color: "#2D2D2D",
                    }}
                >
                    Sign In
                </Typography>
                <Box mt={3}/>
                <Grid container flexDirection={"column"} spacing={2}>
                    <Grid item>
                        <BasicTextField
                            label={"Email"}
                            variant={"outlined"}
                            fullWidth
                            placeHolder={"Email"}
                            name={"email"}
                            value={email}
                            onChange={handleChange}
                            adornment={false}
                            error={error && error}
                        />
                    </Grid>
                    <Grid item>
                        <BasicTextField
                            label={"Password"}
                            variant={"outlined"}
                            fullWidth
                            placeHolder={"Password"}
                            name={"password"}
                            value={password}
                            onChange={handleChange}
                            handleShowPassword={handleShowPassword}
                            showPassword={showPassword}
                            adornment={true}
                            type={showPassword ? "text": "password"}
                            error={error && error}
                            helperText={error && error}
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <StyledCheckBox iconStyle={{fill: "#FFD700"}} disableRipple/>
                            }
                            label={
                                <Typography style={{fontFamily: "Gotham Book", fontSize: 15}}>
                                    Remember me
                                </Typography>
                            }
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            title={"Sign In"}
                            fullWidth
                            variant={"contained"}
                            backgroundColor={"#FFD700"}
                            backgroundHover={"rgb(255, 167, 0)"}
                            onClick={loginWithEmailAndPassword}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            title={"SIGN IN WITH GOOGLE"}
                            variant={"contained"}
                            fullWidth
                            onClick={loginGoogleUser}
                            startIcon={<GoogleIcon/>}
                        />
                    </Grid>
                    <Grid item>
                        <Typography style={{fontSize: 14, fontFamily: "Gotham Book"}}>
                            Don't have a login with us?{" "}
                            <Link
                                to={"/sign-up"}
                                style={{
                                    fontFamily: "Gotham Book",
                                    color: "#2D2D2D",
                                    textDecoration: "none",
                                }}
                            >
                <span
                    style={{fontWeight: "bold"}}
                    onClick={() => setAnchorEl(null)}
                >
                  SIGN UP.
                </span>
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default SignInForm;
