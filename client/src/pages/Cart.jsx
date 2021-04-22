import axios from 'axios';
import { useContext, useState } from 'react';
import { CartContext } from "../context/CartProvider"
import CartTable from "../components/CartTable"
import { UserContext } from '../context/UserProvider'
import { calculateCartTotalCost } from "../actions/functions"
import { Redirect, Link } from "react-router-dom"
// import { OrdersData } from "./Orders"
//material-ui imports
import { Button, Grid } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        table: {
            minWidth: 700,
        },
    }
}));

export default function Cart() {

    const classes = useStyles();

    // usecontext to get cart & user current data
    const cart = useContext(CartContext);
    console.log(cart.state);
    const cartData = (cart.state === [] ? <h2>Your cart is currently empty</h2> : cart.state)

    const userInfo = useContext(UserContext);
    const userData = userInfo.state


    //calculation for total from import function
    const invoiceTotal = calculateCartTotalCost(cart.state === [] ? 0 : cart.state)
    const [checkOut, setCheckOut] = useState("false");
    // const [orderData, setOrderData] = useState([]);

    const handleCartOut = (event) => {
        event.preventDefault();
        if (userData._id === "") {
            return "Please Login to add to cart."
        } else {
            console.log(checkOut)
            console.log(cartData)
            console.log(userData);
            console.log(invoiceTotal)
            axios.post("/ordersbackend", {
                userId: userData.user._id,
                ordersHistory:
                    cartData.map((itemData) => {
                        return {
                            productId: itemData._id,
                            quantity: itemData.quantity,
                        }
                    }),
                total: invoiceTotal,
            }).then((res) => {
                console.log(res.data);
                // setOrderData(res.data);
            }).catch((error) => {
                console.log(error);
            })

        }

    }

    return (
        <>
            <h1>CART</h1>
            <Grid container spacing={3} justify="center">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={4}>
                                    Description
            </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                                <TableCell align="right">Unit</TableCell>
                                <TableCell align="right">Sum</TableCell>
                                <TableCell align="right">Add/Remove</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartData.map((item) => {
                                return (
                                    <CartTable item={item} />
                                )
                            })}
                            <TableRow>
                                <TableCell colSpan={4}>Total</TableCell>
                                <TableCell align="right">{calculateCartTotalCost(cart.state)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Link to={checkOut === "true" ? "/orders" : "/cart"} onClick={handleCartOut} className="btn btn-primary">Check out</Link>
            </Grid>
            {/* <OrdersData orderIds={orderData} /> */}
        </>
    );
};