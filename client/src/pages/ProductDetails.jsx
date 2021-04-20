import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Icon,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { productId } = useParams();
  //   console.log(productId);
  const [productState, setProductState] = useState({
    _id: "607e480f95c64f67220c430e",
    name: "Vitamin-C",
    brand: "Swisse",
    description: "100 capsule",
    category: "Health & Wellness",
    image: "x",
    price: 70,
    createdAt: "2021-04-20T03:18:39.012Z",
    __v: 0,
  });
  const getProductDetails = (id) => {
    axios
      .get(`/productsbackend/findproduct/${id}`)
      .then((res) => {
        console.log(res.data);
        setProductState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductDetails(productId);
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 300,
    },
    link: {
      textDecoration: "none",
      color: "#000",
    },
    card: {
      height: "100%",
    },
    bottomMargin: {
      marginBottom: "16px",
    },
    highlight: {
      backgroundColor: "#2196f3",
    },
  });
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs={12} md={3}>
          <Card elevation={3} className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/500/500"
              title={productState.name}
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography
                    className={classes.bottomMargin}
                    align="left"
                    variant="h5"
                  >
                    {productState.name}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    className={classes.bottomMargin}
                    align="right"
                    variant="h5"
                  >
                    ${productState.price}
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                align="left"
                variant="body1"
                color="textPrimary"
                component="p"
              >
                {productState.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card elevation={3} className={classes.card}>
            <CardContent>
              <Typography
                className={classes.bottomMargin}
                align="left"
                variant="h5"
              >
                Product Details
              </Typography>
              <Typography align="left" variant="h6">
                Brand:
              </Typography>
              <Typography
                align="left"
                variant="body1"
                color="textSecondary"
                className={classes.bottomMargin}
              >
                {productState.brand}
              </Typography>
              <Typography align="left" variant="h6">
                Category:
              </Typography>
              <Typography
                align="left"
                variant="body1"
                color="textSecondary"
                className={classes.bottomMargin}
              >
                {productState.category}
              </Typography>
              <Typography align="left" variant="h6">
                Product ID:
              </Typography>
              <Typography
                align="left"
                variant="body1"
                color="textSecondary"
                className={classes.bottomMargin}
              >
                {productState._id}
              </Typography>
              <Typography align="left" variant="h6">
                Availability:
              </Typography>
              <Typography
                align="left"
                variant="body1"
                color="textSecondary"
                className={classes.bottomMargin}
              >
                Yes
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Icon>
                <ShoppingCartIcon />
              </Icon>
              <Typography display="inline" variant="h5" component="h2">
                Cart
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                color="textPrimary"
                component="p"
              >
                3 items in cart
              </Typography>
              <Typography variant="h6" color="textPrimary" component="p">
                $70
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">
                Add to Cart
              </Button>
              <Button size="small" color="primary">
                Return to products
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
