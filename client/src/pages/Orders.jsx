import { useState, useEffect } from 'react';
import axios from "axios";

//material ui import
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


export default function Orders() {
    const classes = useStyles();
    const orders = [
        {
            name: "Macbook pro",
            brand: "Apple",
            description: "Macbook pro 13 inch",
            category: "Electronics",
            image: "https://i.ibb.co/Swcgm6g/Macbook-01.jpg",
            price: 2000,
            quantity: 1,
            total: 2000,
        }, {
            name: "Macbook pro",
            brand: "Apple",
            description: "Macbook pro 13 inch",
            category: "Electronics",
            image: "https://i.ibb.co/Swcgm6g/Macbook-01.jpg",
            price: 2000,
            quantity: 1,
            total: 2000,
        }, {
            name: "Macbook pro",
            brand: "Apple",
            description: "Macbook pro 13 inch",
            category: "Electronics",
            image: "https://i.ibb.co/Swcgm6g/Macbook-01.jpg",
            price: 2000,
            quantity: 1,
            total: 2000,
        },]
    // const [orders, setOrders] = useState([]);
    // useEffect(() => {
    //     axios.get(`/ordersbackend/${userData.id}`).then((res) => {
    //         console.log(res.data);
    //         setOrders(res.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }, []);
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Orders
          </Typography>
                    <div className={classes.demo}>
                        <List>
                            {orders.map((currentOrder) => {
                                return (
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="image"
                                                // {currentOrder.ordersHistory[0].productId.name} 
                                                src={currentOrder.image}
                                                // {currentOrder.ordersHistory[0].productId.image} 
                                                variant="square" />

                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="hello"
                                            // {currentOrder.ordersHistory[0].productId.name}
                                            secondary="hi"
                                        // {`Price: ${currentOrder.ordersHistory[0].productId.price} | Quantity: ${currentOrder.ordersHistory[0].quantity} | Date: ${currentOrder.createdAt}`}
                                        />
                                    </ListItem>
                                );
                            })}
                            <ListItem primary="20" />
                        </List>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}


const test = {
    userId:
    {
        _id: "607e42cb2f646c501d84b94f",
        username: "me",
        password: "$2b$10$i0HaB3E2Qmoa9AO1If5Ya.Vw2oAw7Z05.cM1JgXEzLkxk0WPBmJXW",
        email: "me@hotmail.com",
        address: "x",
        role: "member",
        createdAt: "2021-04-20T02:56:11.348Z",
    },
    orderHistory: [
        {
            productId: {
                name: "Macbook pro",
                brand: "Apple",
                description: "Macbook pro 13 inch",
                category: "Electronics",
                image: "https://i.ibb.co/Swcgm6g/Macbook-01.jpg",
                price: 2000,
            },
            quantity: 1,
            total: 2000,
        }
    ],
    createdAt: "2021-04-20T02:56:11.348Z",
}