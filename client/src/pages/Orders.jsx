import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/UserProvider";

//material ui import
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Orders() {
  const theme = useTheme();

  const classes = useStyles();

  const userInfo = useContext(UserContext);
  const userData = userInfo.state.user;
  console.log("id", userData._id);
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    axios
      .get(`/ordersbackend/${userData._id}`)
      .then((res) => {
        console.log(res.data);
        setOrderData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("hello world");
  });

  console.log(orderData);
  return (
    <>
      <h1>Orders History</h1>
      <Grid container spacing={5} justify="center">
        <Grid width="75%" item xs={5} md={6}>
          <Typography variant="h6" className={classes.title}>
            {orderData?.data[0]?.createdAt}
          </Typography>
          {orderData?.data[0]?.ordersHistory.map((currentOrder) => {
            return (
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={currentOrder.productId.image}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography
                      align="left"
                      color="primary"
                      component="h5"
                      variant="h5"
                    >
                      {currentOrder.productId.name}
                    </Typography>
                    <Typography
                      align="left"
                      variant="subtitle1"
                      color="primary"
                    >
                      {"Price:  " + currentOrder.productId.price}
                    </Typography>
                    <Typography
                      align="left"
                      variant="subtitle1"
                      color="primary"
                    >
                      {"Quantity:  " + currentOrder.quantity}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            );
          })}
          <Typography align="left" color="primary" component="h5" variant="h5">
            {"Total" + orderData.data[0].total}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
