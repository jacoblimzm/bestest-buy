import axios from "axios";
import { useState } from 'react';

export default function Home() {
    const [catergory, setCatergory] = useState();

    axios.get("/productsbackend").then((res) => {
        setCatergory(res.data);
    }).catch((error) => {
        console.log(err);
    })

    return (
        <>

        </>
    )
}