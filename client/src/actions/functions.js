const calculateCartTotalCost = (cartArray) => {
  let total = 0;
  for (let item of cartArray) {
    total += item.price * item.quantity;
  }
  return total;
};
const calculateCartTotalItems = (cartArray) => {
  let total = 0;
  for (let item of cartArray) {
    total += item.quantity;
  }
  return total;
};

export {calculateCartTotalCost, calculateCartTotalItems}