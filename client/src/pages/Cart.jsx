import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
    const [Cart, setCart] = useState([]);
    const [cart, setCart] = useState({});
    const handleCartOut = () => {
        axios.post("/backend").then((res) => {
            console.log(res.data);
            setCart(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>

        </>
    )
}