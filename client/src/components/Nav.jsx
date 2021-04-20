import React  from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";



const Nav = () => {

//     const history = useHistory();


//     const handleSignUp =  (e) => {
//         e.preventDefault();
//         history.push("/signup");
//     }

//     const handleLogIn = (e) => {
//         const username = e.target.username.value;
//         const password = e.target.password.value;
//         // upon submit, an API POST request must be made to the backend to /usersbackend
//         axios
//           .post("/sessionsbackend", {
//             username,
//             password,
//           })
//           .then((res) => {
//             // console.log(res.data); // the backend responds with a json object!!
//             setCurrentUser(res.data);
//             // handleAddBookmark(res.data); // need to haul the user object to the TOP;
//           })
//           .catch((err) => {
//             console.log(err);
//           });
    
//         e.preventDefault();
//       };

return (

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6">
      Bestest-Buy
    </Typography>    
    <Button color="inherit">Sign Up</Button>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>


)
}

export default Nav;