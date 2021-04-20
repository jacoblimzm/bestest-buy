// import React from 'react';
// import axios from 'axios';
// import { useState } from "react";
// import Nav from "../components/Nav";

// const SignUp = () => {
// const [currentUser, setCurrentUser] = useState({});

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const username = e.target.username.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const address = e.target.address.value;

//     // upon submit, an API POST request must be made to the backend to /usersbackend
//     axios
//       .post("/usersbackend", {
//         username,
//         email,
//         password,
//         address
//       })
//       .then((res) => {
//         console.log(res.data); // the backend responds with a json object!!
//         // handleAddBookmark(res.data); // need to haul the user object to the TOP;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

// return (
//     <>
//         < Navbar />
//     // <form onSubmit={handleRegister}>
//     //   <input type="text" name="username" placeholder="username" />
//     //   <input type="email" name="email" placeholder="email" />
//     //   <input type="password" name="password" placeholder="password" />
//     // //   <input type="submit" name="submit" value="Register" /> 
//     // </form>
//      </>
// );
// };

// export default SignUp;