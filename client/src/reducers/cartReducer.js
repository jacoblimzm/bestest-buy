import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const cartReducer = (cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCart = [...cart]; // make a copy so state is not mutated
      const itemIndex = updatedCart.findIndex(
        (item) => item._id === action.payload.product._id // the payload property HAS to be named "product" and accept an object!
      );
      if (itemIndex < 0) {
        // product is currently not in cart
        updatedCart.push({ ...action.payload.product, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[itemIndex],
        };
        updatedItem.quantity++;
        updatedCart[itemIndex] = updatedItem;
        //   updatedCart[itemIndex].quantity++; // could potentially replace the 5 lines above it.
      }
      return updatedCart;

    case REMOVE_FROM_CART:
      const updatedCart1 = [...cart];
      const itemIndex1 = updatedCart1.findIndex(
        (item) => item._id === action.payload.productId // the payload property HAS to be name "productId" and accept a string;
      );
      const updatedItem1 = {
          ...updatedCart1[itemIndex1],
      }
      updatedItem1.quantity--;
      if (updatedItem1.quantity <= 0) {
          updatedCart1.splice(itemIndex1, 1); // remove the product with qty 0 from the cart.
      } else {
          updatedCart1[itemIndex1] = updatedItem1;
      }
      return updatedCart1;
    default:
      return cart;
  }
};

export default cartReducer;
