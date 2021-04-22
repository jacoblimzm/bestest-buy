import axios from 'axios';
import { useContext } from 'react';
import { CartContext } from "../context/CartProvider"
import CartTable from "../components/CartTable"
import { UserContext } from '../context/UserProvider'
import { calculateCartTotalCost } from "../actions/functions"
import { Redirect } from "react-router-dom"

//material-ui imports
import { Grid } from "@material-ui/core";

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

    // usecontext to get cart current data
    const cart = useContext(CartContext);
    console.log(cart.state);
    const cartData = [
        {
            name: "T-Shirt",
            brand: "Zara",
            description: "Grey crew neck",
            category: "Fashion",
            image: "https://i.ibb.co/5MnkdgT/grey-t-shirt-01.jpg",
            price: 20,
            quantity: 1,
        },
        {
            name: "Macbook pro",
            brand: "Apple",
            description: "Macbook pro 13 inch",
            category: "Electronics",
            image: "https://i.ibb.co/Swcgm6g/Macbook-01.jpg",
            price: 2000,
            quantity: 2,
        },
        {
            name: "Air-fryer",
            brand: "Philips",
            description: "Black 5 litre",
            category: "Household",
            image: "https://i.ibb.co/61KL9gc/airfryer-01.jpg",
            price: 500,
            quantity: 3,
        }]
    // (cart.state === [] ? <h2>Your cart is currently empty</h2> : cart.state)
    // const userInfo = useContext(UserContext);
    // console.log(userData.state);
    // const userData = userInfo.state

    const invoiceTotal = calculateCartTotalCost(cart.state === [] ? 0 : cart.state)

    // const handleCartOut = () => {
    //     if (userData._id === "") {
    //         return "Please Login to add to cart."
    //     } else {
    //         axios.post("/ordersbackend", {
    //             userId: userData,
    //             ordersHistory: cartData,
    //             total: invoiceTotal,
    //         }).then((res) => {
    //             console.log(res.data);
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    //         return <Redirect to={"/orders"} />
    //     }
    // }
    return (
        <>
            <h1>Cart</h1>
            <Grid container spacing={2} justify="center">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                    CART
            </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                                <TableCell align="right">Unit</TableCell>
                                <TableCell align="right">Sum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartData.map((item) => {
                                return (
                                    <CartTable item={item} />
                                )
                            })}
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">{calculateCartTotalCost(cart.state)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <button onClick={handleCartOut}>Checkout</button> */}

                {/* <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                    Details
            </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Desc</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                                <TableCell align="right">Unit</TableCell>
                                <TableCell align="right">Sum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.desc}>
                                    <TableCell>
                                        <Avatar alt="" src="https://i.ibb.co/5MnkdgT/grey-t-shirt-01.jpg" variant="square" />
                                        {row.desc}
                                    </TableCell>
                                    <TableCell align="right">{row.qty}
                                        <button>+</button>
                                        <button>-</button></TableCell>
                                    <TableCell align="right">{row.unit}</TableCell>
                                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tax</TableCell>
                                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
 */}
            </Grid>
        </>
    );
};