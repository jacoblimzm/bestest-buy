import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { UserContext } from "../context/UserProvider";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 150,
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
});

const ProductCard = (props) => {
  const user = useContext(UserContext);
  const classes = useStyles();

  return (
    <>
      <Grid item sm={4} md={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <Link to={`/product/${props.product._id}`} className={classes.link}>
              <CardMedia
                className={classes.media}
                image="https://picsum.photos/500/500"
                title={props.product.name}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {props.product.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textPrimary"
                  component="p"
                >
                  ({props.product.brand})
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p">
                  ${props.product.price}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
          {user.state.isAuthenticated && (
            <CardActions>
              <AddToCartButton productProp={props.product} />
            </CardActions>
          )}
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
