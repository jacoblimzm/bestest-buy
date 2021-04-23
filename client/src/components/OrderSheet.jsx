import { Grid, makeStyles, Typography } from "@material-ui/core";
import OrderRow from "./OrderRow";

const useStyles = makeStyles((theme) => ({
  sheet: {
      margin: theme.spacing(3),
      borderBottom: "solid 1px #000",
      borderRadius: "5px"
  }

}));

const OrderSheet = ({ _id, userId, ordersHistory, total, createdAt }) => {
  const classes = useStyles();
  return (
      <Grid width="75%" item xs={8} sm={7} className={classes.sheet} >
        <Typography variant="h6" className={classes.title}>
          {`Order Date: ${createdAt.substring(0, 10)}`}
        </Typography>
        {ordersHistory.map((orderItem) => {
          return <OrderRow {...orderItem} key={orderItem._id} />;
        })}
        <Typography align="center" color="primary" component="h5" variant="h5">
          {`Total Cost: $${total}`}
        </Typography>
      </Grid>
  );
};

export default OrderSheet;
