// import { useState, useEffect, useContext } from 'react';
// import axios from "axios";
// import _ from 'lodash';
// //material ui import
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 5,
//         maxWidth: 1000,
//     },
//     demo: {
//         backgroundColor: theme.palette.background.paper,
//     },
//     title: {
//         margin: theme.spacing(10, 0, 2),
//     },
// }));

// export default function Orders() {
//     const classes = useStyles();

//     // const [ordersData, setOrdersData] = useState();
//     const orders = () => {
//         return (axios.get("/ordersbackend/").then(response => response.data))

//     }

//     const findName = { JSONPath: $orders }
// }
// console.log(findName)
// return (
//     <>
//         <Grid container spacing={6} onMouseOver={orders}>
//             <Grid item xs={12} md={8}>
//                 <Typography variant="h6" className={classes.title}>
//                     Orders
//           </Typography>
//                 <div className={classes.demo}>
//                     <List>
//                         {orders.latestOrder[0].ordersHistory.map((currentOrder) => {
//                             return (
//                                 <ListItem>
//                                     <ListItemAvatar>
//                                         <Avatar alt=''
//                                             src={currentOrder.productId.image}
//                                             variant="square" />

//                                     </ListItemAvatar>
//                                     <ListItemText
//                                         primary={currentOrder.productId.name}
//                                         secondary={currentOrder.productId.price + "|" + currentOrder.productId.quantity + "|" + currentOrder.productId.total}
//                                     />
//                                 </ListItem>
//                             );
//                         })}
//                         <ListItem primary="20" />
//                     </List>
//                 </div>
//             </Grid>
//         </Grid>
//     </>
// )
// }
