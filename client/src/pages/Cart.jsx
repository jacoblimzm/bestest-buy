import axios from "axios";
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART } from "../actions/types";
import { CartContext } from "../context/CartProvider"


export default function Cart() {
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
    // const handleCartOut = (total) => {
    //     setTotal();
    //     axios.post("/ordersbackend", { total }).then((res) => {
    //         console.log(res.data);
    //         setCart(res.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }
    return (
        <>
            <h1>Cart</h1>
            {cart.state.map((item) => {
                return (
                    <h1>Carted{item.name}</h1>
                )
            })}
            <button onClick={() => cart.dispatch({ type: ADD_TO_CART, payload: { product: data } })}>+</button>
            <button onClick={() => cart.dispatch({ type: REMOVE_FROM_CART, payload: { productId: data._id } })}>-</button>
            <button >Checkout</button>
        </>
    )
    // onClick={handleCartOut}
}