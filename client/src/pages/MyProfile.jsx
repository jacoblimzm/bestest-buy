import React, { useContext, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { UserContext } from "../context/UserProvider";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { LOGOUT_SUCCESS } from "../actions/types";

const MyProfile = () => {
  const history = useHistory();
  const classes = makeStyles();
  const user = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Server Errror!");
  const [inputValues, setInputValues] = useState({
    username: user.state.user.username,
    password: user.state.user.password,
    email: user.state.user.email,
    address: user.state.user.address,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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

  const handleChangeInputValues = (attr) => (event) => {
    setInputValues({ ...inputValues, [attr]: event.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setOpen(true);
    axios
      .put(`/usersbackend/${user.state.user._id}`, {
        username: inputValues.username,
        password: inputValues.password,
        email: inputValues.email,
        address: inputValues.address,
      })
      .then((res) => {
        console.log(res.data);
        if (!res.data.message) {
          setSnackbarMessage("Edit credentials successful. Please login again");
          setTimeout(() => {
            history.push("/");
            user.dispatch({ type: LOGOUT_SUCCESS, payload: {} });
          }, 3000);
        } else {
          setSnackbarMessage(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <br />
      <br />
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField
            required
            id="username"
            name="username"
            label="username"
            fullWidth
            disabled
            autoComplete="username"
            value={inputValues.username}
            onChange={handleChangeInputValues("username")}
          />
        </Grid>
        <br />
        <Grid item xs={3}>
          <TextField
            required
            id="password"
            name="password"
            label="password"
            fullWidth
            disabled={isEdit ? false : true}
            autoComplete="password"
            type={false ? "text" : "password"}
            value={inputValues.password}
            onChange={handleChangeInputValues("password")}
          />
        </Grid>
        <br />
        <Grid item xs={3}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            fullWidth
            disabled={isEdit ? false : true}
            autoComplete="email"
            value={inputValues.email}
            onChange={handleChangeInputValues("email")}
          />
        </Grid>
        <br />
        <Grid item xs={3}>
          <TextField
            required
            id="address"
            name="address"
            label="address"
            fullWidth
            disabled={isEdit ? false : true}
            autoComplete="address"
            value={inputValues.address}
            onChange={handleChangeInputValues("address")}
          />
        </Grid>
        {isInputValid && <Alert severity="warning">{alertMessage}</Alert>}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
            className={classes.button}
          >
            Edit
          </Button>{" "}
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            className={classes.button}
          >
            Save
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "middle",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
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
    </>
  );
};

export default MyProfile;
