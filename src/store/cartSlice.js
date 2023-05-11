import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryPrice: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, aciton) => {
      const newProduct = aciton.payload.product;
      state.items.push({ product: newProduct, quantity: 1 });
    },
    changeQuantiy: (state, aciton) => {},
  },
});
