import axios from "axios";
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART } from "../actions/types";
import { CartContext } from "../context/CartProvider"

//Material-ui import
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function createRow(name, quantity, prices) {
    const price = priceRow(quantity * prices);
    return { name, quantity, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

//cart calculations
const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Cart() {
    const classes = useStyles(); // for material-UI
    const data = {
        _id: "607f2b4699bce31b37d4583b",
        name: "T-Shirt",
        brand: "Zara",
        description: "Grey crew neck",
        category: "Fashion",
        image: "https://i.ibb.co/5MnkdgT/grey-t-shirt-01.jpg",
        price: 20,
        createdAt: "2021-04-20T19:28:06.480Z",
        __v: 0
    }
    const cart = useContext(CartContext);
    console.log(cart.state);
    const handleCartOut = (total) => {
        axios.post("/ordersbackend", { total }).then((res) => {
            console.log(res.data);
            setCart(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    const rows = () => {
        cart.state.map((items) => {
            console.log(items);
            // return (
            //     <TableRow key={items.name}>
            //         <TableCell>{item.name}</TableCell>
            //         <TableCell>
            //             <button onClick={() => cart.dispatch({ type: ADD_TO_CART, payload: { product: items } })}>+</button>
            //         </TableCell>
            //         <TableCell>
            //             <button onClick={() => cart.dispatch({ type: REMOVE_FROM_CART, payload: { productId: items._id } })}>-</button>
            //         </TableCell>
            //         <TableCell align="right">{items.quantity}</TableCell>
            //         <TableCell align="right">{ccyFormat(items.price)}</TableCell>
            //     </TableRow>
            // )
        })
    }




    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                My Cart
            </TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                            <TableCell align="right">Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
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
            <button onClick={handleCartOut}>Checkout</button>
        </>
    )
}




