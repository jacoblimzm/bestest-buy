import { Button } from "@material-ui/core";
import { useContext } from "react";
import { ADD_TO_CART } from "../actions/types";
import { UserContext } from "../context/UserProvider";

const AddToCartButton = ({ productProp }) => {
  const cart = useContext(UserContext);

  const handleClick = (item) => {
    cart.dispatch({ type: ADD_TO_CART, payload: { product: item } });
  };
  return (
    <Button onClick={() => {handleClick(productProp)}}variant="contained" size="small" color="primary">
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
