// import React, {useState} from 'react';
// import axios from 'axios';
// import { CssBaseline, Avatar, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Button} from '@material-ui/core';
// import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import { makeStyles } from '@material-ui/core/styles';;


// const useStyles = makeStyles((theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%',
//       marginTop: theme.spacing(3),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));
  
//   const SignUp = () => {
//     const classes = useStyles();
//     const [open, setOpen] = useState(false);
//     const [snackbarColor, setSnackbarcolor] = useState("info");
//     const [inputValues, setInputValues] = useState({
//       username: "",
//       password: "",
//       email: "",

//     }

//     const handleSignUp = (e) => {
//       e.preventDefault();
//       console.log(inputValues.username,inputValues.password);
//       axios
//         .post("/sessionsbackend", {
//           "username": inputValues.username,
//           "password": inputValues.password,
//           "email": inputValues.email,
//         })
//         .then((res) => {
//           console.log(res.data);
//           setOpen(true);
//           //setMessage(res.data.message)
//           if (res.status ===200){
//             //set snackbar to Greenb
//           } else{
//             //set snackbar to Ren
//           }
          
//         })
//       }
//     const handleClick = () => {
//     const handleClose = (event, reason) => {
//       if (reason === 'clickaway') {
//         return;
//       }

//       setOpen(false);
//     };
  
//     return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign Up
//           </Typography>
//           <form className={classes.form} noValidate>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="fname"
//                   name="username"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="username"
//                   label="Username"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//               </Grid>
//               </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign Up
//             </Button>
//             <Grid container justify="flex-end">
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   Already have an account? Login
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//         <Snackbar
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         open={open}
//         autoHideDuration={5000}
//         onClose={handleClose}
//         message={"sign up is succesful."}
//         action={
//           <>
//             <Button color="secondary" size="small" onClick={handleClose}>
//               UNDO
//             </Button>
//             <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
//               <CloseIcon fontSize="small" />
//             </IconButton>
//         </>
//         }
//       />
//       </Container>
//     );
//       };
//     };