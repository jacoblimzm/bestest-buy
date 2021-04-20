import { Card, Grid, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([
    {
      _id: "607e480f95c64f67220c430e",
      name: "Vitamin-C",
      brand: "Swisse",
      description: "100 capsule",
      category: "Health & Wellness",
      image: "x",
      price: 70,
      createdAt: "2021-04-20T03:18:39.012Z",
      __v: 0,
    },
    {
      _id: "607e480f95c64f67220c430b",
      name: "Macbook pro",
      brand: "Apple",
      description: "Macbook pro 13 inch",
      category: "Electronics",
      image: "x",
      price: 2000,
      createdAt: "2021-04-20T03:18:39.011Z",
      __v: 0,
    },
    {
      _id: "607e480f95c64f67220c430a",
      name: "T-Shirt",
      brand: "Zara",
      description: "White crew neck",
      category: "Fashion",
      image: "x",
      price: 20,
      createdAt: "2021-04-20T03:18:39.009Z",
      __v: 0,
    },
    {
      _id: "607e480f95c64f67220c430f",
      name: "Facial Cleanser",
      brand: "Innisfree",
      description: "Whitening, 100ml",
      category: "Beauty & personal care",
      image: "x",
      price: 28,
      createdAt: "2021-04-20T03:18:39.012Z",
      __v: 0,
    },
    {
      _id: "607e480f95c64f67220c430d",
      name: "Ice-cream",
      brand: "Häagen Dazs",
      description: "Chocolate",
      category: "Food & Beverages",
      image: "x",
      price: 13,
      createdAt: "2021-04-20T03:18:39.012Z",
      __v: 0,
    },
    {
      _id: "607e480f95c64f67220c430c",
      name: "Air-fryer",
      brand: "Philips",
      description: "Black 5 litre",
      category: "Household",
      image: "x",
      price: 700,
      createdAt: "2021-04-20T03:18:39.011Z",
      __v: 0,
    },
  ]);

  const getAllProducts = () => {
    axios
      .get("/productsbackend")
      .then((res) => {
        console.log(res.data); //backend responds with the user data of the current session!
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Grid container spacing={2} justify="center">
      {allProducts.map((product, index) => {
        return <ProductCard {...product} key={index} />;
      })}
    </Grid>
  );
};

export default ProductList;
