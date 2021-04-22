import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, MenuItem, MenuClose, Menu } from "@material-ui/core";
import { UserContext } from "../context/UserProvider";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  const classes = makeStyles();
  const { state } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //useEffect, callling of APIS
  useEffect(() => {
    axios.get("/categoriesbackend").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (

    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        </IconButton>

        <Button color="inherit" onClick={() => { history.push("/") }}>
          Bestest-Buy
    </Button>


        <div style={{ flexGrow: 1 }}></div>

        <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Shop Category
    </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          {
            categories.map((category) => {
              return (
                <>
                  <MenuItem onClick={(e) => {
                    history.push(`/products/${category.category}`);
                  }}>
                    {/* <MenuItem 
                 component={Link}    
                 to={`/products/${category.category}`}> */}
                    {category.category}
                  </MenuItem>
                </>
              );
            })
          }

        </Menu>

        <Button color="inherit" onClick={() => { history.push("/signup") }}>Sign Up</Button>
        <Button color="inherit" onClick={() => { history.push("/login") }}>Login</Button>

        {(state.isAuthenticated) && (
          <>
            <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              {state.user.username}</Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => { history.push("/myprofile") }}>Profile</MenuItem>
              <MenuItem onClick={() => { history.push("/cart") }}>My Cart</MenuItem>
              <MenuItem onClick={() => { history.push("/orders") }}>My Order</MenuItem>
              <MenuItem onClick={() => { history.push("/") }}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>

  )
}

export default Nav;