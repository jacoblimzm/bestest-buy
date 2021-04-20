import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const ProductCard = ({ _id, name, description, brand, price, image }) => {
  const product = [
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
  ];

  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 140,
    },
    link: {
        textDecoration: "none",
    }
  });
  const classes = useStyles();

  return (
    <>
      <Grid item sm={4} md={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <Link to="/" className={classes.link}>
              <CardMedia
                className={classes.media}
                image="https://picsum.photos/500/500"
                title={name}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textPrimary"
                  component="p"
                >
                  ({brand})
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  ${price}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Details
            </Button>
            <Button variant="contained" size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
