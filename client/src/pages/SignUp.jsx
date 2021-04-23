import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CssBaseline,
  Avatar,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Server Errror!");
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
    email: "",
    address: "",
  });
  const [isInputValid, setIsInputValid] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChangeInputValues = (attr) => (event) => {
    setInputValues({ ...inputValues, [attr]: event.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log(
      inputValues.username,
      inputValues.password,
      inputValues.email,
      inputValues.address
    );
    axios
      .post("/usersbackend", {
        username: inputValues.username,
        password: inputValues.password,
        email: inputValues.email,
        address: inputValues.address,
      })
      .then((res) => {
        if (!res.data.message) {
          setSnackbarMessage("Sign up succesful");
        } else {
          setSnackbarMessage(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputValues.username.length < 5) {
      setIsInputValid(true);
      setAlertMessage("Username must be more than 5 characters");
    } else if (inputValues.password.length < 8) {
      setIsInputValid(true);
      setAlertMessage("Password must be more than 8 characters");
    } else if (re.test(inputValues.email) === false) {
      setIsInputValid(true);
      setAlertMessage("Please provide valid email");
    } else if (inputValues.address.length === 0) {
      setIsInputValid(true);
      setAlertMessage("Address cannot be empty!");
    } else {
      setIsInputValid(false);
      setAlertMessage("");
    }
  }, [inputValues]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                value={inputValues.username}
                onChange={handleChangeInputValues("username")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={inputValues.email}
                onChange={handleChangeInputValues("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={inputValues.password}
                onChange={handleChangeInputValues("password")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                value={inputValues.address}
                onChange={handleChangeInputValues("address")}
              />
            </Grid>
          </Grid>
          {isInputValid && <Alert severity="warning">{alertMessage}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!isInputValid ? false : true}
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "middle",
        }}
        open={open}
        autoHideDuration={5000}
        onClose=''
        // {handleClose}
        message={snackbarMessage}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </Container>
  );
};
export default SignUp;
