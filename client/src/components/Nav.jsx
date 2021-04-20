import React, {useEffect, useState, useContext} from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Button, MenuItem, MenuClose, Menu} from "@material-ui/core";
import {UserContext} from "../context/UserProvider";
import { useHistory } from "react-router-dom";

const initialcategories= [
  {
      "_id": "607f1007af4ad218e900b7a3",
      "category": "Beauty & personal care",
      "__v": 0
  },
  {
      "_id": "607f1007af4ad218e900b7a4",
      "category": "Health & Wellness",
      "__v": 0
  },
  {
      "_id": "607f1007af4ad218e900b7a5",
      "category": "Food & Beverages",
      "__v": 0
  },
  {
      "_id": "607f1007af4ad218e900b7a6",
      "category": "Household",
      "__v": 0
  },
  {
      "_id": "607f1007af4ad218e900b7a7",
      "category": "Electronics",
      "__v": 0
  },
  {
      "_id": "607f1007af4ad218e900b7a8",
      "category": "Fashion",
      "__v": 0
  }
];

const Nav = () => {
  // react global stuffs, material ui usestyles, makestyles
  const history = useHistory();
  const classes = makeStyles();
  const [state] = useContext(UserContext);
  const [categories,setCategories] =useState(initialcategories);



  //component own state, ui presentation layer
  const [anchorEl, setAnchorEl] = useState(null);

  //UI internal logic. (handleclick, handlechange, onSubmit, FUNCTIONS)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //useEffect, callling of APIS



return (

  <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    </IconButton>

    <Typography variant="h6" className={classes.title}>
      Bestest-Buy
    </Typography>

    <div style={{flexGrow:1}}></div>

    <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Open Menu
    </Button>

    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      {
        categories.map((category)=> {
            return (
                <>
                 <MenuItem id={category._id} 
                 onClick={()=>{handleClose(); history.push(`/products/${category._id}`)}}> 
                 {category.category}</MenuItem>
                </>
            );
        })
      }
    </Menu>

    <Button color="inherit" onClick={()=>{history.push("/signup")}}>Sign Up</Button>
    <Button color="inherit" onClick={()=>{history.push("/")}}>Login</Button>
    {state.isAuthenticated && <Typography>{state.user.username}</Typography> }
  </Toolbar>
</AppBar>

)
}

export default Nav;