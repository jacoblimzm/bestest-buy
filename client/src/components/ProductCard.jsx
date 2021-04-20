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

  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 140,
    },
    link: {
        textDecoration: "none",
        color: "#000"
    }
  });
  const classes = useStyles();

  return (
    <>
      <Grid item sm={4} md={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <Link to={`/products/${_id}`} className={classes.link}>
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
                <Typography variant="h6" color="textPrimary" component="p">
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
