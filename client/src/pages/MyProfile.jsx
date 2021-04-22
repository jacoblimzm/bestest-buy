import React, {useContext, useState} from 'react';
import {Grid, Typography, TextField, FormControlLabel, Checkbox, Button, } from '@material-ui/core';
import { UserContext } from "../context/UserProvider";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';


const MyProfile = () => {
    const classes = makeStyles();
    const user = useContext(UserContext);
    console.log(user);
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
        email: "",
        address: "",
     }); 
 

    const handleChangeInputValues = attr => event =>{
        setInputValues({...inputValues, [attr]: event.target.value})
    };

    const handleEdit = (e) => {
        e.preventDefault();
      };
    
      const handleSave = (e) => {
        e.preventDefault();
        axios
      .put("/sessionsbackend", {
        "username": inputValues.username,
        "password": inputValues.password,
        "email": inputValues.email,
        "address": inputValues.address
      })
      .then((res) => {
        console.log(res.data);
          })
      .catch((err) => {
        console.log(err);
      });

      };

  return (
<>
<br/>
<br/>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField
            required
            id={user.username}
            name="username"
            label="username"
            fullWidth
            autoComplete="username"
            value={inputValues.username}
            onChange={handleChangeInputValues("username")}
          />
        </Grid>
        <br/>
        <Grid item xs={3}>
          <TextField
            required
            id={user.email}
            name="email"
            label="email"
            fullWidth
            autoComplete="email"
            value={inputValues.email}
            onChange={handleChangeInputValues("email")}
          />
        </Grid>
        <br/>
        <Grid item xs={3}>
          <TextField
            required
            id={user.address}
            name="address"
            label="email"
            fullWidth
            autoComplete="address"
            value={inputValues.address}
            onChange={handleChangeInputValues("address")}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEdit}
                    className={classes.button}
                    >
                     Edit        
                    </Button> <br/><br/>
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
</>
  );
}


export default MyProfile;