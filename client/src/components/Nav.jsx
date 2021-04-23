import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { UserContext } from "../context/UserProvider";
import { useHistory } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { LOGOUT_SUCCESS } from "../actions/types";

const Nav = () => {
  const history = useHistory();
  const classes = makeStyles();
  const user = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [catAnchor, setCatAnchor] = useState(null);

  const handleClickCat = (event) => {
    setCatAnchor(event.currentTarget);
  };

  const handleCloseCat = () => {
    setCatAnchor(null);
  };

  const handleClickProfile = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setProfileAnchor(null);
  };

  console.log(user.state)
  console.log("JSON Parsed", JSON.parse(sessionStorage.getItem("user")))
  //useEffect, callling of APIS
  useEffect(() => {
    axios
      .get("/categoriesbackend")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>

        <Button
          color="inherit"
          onClick={() => {
            history.push("/");
          }}
        >
          Bestest-Buy
        </Button>

        <div style={{ flexGrow: 1 }}></div>
        <Button
          color="inherit"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClickCat}
        >
          Shop Category <ArrowDropDownIcon fontSize="small" />
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={catAnchor}
          keepMounted
          open={Boolean(catAnchor)}
          onClose={handleCloseCat}
        >
          {categories.map((category) => {
            return (
              <>
                <MenuItem
                  onClick={(e) => {
                    history.push(`/products/${category.category}`);
                  }}
                >
                  {category.category}
                </MenuItem>
              </>
            );
          })}
        </Menu>
        {!user.state.isAuthenticated && (
          <Button
            color="inherit"
            onClick={() => {
              history.push("/signup");
            }}
          >
            Sign Up
          </Button>
        )}
        {!user.state.isAuthenticated && (
          <Button
            color="inherit"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button>
        )}
        {JSON.parse(sessionStorage.getItem("user"))?.user?.role === "admin" && (
          <Button
            color="inherit"
            onClick={() => {
              history.push("/addnewproduct");
            }}
          >
            Add product
          </Button>
        )}

        {user.state.isAuthenticated && (
          <>
            <Button
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickProfile}
            >
              {user.state.user.username}
              <ArrowDropDownIcon fontSize="small" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={profileAnchor}
              keepMounted
              open={Boolean(profileAnchor)}
              onClose={handleCloseProfile}
            >
              <MenuItem
                onClick={() => {
                  history.push("/myprofile");
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push("/cart");
                }}
              >
                My Cart
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push("/orders");
                }}
              >
                My Order
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push("/");
                  user.dispatch({ type: LOGOUT_SUCCESS, payload: {} });
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
