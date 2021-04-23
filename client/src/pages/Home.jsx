import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//material-ui imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";

//To configure material-ui
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  backgroudImage: {
    maxWidth: "100%",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
}));

export default function Home() {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("/categoriesbackend")
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Go to category page");
  };
  const classes = useStyles();

  return (
    <>
      <img
        src="https://i.imgur.com/AhvmtfB.jpg"
        className={classes.backgroudImage}
        edge="start"
      />
      <Grid container direction="row" spacing={5} justify="center">
        <Grid item xs={12}>
          <Typography variant="body1">Scroll down to shop</Typography>
          {/* <Button variant="contained" color="primary">
                        Shop now</Button> */}
        </Grid>

        {Category.map((categories) => {
          return (
            <Grid item xs={9} sm={6} md={4}>
              <Card>
                <CardActionArea onClick={handleClick}>
                  <Link
                    to={`/products/${categories.category}`}
                    className={classes.link}
                  >
                    <CardMedia
                      className={classes.media}
                      image={categories.image}
                      title={categories.category}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {categories.category}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {/* <Button className={classes.marginAutoItem}>Scroll up</Button> */}
    </>
  );
}
