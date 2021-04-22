import { Grid } from "@material-ui/core";
import "@fontsource/roboto";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router";

const ProductList = () => {
  const { category } = useParams();
  // console.log(category);
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = (category) => {
    if (category === "All") {
      axios
        .get(`/productsbackend`)
        .then((res) => {
          console.log(res.data); //backend responds with the user data of the current session!
          setAllProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`/productsbackend/${category}`)
        .then((res) => {
          console.log(res.data); //backend responds with the user data of the current session!
          setAllProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getAllProducts(category);
  }, [category]); //HERE need to monitor category with is the params in the link

  return (
    <Grid container spacing={2} justify="center">
      {allProducts.map((product, index) => {
        return <ProductCard {...product} key={index} />;
      })}
    </Grid>
  );
};

export default ProductList;
