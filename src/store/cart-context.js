import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  // Now we have two functions one will add an item and other will remove an item
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
