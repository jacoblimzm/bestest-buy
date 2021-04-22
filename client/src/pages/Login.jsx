import React, { useContext, useState } from 'react'; 
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, Avatar, Typography, TextField, Button, Grid, Link } from "@material-ui/core";
import {UserContext} from "../context/UserProvider";
import { LOGIN_SUCCESS } from '../actions/types';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = () => {
    const [inputValues, setInputValues] = useState({
       username: "",
       password: "",
    });

    const classes = useStyles();
    const user = useContext(UserContext);
    
    const handleChangeInputValues = attr => event =>{
        setInputValues({...inputValues, [attr]: event.target.value})
    };

const handleLogIn = (e) => {
    e.preventDefault();
    console.log("BUTTON LOGIN CLICKED")
    // upon submit, an API POST request must be made to the backend to /usersbackend
    console.log(inputValues.username,inputValues.password);
    axios
      .post("/sessionsbackend", {
        "username": inputValues.username,
        "password": inputValues.password,
      })
      .then((res) => {
        console.log(res.data); // the backend responds with a json object!!
        console.log(res.status)
        user.dispatch({type: LOGIN_SUCCESS, payload: res.data});
        
        // handleAddBookmark(res.data); // need to haul the user object to the TOP;
      })
      .catch((err) => {
        console.log(err);
      });


  };

  



return (
    <>
     <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={inputValues.username}
            onChange={handleChangeInputValues("username")}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <Button
            type="submit" 
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit} onClick={handleLogIn}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </>
)
}

export default Login;