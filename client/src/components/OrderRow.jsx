import { Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

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

const OrderRow = ( {_id, productId, quantity, createdAt }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={productId.image}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography align="left" color="primary" component="h5" variant="h5">
            {productId.name}
          </Typography>
          <Typography align="left" variant="subtitle1" color="primary">
            {`Price: $${productId.price}`}
          </Typography>
          <Typography align="left" variant="subtitle1" color="primary">
            {`Quantity: ${quantity}`}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default OrderRow;
