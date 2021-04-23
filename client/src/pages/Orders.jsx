import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/UserProvider";

//material ui import
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OrderSheet from "../components/OrderSheet";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "21px",
  },
  noOrderText: {
    marginTop: "150px",
  },
}));

const Orders = () => {
  const classes = useStyles();
  const userInfo = useContext(UserContext);
  const userData = userInfo.state.user;
  // console.log("id", userData._id);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    axios
      .get(`/ordersbackend/${userData._id}`)
      .then((res) => {
        // console.log(res.data.data);
        setOrderData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12} className={classes.title}>
          {" "}
          <Typography variant="h4">Order History</Typography>{" "}
        </Grid>
        {orderData.length === 0 ? (
          <Grid item xs={12} className={classes.noOrderText}>
            <Typography variant="h6">
              You do not have any existing orders!
            </Typography>
          </Grid>
        ) : (
          orderData.map((orderItem) => {
            return <OrderSheet {...orderItem} key={orderItem._id} />;
          })
        )}
      </Grid>
    </>
  );
};

export default Orders;
