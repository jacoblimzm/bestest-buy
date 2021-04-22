import { Button } from "@material-ui/core";
import { useContext } from "react";
import { REMOVE_FROM_CART } from "../actions/types";
import { CartContext } from "../context/CartProvider";

const RemoveFromCartButton = ({ id }) => {
  const cart = useContext(CartContext);

  const handleClick = (itemId) => {
    cart.dispatch({ type: REMOVE_FROM_CART, payload: { productId: itemId } });
  };

  console.log(cart.state);
  return (
    <Button onClick={() => {handleClick(id)}} size="small" color="secondary">
      Remove
    </Button>
  );
};

export default RemoveFromCartButton;